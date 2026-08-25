import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Un article, tel que decrit par son frontmatter.
 *
 * title / slug / date / description sont obligatoires ; les autres champs
 * sont facultatifs, a une exception pres : une `image` sans `imageAlt` fait
 * echouer le build (regle CLAUDE.md #3 — toute image porte un alt).
 */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Date de publication, ISO court : "2026-02-03". */
  date: string;
  author?: string;
  tag?: string;
  image?: string;
  imageAlt?: string;
  /**
   * Nom du fichier sans extension. Le slug pouvant differer du nom de
   * fichier, c'est cette valeur qui sert a retrouver le .mdx sur le disque.
   */
  fileName: string;
};

/** Un article avec le corps MDX brut (sans le frontmatter). */
export type BlogPostWithContent = BlogPost & { content: string };

const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

function listFileNames(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function parseFile(fileName: string): BlogPostWithContent {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${fileName}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const champs = data as Record<string, unknown>;
  const ou = `content/blog/${fileName}.mdx`;

  // On echoue au build plutot qu'a l'execution : avec 39 articles importes
  // d'un autre CMS, un champ manquant doit sauter aux yeux immediatement et
  // nommer le fichier fautif, pas produire une page a moitie vide en prod.
  const requis = (champ: string): string => {
    const valeur = champs[champ];
    if (typeof valeur !== "string" || valeur.trim() === "") {
      throw new Error(`${ou} : frontmatter "${champ}" manquant ou vide.`);
    }
    return valeur.trim();
  };

  const optionnel = (champ: string): string | undefined => {
    const valeur = champs[champ];
    if (valeur === undefined || valeur === null) return undefined;
    if (typeof valeur !== "string" || valeur.trim() === "") {
      throw new Error(`${ou} : frontmatter "${champ}" doit etre une chaine non vide.`);
    }
    return valeur.trim();
  };

  const date = requis("date");
  if (!DATE_FORMAT.test(date)) {
    throw new Error(`${ou} : "date" doit etre au format AAAA-MM-JJ (recu : "${date}").`);
  }

  const slug = requis("slug");
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error(
      `${ou} : "slug" doit etre en minuscules, sans accent ni espace (recu : "${slug}").`
    );
  }

  const image = optionnel("image");
  const imageAlt = optionnel("imageAlt");
  if (image && !imageAlt) {
    throw new Error(`${ou} : "image" est renseignee mais "imageAlt" manque.`);
  }

  return {
    slug,
    title: requis("title"),
    description: requis("description"),
    date,
    author: optionnel("author"),
    tag: optionnel("tag"),
    image,
    imageAlt,
    fileName,
    content,
  };
}

/**
 * Tous les articles, du plus recent au plus ancien.
 * Leve une erreur si deux articles revendiquent le meme slug.
 */
export function getAllPosts(): BlogPost[] {
  const posts = listFileNames().map(parseFile);

  const vus = new Map<string, string>();
  for (const post of posts) {
    const deja = vus.get(post.slug);
    if (deja) {
      throw new Error(
        `Slug en double : "${post.slug}" est utilise par ${deja}.mdx et ${post.fileName}.mdx.`
      );
    }
    vus.set(post.slug, post.fileName);
  }

  // A date egale, on departage par titre pour que l'ordre reste stable d'un
  // build a l'autre — les imports d'un CMS partagent souvent la meme date.
  return posts.sort(
    (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, "fr")
  );
}

/** Un article et son corps MDX, ou null si le slug n'existe pas. */
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  for (const fileName of listFileNames()) {
    const post = parseFile(fileName);
    if (post.slug === slug) return post;
  }
  return null;
}

/** Les articles portant ce tag, du plus recent au plus ancien. */
export function getPostsByTag(tag: string): BlogPost[] {
  const cible = tag.trim().toLowerCase();
  return getAllPosts().filter((post) => post.tag?.toLowerCase() === cible);
}

/**
 * Les tags existants, par ordre alphabetique.
 * Complement de getPostsByTag : sans lui, rien ne permet de savoir quels
 * tags appeler (utile des qu'on voudra des pages ou un filtre par tag).
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  for (const post of getAllPosts()) if (post.tag) tags.add(post.tag);
  return [...tags].sort((a, b) => a.localeCompare(b, "fr"));
}

/**
 * Articles a suggerer en fin de lecture : meme tag d'abord, complete par les
 * plus recents si le tag n'en fournit pas assez, pour ne jamais afficher un
 * bloc a moitie vide.
 */
export function getRelatedPosts(slug: string, limite = 3): BlogPost[] {
  const tous = getAllPosts();
  const courant = tous.find((p) => p.slug === slug);
  const autres = tous.filter((p) => p.slug !== slug);

  const memeTag = courant?.tag
    ? autres.filter((p) => p.tag === courant.tag)
    : [];
  const complement = autres.filter((p) => !memeTag.includes(p));

  return [...memeTag, ...complement].slice(0, limite);
}

