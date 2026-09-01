import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { TagPill } from "@/components/blog/TagPill";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format";



// Les articles sont connus au build : tout est prerendu en statique et le
// rendu a la demande est coupe, donc un slug inconnu renvoie un vrai 404.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

// Dans cette version de Next, `params` est une PROMESSE.
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Kwala`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${slug}`,
      publishedTime: post.date,
      // Repli sur l'image OG du site : sans og:image, un partage LinkedIn
      // sort sans aperçu. Un article sans couverture reste donc partageable.
      images: post.image
        ? [{ url: post.image, alt: post.imageAlt ?? "" }]
        : [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kwala" }],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { default: Article } = await import(`@/content/blog/${post.fileName}.mdx`);
  const similaires = getRelatedPosts(slug);

  // BlogPosting : donne aux moteurs et aux moteurs de reponse l'auteur, la
  // date et l'illustration sans qu'ils aient a les deviner du HTML.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    author: { "@type": "Person", name: post.author ?? "Kwala" },
    publisher: {
      "@type": "Organization",
      name: "Kwala",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-kwala.svg` },
    },
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
    ...(post.tag ? { keywords: post.tag } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-alabaster">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-10 md:px-[30px]">
          {/* Aligne sur la colonne de texte de l'article : le fil d'Ariane
              appartient a l'article, pas a la pleine largeur de page. */}
          <nav aria-label="Fil d'Ariane" className="mx-auto max-w-[760px]">
            <ol className="flex flex-wrap items-center gap-2 font-dm-sans text-sm text-onyx/70">
              <li>
                <Link href="/" className="hover:text-wisteria-text">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-wisteria-text">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              {/* Dernier maillon : page courante, donc pas de lien. */}
              <li aria-current="page" className="text-onyx">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>

        <article className="mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-[30px]">
          <header className="mx-auto max-w-[760px]">
            {post.tag && <TagPill tag={post.tag} />}
            <h1 className="mt-4 font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
              {post.title}
            </h1>
            <p className="mt-4 font-dm-sans text-[18px] leading-8 text-onyx">
              {post.description}
            </p>
            <p className="mt-4 font-dm-sans text-sm text-onyx/70">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author && <> · {post.author}</>}
            </p>
          </header>

          {post.image && (
            <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.imageAlt ?? ""}
                fill
                priority
                sizes="(min-width: 1200px) 1140px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="mx-auto mt-12 max-w-[760px]">
            <Article />
          </div>
        </article>

        {/* CTA : la finalite du blog est d'amener au formulaire de contact. */}
        <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-[30px]">
          <div className="mx-auto max-w-[760px] rounded-xl bg-onyx px-6 py-10 md:px-10">
            <h2 className="font-asap text-2xl font-bold italic leading-tight text-white md:text-[30px]">
              Un écran, ça ne corrige pas une posture.
            </h2>
            <p className="mt-4 font-dm-sans leading-7 text-white">
              Nos coachs travaillent en salle, à Lyon, sur vos vrais dossiers.
              Parlons de votre situation.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block rounded-sm bg-wisteria px-5 py-3 font-asap text-[15px] font-medium text-onyx transition-colors duration-150 hover:bg-white"
            >
              Discuter avec un coach
            </Link>
          </div>
        </section>

        {similaires.length > 0 && (
          <section
            aria-labelledby="articles-similaires"
            className="mx-auto w-full max-w-[1200px] px-6 pb-20 md:px-[30px]"
          >
            <h2
              id="articles-similaires"
              className="font-asap text-2xl font-bold italic text-onyx"
            >
              À lire aussi
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {similaires.map((autre) => (
                <li key={autre.slug} className="h-full">
                  <ArticleCard post={autre} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
