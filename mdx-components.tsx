import type { MDXComponents } from "mdx/types";

// Fichier OBLIGATOIRE pour @next/mdx avec l'App Router : sans lui, rien ne
// compile. Attention, la signature a change — dans cette version la fonction
// ne prend AUCUN argument (elle recevait `components` auparavant).
// Voir node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/mdx-components.md
//
// Volontairement vide a ce stade : l'habillage des balises (h2, p, a, ul...)
// releve de l'etape 2 (design des pages).
const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
