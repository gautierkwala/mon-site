import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { FormulaireEvenement } from "@/components/pages/FormulaireEvenement";

export const metadata: Metadata = {
  title: "5 ans de Kwala — Jeudi 15 octobre | Kwala",
  description:
    "Kwala fête ses 5 ans le 15 octobre aux Woraces, à Lyon. Confirmez votre présence.",
  // Page d'invitation : elle n'a pas vocation a etre trouvee dans les
  // resultats de recherche, comme le formulaire Tally qu'elle remplace.
  robots: { index: false, follow: false },
};

const INFOS = [
  { intitule: "Date", valeur: "Jeudi 15 octobre, 18h30" },
  { intitule: "Lieu", valeur: "Les Woraces, 1 rue Camille Jordan, 69001 Lyon" },
];

export default function CinqAns() {
  return (
    <>
      <Header />
      <main className="bg-alabaster">
        <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-soft-light"
            style={{
              backgroundImage: "url(/decor/motif-01-hero.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative grid gap-12 px-6 py-16 md:px-[120px] md:py-[80px] lg:grid-cols-2 lg:items-start lg:gap-20">
            {/* Colonne gauche : invitation */}
            <div>
              <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
                Invitation
              </p>
              <h1 className="mt-5 font-asap text-4xl font-bold italic leading-[1.05] text-onyx md:text-[56px]">
                5 ans de Kwala
                <br />
                <span className="relative inline-block px-1">
                  <span className="relative z-10">Jeudi 15 octobre</span>
                  <Image
                    src="/decor/kwala-circle-04.svg"
                    alt=""
                    width={160}
                    height={72}
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-x-2 -inset-y-1 -z-0 h-[calc(100%+0.5rem)] w-[calc(100%+1rem)] md:-inset-x-3 md:-inset-y-2 md:h-[calc(100%+1rem)] md:w-[calc(100%+1.5rem)]"
                  />
                </span>
              </h1>

              <div className="mt-8 space-y-5 font-dm-sans text-[18px] leading-8 text-onyx">
                <p>
                  Depuis 5 ans, Kwala accompagne entrepreneurs, dirigeants et
                  commerciaux dans leurs défis commerciaux. Des rencontres, des
                  projets, des défis, des réussites… et vous en faites partie.
                </p>
                <p>
                  Le 15 octobre, nous réunissons celles et ceux qui ont
                  contribué, de près ou de loin, à cette aventure, pour célébrer
                  le chemin parcouru.
                </p>
                <p>
                  Une soirée pour se retrouver, échanger et faire de nouvelles
                  rencontres avec celles et ceux qui entreprennent, accompagnent
                  et font bouger Lyon.
                </p>
              </div>

              {/* Informations pratiques */}
              <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                {INFOS.map(({ intitule, valeur }) => (
                  <div key={intitule} className="rounded-xl bg-dust px-6 py-5">
                    <dt className="font-asap text-[15px] font-bold italic text-wisteria-text">
                      {intitule}
                    </dt>
                    <dd className="mt-2 font-dm-sans text-base leading-7 text-onyx">
                      {valeur}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Colonne droite : reponse */}
            <div className="lg:sticky lg:top-10">
              <FormulaireEvenement />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
