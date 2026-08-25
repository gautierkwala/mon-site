import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Les .mdx doivent etre reconnus comme des modules de page/route.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
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
