import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Coaching commercial B2B | Kwala",
  description:
    "Nos articles sur la prospection, le closing et le management commercial, par les coachs Kwala à Lyon.",
  alternates: { canonical: "/blog" },
};

// Habillage volontairement minimal : le design des pages est l'etape 2.
export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[800px] px-6 py-16">
        <h1 className="font-asap text-3xl font-bold italic text-onyx md:text-[43.6px]">
          Le blog
        </h1>

        {posts.length === 0 ? (
          <p className="mt-8 font-dm-sans text-onyx">Aucun article pour le moment.</p>
        ) : (
          <ul className="mt-10 space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <h2 className="font-asap text-xl font-bold italic text-onyx">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <time dateTime={post.date} className="mt-1 block font-dm-sans text-sm">
                    {formatDate(post.date)}
                  </time>
                  <p className="mt-2 font-dm-sans leading-7 text-onyx">
                    {post.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
