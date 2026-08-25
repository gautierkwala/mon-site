import type { Metadata } from "next";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogList } from "@/components/blog/BlogList";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Coaching commercial B2B | Kwala",
  description:
    "Prospection, closing, management commercial : les articles des coachs Kwala pour faire progresser vos ventes.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  // Le plus recent passe en avant ; les autres alimentent la grille.
  const [featured, ...suite] = posts;

  return (
    <>
      <Header />
      <main className="bg-alabaster">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-[30px] md:py-[60px]">
          <p className="font-asap text-2xl italic text-onyx">Le blog</p>
          <h1 className="mt-4 max-w-3xl font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
            Mieux vendre, <span className="text-wisteria-text">concrètement</span>.
          </h1>
          <p className="mt-4 max-w-2xl font-dm-sans leading-7 text-onyx">
            Ce que nos coachs observent en salle, transformé en méthodes
            applicables dès votre prochain rendez-vous.
          </p>

          {posts.length === 0 ? (
            <p className="mt-12 font-dm-sans text-onyx">
              Les premiers articles arrivent très bientôt.
            </p>
          ) : (
            <>
              <section aria-labelledby="a-la-une" className="mt-12">
                <h2 id="a-la-une" className="sr-only">
                  À la une
                </h2>
                <ArticleCard post={featured} featured headingLevel="h3" />
              </section>

              <section aria-labelledby="tous-les-articles" className="mt-16">
                <h2
                  id="tous-les-articles"
                  className="font-asap text-2xl font-bold italic text-onyx"
                >
                  Tous les articles
                </h2>
                <BlogList posts={suite} tags={getAllTags()} />
              </section>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
