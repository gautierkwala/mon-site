import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** Date de publication, ISO court : "2024-03-12". */
  date: string;
  /** Date de derniere modification, si l'article a ete revu depuis. */
  updated?: string;
  tags: string[];
};

/** Le frontmatter tel qu'il sort du YAML, avant validation. */
type RawFrontmatter = Partial<Record<keyof PostMeta, unknown>>;

const DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

function readPost(slug: string): PostMeta {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(file, "utf8")) as unknown as {
    data: RawFrontmatter;
  };

  // On echoue au build plutot qu'a l'execution : avec 39 articles importes
  // d'un autre CMS, un champ manquant doit sauter aux yeux tout de suite et
  // nommer le fichier fautif, pas produire une page a moitie vide en prod.
  const need = (champ: "title" | "description" | "date"): string => {
    const valeur = data[champ];
    if (typeof valeur !== "string" || valeur.trim() === "") {
      throw new Error(
        `content/blog/${slug}.mdx : frontmatter "${champ}" manquant ou vide.`
      );
    }
    return valeur.trim();
  };

  const date = need("date");
  if (!DATE_FORMAT.test(date)) {
    throw new Error(
      `content/blog/${slug}.mdx : "date" doit etre au format AAAA-MM-JJ (recu : "${date}").`
    );
  }

  const updated = typeof data.updated === "string" ? data.updated.trim() : undefined;
  if (updated && !DATE_FORMAT.test(updated)) {
    throw new Error(
      `content/blog/${slug}.mdx : "updated" doit etre au format AAAA-MM-JJ (recu : "${updated}").`
    );
  }

  return {
    slug,
    title: need("title"),
    description: need("description"),
    date,
    updated,
    tags: Array.isArray(data.tags) ? data.tags.filter((t): t is string => typeof t === "string") : [],
  };
}

/** Tous les articles, du plus recent au plus ancien. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => readPost(f.replace(/\.mdx$/, "")))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): PostMeta | null {
  if (!fs.existsSync(path.join(BLOG_DIR, `${slug}.mdx`))) return null;
  return readPost(slug);
}

/** "2024-03-12" -> "12 mars 2024". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
