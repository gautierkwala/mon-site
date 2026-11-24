import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { EMAIL, TELEPHONE, TELEPHONE_LISIBLE } from "@/lib/site";

/**
 * Information publique sur les formations, au sens de l'indicateur 1 du
 * referentiel national qualite : elle doit etre accessible librement, sans
 * formulaire, sans adresse e-mail et sans mot de passe. Le detail (prerequis,
 * objectifs, duree, modalites et delais d'acces, tarifs, contacts, methodes
 * mobilisees, modalites d'evaluation, accessibilite) figure dans les PDF.
 *
 * La page est volontairement discrete : noindex pour que les tarifs contenus
 * dans les PDF ne remontent pas dans les resultats de recherche, follow pour
 * que les liens restent suivis, absente du sitemap et du menu principal.
 * Elle n'est atteignable que depuis le pied de page et le bas des pages
 * d'offre.
 */
export const metadata: Metadata = {
  title: "Programmes de formation | Kwala",
  description:
    "Programmes détaillés des formations commerciales Kwala : objectifs, prérequis, durée, modalités d’accès et accessibilité.",
  robots: { index: false, follow: true },
};

// Passe a true le jour ou le certificat est delivre. Tant qu'il vaut false,
// ni le logo ni la mention obligatoire ne sont affiches : les faire figurer
// avant l'audit serait une allegation de certification non detenue.
const QUALIOPI_OBTENU = false;

// Indicateur 2 : resultats obtenus. A remplir avec les chiffres reels, jamais
// estimes. Tant que le tableau est vide, la section n'est pas rendue.
const RESULTATS: { intitule: string; valeur: string }[] = [];

// Referent handicap : nom et coordonnees a renseigner. Tant que NOM vaut
// null, seul le contact general est affiche.
const REFERENT_HANDICAP: { nom: string; email: string } | null = null;

const FORMATIONS = [
  {
    code: "F1",
    titre: "Boostez votre prospection commerciale B2B",
    resume:
      "Construire sa liste de cibles, structurer son approche téléphonique et décrocher des rendez-vous qualifiés. La formation alterne apports théoriques en atelier collectif, rodages chronométrés et sessions de prospection en conditions réelles.",
    fichier: "kwala-f1-prospection-commerciale-b2b.pdf",
  },
  {
    code: "F2",
    titre: "Perfectionnement en vente B2B : performer en rendez-vous",
    resume:
      "Conduire un rendez-vous commercial de bout en bout : ouverture, découverte des enjeux, traitement des objections, négociation et closing. L’entraînement se fait sur des simulations et sur la réécoute des rendez-vous réels des participants.",
    fichier: "kwala-f2-performer-en-rendez-vous.pdf",
  },
];

/** Le lien n'est rendu que si le document existe reellement dans public/. */
function pdfDisponible(fichier: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "programmes", fichier));
}

export default function Programmes() {
  return (
    <>
      <Header />
      <main className="bg-alabaster">
        <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[80px]">
          <h1 className="font-asap text-4xl font-bold italic leading-tight text-onyx md:text-[48px]">
            Programmes de formation
          </h1>
          <p className="mt-6 max-w-[820px] font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
            Chaque programme détaille les prérequis, les objectifs, la durée,
            les modalités et délais d’accès, les tarifs, les méthodes
            mobilisées, les modalités d’évaluation et les conditions
            d’accessibilité aux personnes en situation de handicap. Les
            documents sont librement consultables, sans inscription.
          </p>

          <div className="mt-12 space-y-8">
            {FORMATIONS.map((formation) => {
              const disponible = pdfDisponible(formation.fichier);
              return (
                <article
                  key={formation.code}
                  className="rounded-xl bg-dust px-6 py-8 md:px-10 md:py-10"
                >
                  <h2 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
                    {formation.titre}
                  </h2>
                  <p className="mt-4 max-w-[760px] font-dm-sans text-base leading-7 text-onyx">
                    {formation.resume}
                  </p>
                  <p className="mt-6 font-dm-sans text-base leading-7 text-onyx">
                    {disponible ? (
                      <a
                        href={`/programmes/${formation.fichier}`}
                        className="font-medium text-wisteria-text underline underline-offset-2 hover:no-underline"
                      >
                        Consulter le programme détaillé (PDF)
                      </a>
                    ) : (
                      <span className="text-onyx/70">
                        Programme détaillé disponible sur demande au{" "}
                        <a href={`tel:${TELEPHONE}`} className="underline">
                          {TELEPHONE_LISIBLE}
                        </a>
                        .
                      </span>
                    )}
                  </p>
                </article>
              );
            })}
          </div>

          {RESULTATS.length > 0 && (
            <div className="mt-16">
              <h2 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
                Nos résultats
              </h2>
              <ul className="mt-6 space-y-3 font-dm-sans text-base leading-7 text-onyx">
                {RESULTATS.map((r) => (
                  <li key={r.intitule}>
                    <span className="font-medium">{r.intitule} :</span>{" "}
                    {r.valeur}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-16">
            <h2 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
              Accessibilité et contact
            </h2>
            <p className="mt-6 max-w-[820px] font-dm-sans text-base leading-7 text-onyx">
              Nos formations se déroulent en présentiel à Lyon. Si vous êtes en
              situation de handicap, contactez-nous avant votre inscription :
              nous étudions ensemble les aménagements possibles et, si nécessaire,
              nous vous orientons vers un organisme spécialisé.
            </p>
            <p className="mt-4 font-dm-sans text-base leading-7 text-onyx">
              {REFERENT_HANDICAP ? (
                <>
                  Référent handicap : {REFERENT_HANDICAP.nom},{" "}
                  <a
                    href={`mailto:${REFERENT_HANDICAP.email}`}
                    className="underline"
                  >
                    {REFERENT_HANDICAP.email}
                  </a>
                  .
                </>
              ) : (
                <>
                  Contact : Gautier Colson, fondateur et coach sales,{" "}
                  <a href={`tel:${TELEPHONE}`} className="underline">
                    {TELEPHONE_LISIBLE}
                  </a>
                  ,{" "}
                  <a href={`mailto:${EMAIL}`} className="underline">
                    {EMAIL}
                  </a>
                  .
                </>
              )}
            </p>
          </div>

          {/* Emplacement prepare pour la certification, inactif tant que le
              certificat n'est pas delivre. A l'activation : poser le logo dans
              public/qualiopi-logo.png et basculer QUALIOPI_OBTENU a true. La
              mention ci-dessous est obligatoire et ne doit pas etre reformulee. */}
          {QUALIOPI_OBTENU && (
            <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qualiopi-logo.png"
                alt="Logo Qualiopi"
                width={160}
                height={80}
                className="h-auto w-[160px]"
              />
              <p className="max-w-[640px] font-dm-sans text-base leading-7 text-onyx">
                La certification qualité a été délivrée au titre de la catégorie
                d’action suivante : actions de formation.
              </p>
            </div>
          )}

          <p className="mt-16 font-dm-sans text-base leading-7 text-onyx">
            <Link
              href="/formation-commerciale-lyon"
              className="font-medium text-wisteria-text underline underline-offset-2 hover:no-underline"
            >
              Revenir à la formation commerciale à Lyon
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
