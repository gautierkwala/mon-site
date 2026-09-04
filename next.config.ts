import type { NextConfig } from "next";
import createMDX from "@next/mdx";

// Anciennes URL heritees de l'import depuis Umso : elles ne decrivaient pas
// leur contenu ("hello-world-fwzre"). Redirections permanentes pour qu'un
// lien existant ou un signet ne tombe pas sur une page introuvable.
const ANCIENNES_URL_BLOG = [
  { source: "/blog/hello-world-bpjmw", destination: "/blog/equipes-nappliquent-pas-apres-formation", permanent: true },
  { source: "/blog/hello-world-fwzre", destination: "/blog/regularite-plus-forte-que-motivation", permanent: true },
  { source: "/blog/hello-world-hosea", destination: "/blog/commerciaux-parlent-trop-vendent-moins", permanent: true },
  { source: "/blog/hello-world-karaf", destination: "/blog/confondre-activite-et-performance-commerciale", permanent: true },
    { source: "/blog/hello-world-rqlrs", destination: "/blog/commerciaux-manquent-de-methode", permanent: true },
  { source: "/blog/hello-world-tixcl", destination: "/blog/devenir-proactif-developpement-commercial", permanent: true },
  { source: "/blog/hello-world-tlncj", destination: "/blog/qualifier-ses-prospects-en-b2b", permanent: true },
  { source: "/blog/hello-world-twifq", destination: "/blog/objection-prix-vrai-probleme", permanent: true },
  { source: "/blog/hello-world-vteuv", destination: "/blog/quand-les-commerciaux-accusent-le-marche", permanent: true },
  { source: "/blog/hello-world-vuylo", destination: "/blog/culture-de-progression-commerciale", permanent: true },
  { source: "/blog/hello-world-yikhy", destination: "/blog/formation-commerciale-pour-entrepreneurs", permanent: true },
  { source: "/blog/hello-world-ztxez", destination: "/blog/art-de-dire-non-commercial", permanent: true },
  { source: "/blog/hello-world", destination: "/blog/posture-avant-les-techniques-de-vente", permanent: true },
  { source: "/blog/commerciale", destination: "/blog/signaux-besoin-formation-commerciale", permanent: true },
  { source: "/blog/formation-commerciale-bassk", destination: "/blog/formation-ponctuelle-ou-systeme-qui-performe", permanent: true },
  { source: "/blog/formation-commerciale-nkjbb", destination: "/blog/3-erreurs-developpement-commercial-entrepreneurs", permanent: true },
    { source: "/blog/formation-commerciale-zwnep", destination: "/blog/entrepreneurs-qui-naiment-pas-vendre", permanent: true },
  { source: "/blog/formation-commerciale-pourquoi-vos-commerciaux-nosent-pas-disqualifier-leurs-prospects", destination: "/blog/disqualifier-ses-prospects", permanent: true },
  { source: "/blog/pourquoi-vos-commerciaux-ne-prospectent-plus-et-pourquoi-ce-nest-pas-juste-un-probleme-de-motivation", destination: "/blog/commerciaux-qui-ne-prospectent-plus", permanent: true },
  // Doublons fusionnes : deux paires d'articles traitaient le meme sujet.
  { source: "/blog/formation-commerciale-parler-moins-vendre-plus", destination: "/blog/commerciaux-parlent-trop-vendent-moins", permanent: true },
  { source: "/blog/appliquer-ce-quon-apprend-en-formation", destination: "/blog/equipes-nappliquent-pas-apres-formation", permanent: true },
  // Anciennes URL de ces deux memes articles, avant renommage.
  { source: "/blog/hello-world-nhefg", destination: "/blog/commerciaux-parlent-trop-vendent-moins", permanent: true },
  { source: "/blog/formation-commerciale-slout", destination: "/blog/equipes-nappliquent-pas-apres-formation", permanent: true },
];

const nextConfig: NextConfig = {
  // Les .mdx doivent etre reconnus comme des modules de page/route.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return ANCIENNES_URL_BLOG;
  },
};

const withMDX = createMDX({
  options: {
    // Plugins declares EN CHAINES, pas en references de fonction : depuis
    // Next 16 le build passe par Turbopack, qui transmet cette config au
    // compilateur Rust — une fonction JS ne peut pas franchir la frontiere.
    // Voir node_modules/next/dist/docs/01-app/02-guides/mdx.md, section
    // "Using Plugins with Turbopack".
    //
    // remark-frontmatter : reconnait le bloc YAML en tete d'article et
    //   l'exclut du rendu (sans lui, le frontmatter s'afficherait en texte).
    //   Les valeurs sont relues separement par gray-matter dans lib/blog.ts.
    // remark-gfm : tableaux, listes de taches, liens automatiques — utile
    //   pour du contenu importe d'un autre CMS.
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
  },
});

export default withMDX(nextConfig);
