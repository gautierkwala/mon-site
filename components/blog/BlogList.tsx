"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { ArticleCard } from "./ArticleCard";
import { tagPillClasses } from "./TagPill";

const PAR_PAGE = 12;
const TOUS = "Tous";

type Props = { posts: BlogPost[]; tags: string[] };

export function BlogList({ posts, tags }: Props) {
  const [tagActif, setTagActif] = useState<string>(TOUS);
  const [page, setPage] = useState(1);

  const filtres = useMemo(
    () => (tagActif === TOUS ? posts : posts.filter((p) => p.tag === tagActif)),
    [posts, tagActif]
  );

  const nbPages = Math.max(1, Math.ceil(filtres.length / PAR_PAGE));
  const pageCourante = Math.min(page, nbPages);

  const choisirTag = (tag: string) => {
    setTagActif(tag);
    setPage(1);
  };

  return (
    <>
      {tags.length > 0 && (
        <nav aria-label="Filtrer par thème" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            {[TOUS, ...tags].map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  onClick={() => choisirTag(tag)}
                  aria-pressed={tagActif === tag}
                  className={tagPillClasses(tagActif === tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <p aria-live="polite" className="sr-only">
        {filtres.length} article{filtres.length > 1 ? "s" : ""}
        {tagActif !== TOUS && ` dans la catégorie ${tagActif}`}.
      </p>

      {filtres.length === 0 ? (
        <p className="mt-10 font-dm-sans text-onyx">
          Aucun article dans cette catégorie pour le moment.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Au premier rendu — celui que recoit un moteur, qui ne clique
              sur rien — aucun filtre n'est actif et la pagination se
              contente de masquer : les liens des 39 articles sont donc tous
              presents dans le HTML servi, a un seul saut de l'accueil.
              Le filtrage par tag, lui, retire bien les cartes du DOM, mais
              seulement apres une interaction utilisateur. */}
          {filtres.map((post, i) => {
            const surLaPage =
              i >= (pageCourante - 1) * PAR_PAGE && i < pageCourante * PAR_PAGE;
            return (
              <li key={post.slug} hidden={!surLaPage} className="h-full">
                <ArticleCard post={post} />
              </li>
            );
          })}
        </ul>
      )}

      {nbPages > 1 && (
        <nav aria-label="Pagination" className="mt-12 flex justify-center gap-2">
          {Array.from({ length: nbPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              aria-current={n === pageCourante ? "page" : undefined}
              aria-label={`Page ${n}`}
              className={`h-10 min-w-10 rounded-lg border px-3 font-asap text-[15px] transition-colors duration-150 ${
                n === pageCourante
                  ? "border-onyx bg-onyx text-white"
                  : "border-onyx bg-dust text-onyx hover:bg-wisteria"
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </>
  );
}
