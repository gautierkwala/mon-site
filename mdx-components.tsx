import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

// Fichier OBLIGATOIRE pour @next/mdx avec l'App Router : sans lui, rien ne
// compile. La signature a change dans cette version — la fonction ne prend
// AUCUN argument (elle recevait `components` auparavant). Voir
// node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/mdx-components.md
//
// C'est ici qu'on habille le corps des articles : les .mdx restent du texte
// pur, sans une classe Tailwind dedans, ce qui les garde lisibles et
// reimportables.

const components: MDXComponents = {
  // Un "# Titre" dans un article rendrait un SECOND h1 sur la page, celui de
  // la page etant deja le titre de l'article. On le degrade en h2 : la regle
  // vaut structurellement pour les 39 articles importes, sans avoir a
  // relire chacun.
  h1: ({ children }) => (
    <h2 className="mt-12 font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-12 font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-6 font-dm-sans text-[18px] leading-8 text-onyx">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 font-dm-sans text-[18px] leading-8 text-onyx marker:text-wisteria-text">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 font-dm-sans text-[18px] leading-8 text-onyx marker:text-wisteria-text">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l-4 border-wisteria bg-dust/60 py-4 pl-6 pr-4 font-asap text-[20px] italic leading-8 text-onyx">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  hr: () => <hr className="mt-12 border-onyx/15" />,
  a: ({ href = "", children }) => {
    // Liens internes via next/link (navigation client) ; liens externes en
    // <a> avec rel de securite.
    const interne = href.startsWith("/") || href.startsWith("#");
    const classes = "text-wisteria-text underline underline-offset-2 hover:no-underline";

    return interne ? (
      <Link href={href} className={classes}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  },
  // Regle CLAUDE.md #3 : toute image passe par next/image. Les dimensions
  // par defaut ne servent qu'a reserver la place (ratio 16/9) ; `h-auto`
  // laisse le navigateur retablir le ratio reel du fichier.
  img: ({ src, alt, width, height }) => (
    <Image
      src={src as ImageProps["src"]}
      alt={alt ?? ""}
      width={Number(width) || 1200}
      height={Number(height) || 675}
      sizes="(min-width: 768px) 760px, 100vw"
      className="mt-8 h-auto w-full rounded-xl"
    />
  ),
  table: ({ children }) => (
    // Un tableau large ne doit jamais faire defiler la page : il defile dans
    // son propre conteneur.
    <div className="mt-8 overflow-x-auto">
      <table className="w-full border-collapse font-dm-sans text-[16px] text-onyx">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-onyx/20 bg-dust px-4 py-2 text-left font-asap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-onyx/20 px-4 py-2 align-top">{children}</td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
