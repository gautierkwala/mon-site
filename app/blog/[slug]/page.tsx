import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

// Les 39 articles sont connus au build : on prerend tout en statique et on
// coupe le rendu a la demande, donc un slug inconnu renvoie un vrai 404
// plutot qu'une tentative de rendu.
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

// Dans cette version de Next, `params` est une PROMESSE : il faut l'attendre.
type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Kwala`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Article } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[720px] px-6 py-16">
        <article>
          <h1 className="font-asap text-3xl font-bold italic text-onyx md:text-[36px]">
            {post.title}
          </h1>
          <time dateTime={post.date} className="mt-2 block font-dm-sans text-sm">
            {formatDate(post.date)}
          </time>
          {/* Habillage des balises MDX : etape 2 (design). */}
          <div className="mt-8 font-dm-sans leading-7 text-onyx">
            <Article />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
