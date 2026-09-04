import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { AUTEURS, getAuteurBySlug } from "@/lib/auteurs";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return AUTEURS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const auteur = getAuteurBySlug(slug);
  if (!auteur) return {};
  return {
    title: `${auteur.nom}, ${auteur.role} chez Kwala`,
    description: auteur.intro,
    alternates: { canonical: `/blog/auteurs/${auteur.slug}` },
  };
}

export default async function PageAuteur({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const auteur = getAuteurBySlug(slug);
  if (!auteur) notFound();

  const articles = getAllPosts().filter((p) => p.author === auteur.nom);

  // Le sameAs vers LinkedIn est ce qui rattache cette page a une personne
  // reelle et verifiable, plutot qu'a un simple nom affiche.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: auteur.nom,
    jobTitle: auteur.role,
    description: auteur.intro,
    url: `${SITE_URL}/blog/auteurs/${auteur.slug}`,
    sameAs: [auteur.linkedin],
    knowsAbout: auteur.expertises,
    worksFor: { "@type": "Organization", name: "Kwala", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-alabaster">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[80px]">
          <Link
            href="/blog"
            className="font-dm-sans text-[15px] text-onyx/60 hover:text-onyx"
          >
            ← Tous les articles
          </Link>

          <div className="mt-8 max-w-[760px]">
            <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
              {auteur.role} chez Kwala
            </p>
            <h1 className="mt-4 font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
              {auteur.nom}
            </h1>
            <p className="mt-6 font-dm-sans text-[18px] leading-8 text-onyx">
              {auteur.intro}
            </p>
            <a
              href={auteur.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-dm-sans text-[15px] text-onyx underline decoration-wisteria-text underline-offset-4"
            >
              Profil LinkedIn de {auteur.nom.split(" ")[0]}
            </a>
          </div>

          <div className="mt-12 grid max-w-[900px] gap-8 sm:grid-cols-2">
            <div className="rounded-xl bg-dust px-6 py-6">
              <h2 className="font-asap text-[19px] font-bold italic text-onyx">
                Domaines d’expertise
              </h2>
              <ul className="mt-4 space-y-2 font-dm-sans text-[16px] leading-7 text-onyx/85">
                {auteur.expertises.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-dust px-6 py-6">
              <h2 className="font-asap text-[19px] font-bold italic text-onyx">
                Secteurs de prédilection
              </h2>
              <ul className="mt-4 space-y-2 font-dm-sans text-[16px] leading-7 text-onyx/85">
                {auteur.reseau.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {articles.length > 0 && (
            <section className="mt-16">
              <h2 className="font-asap text-2xl font-bold italic text-onyx md:text-[30px]">
                {articles.length === 1
                  ? "Son article"
                  : `Ses ${articles.length} articles`}
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.slice(0, 6).map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
