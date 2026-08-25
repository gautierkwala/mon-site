import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/format";
import { TagPill } from "./TagPill";

type Props = {
  post: BlogPost;
  /** Carte mise en avant : plus grande, image a cote du texte. */
  featured?: boolean;
  /** Niveau de titre, pour garder une hierarchie correcte selon le contexte. */
  headingLevel?: "h2" | "h3";
};

export function ArticleCard({ post, featured = false, headingLevel = "h3" }: Props) {
  const Titre = headingLevel;

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-xl bg-dust transition-shadow hover:shadow-md ${
        featured ? "md:grid md:grid-cols-2 md:items-stretch" : "flex flex-col"
      }`}
    >
      {post.image && (
        <div
          className={`relative w-full overflow-hidden ${
            featured ? "aspect-[16/10] md:aspect-auto md:min-h-[320px]" : "aspect-[16/9]"
          }`}
        >
          <Image
            src={post.image}
            alt={post.imageAlt ?? ""}
            fill
            // La carte en avant est le LCP de /blog : sans priority, elle
            // part en lazy et le LCP grimpe (mesure a 4.2 s sans).
            priority={featured}
            // La carte en avant occupe la moitie d'une page de 1200 ; les
            // autres un tiers. Sans ce `sizes`, next/image sert du 1200px
            // de large pour une vignette de 380.
            sizes={
              featured
                ? "(min-width: 768px) 600px, 100vw"
                : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-10" : "p-5"}`}>
        {post.tag && (
          <div className="mb-3">
            <TagPill tag={post.tag} />
          </div>
        )}

        <Titre
          className={`font-asap font-bold italic leading-tight text-onyx ${
            featured ? "text-2xl md:text-[30px]" : "text-lg"
          }`}
        >
          {/* Lien etale sur toute la carte : une seule cible cliquable, un
              seul lien pour les moteurs, et la carte entiere reste cliquable
              a la souris. */}
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </Titre>

        <p
          className={`mt-3 font-dm-sans leading-7 text-onyx ${
            featured ? "text-base md:text-[18px]" : "text-[15px] leading-6"
          }`}
        >
          {post.description}
        </p>

        <p className="mt-auto pt-4 font-dm-sans text-sm text-onyx/70">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && <> · {post.author}</>}
        </p>
      </div>
    </article>
  );
}
