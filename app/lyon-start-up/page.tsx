import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { Contact } from "@/components/10-Contact";
import { PageHero } from "@/components/pages/PageHero";
import { MotCercle } from "@/components/pages/MotCercle";

/**
 * Page d'atterrissage reservee aux projets de la promotion Lyon Start Up.
 *
 * Elle est partagee par lien direct et ne doit pas etre decouverte autrement :
 * le tarif qui y figure a ete negocie par Lyon Start Up pour ses projets, il
 * n'est pas le tarif public de Kwala. D'ou le noindex/nofollow, l'absence du
 * sitemap, du menu, du pied de page et de llms.txt.
 *
 * Volontairement PAS de Disallow dans robots.txt : un blocage empecherait
 * Google de lire la balise noindex, et l'URL pourrait rester indexee sans
 * qu'on puisse l'en faire sortir.
 */
export const metadata: Metadata = {
  title: "Kwala Sales Academy × Lyon Start Up | Kwala",
  description:
    "Programme d’accélération commerciale de janvier à mars 2027, réservé à 8 projets de la promotion Lyon Start Up.",
  robots: { index: false, follow: false },
};

const CONSTATS = [
  "Une expertise métier, peu d’expérience de la vente.",
  "Une prospection peu structurée : ciblage flou, pas de méthode, peu de relances.",
  "Un discours centré sur le produit, plutôt que sur les problèmes du client.",
  "Un manque de confiance du dirigeant dans son offre et son prix, qui freine le passage à l’action.",
];

const PAS_POUR_VOUS = [
  "Vous doutez encore que l’entrepreneuriat soit fait pour vous. Ce programme demande de l’engagement et de l’exposition : il ne vous aidera pas à trancher cette question, et ce n’est pas le bon moment pour investir.",
  "Vous attendez que le produit soit parfait avant de parler à des clients.",
  "Vous cherchez une formation à regarder, pas un entraînement à faire.",
];

const POUR_VOUS = [
  "Vous avez l’intuition de tenir quelque chose, et vous voulez avancer une bonne fois pour toutes.",
  "Votre MVP existe ou arrive vite, et il vous faut maintenant des clients.",
  "Vous êtes prêt à décrocher le téléphone, à vous faire challenger et à vous entraîner chaque semaine.",
];

const OBJECTIFS = [
  "Décrocher plus de rendez-vous",
  "Augmenter son chiffre d’affaires",
  "Devenir autonome sur la vente",
  "Prendre confiance dans son offre, son prix et son entreprise",
];

const MOIS = [
  {
    nom: "Janvier",
    etapes: [
      "Cadrage des objectifs et des attentes",
      "2 journées de formation-action",
      "Rodages et débriefs de rendez-vous",
    ],
  },
  {
    nom: "Février",
    etapes: [
      "Suivi et adaptation du parcours",
      "2 journées de formation-action",
      "Rodages et débriefs de rendez-vous",
    ],
  },
  {
    nom: "Mars",
    etapes: [
      "Point final : débrief et bilan",
      "2 journées de formation-action",
      "Rodages et débriefs de rendez-vous",
    ],
  },
];

const INCLUS = [
  "6 demi-journées d’entraînement et d’atelier",
  "6 demi-journées de prospection collective",
  "3 points individuels",
  "Des rodages chaque semaine entre participants",
  "Un accès illimité à la plateforme Kwala",
  "Vos audios de rendez-vous réécoutés et analysés",
  "Une hotline coach 24h/24",
];

const REPARTS_AVEC = [
  {
    titre: "Votre guide de la vente",
    texte:
      "Votre cible, votre pitch, vos questions de découverte et vos réponses aux objections, écrits et éprouvés.",
  },
  {
    titre: "Un pipe rempli",
    texte:
      "Des rendez-vous décrochés pendant les rodages, pas après la fin du programme.",
  },
  {
    titre: "La confiance dans votre offre et votre prix",
    texte:
      "De quoi parler argent sans gêne, et oser demander la signature.",
  },
  {
    titre: "Des réflexes qui restent",
    texte:
      "Une culture commerciale installée, et un réseau de startups pour continuer à s’entraîner.",
  },
];

const TEMOIGNAGES = [
  {
    citation:
      "En quelques mois, la stratégie est établie, le discours est clair, les signatures tombent.",
    nom: "Adrien Crespinée",
    fonction: "Founding Sales, OOrion",
  },
  {
    citation:
      "On apprend le matin, on applique l’après-midi : on repart chaque jeudi avec des rendez-vous générés.",
    nom: "Renaud Durier",
    fonction: "co-fondateur, Pégase Digital",
  },
  {
    citation:
      "Ça m’a permis de passer d’une logique de consultante indépendante à celle de cheffe d’entreprise.",
    nom: "Axelle Sorret",
    fonction: "fondatrice, Trinity",
  },
];

const RAISONS = [
  "Débloquer du chiffre d’affaires rapidement.",
  "Investir sur soi pour toute sa carrière.",
  "Tout donner pour n’avoir aucun regret dans son projet.",
];

const COACHS = [
  { prenom: "Gautier", tel: "+33623130149", telLisible: "06 23 13 01 49", email: "gautier@kwala.fr" },
  { prenom: "Alexis", tel: "+33661446852", telLisible: "06 61 44 68 52", email: "alexis@kwala.fr" },
];

/** Aucune photo de ces clients dans le repo : on affiche leurs initiales. */
function initiales(nom: string) {
  return nom
    .split(/\s+/)
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");
}

const SECTION = "mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]";
const H2 = "max-w-[860px] font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]";
const TRAIT = "mt-3 h-auto w-[180px]";
const CORPS = "font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]";

function Trait() {
  return (
    <Image
      src="/decor/kwala-line-01.webp"
      alt=""
      width={675}
      height={12}
      aria-hidden="true"
      className={TRAIT}
    />
  );
}

function BoutonRendezVous({ centre = false }: { centre?: boolean }) {
  return (
    <div className={centre ? "mt-10 text-center" : "mt-10"}>
      <Link
        href="#contact"
        className="inline-flex items-center rounded-sm bg-onyx px-6 py-4 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
      >
        Réserver un rendez-vous d’information
      </Link>
      <p className="mt-3 max-w-[560px] font-dm-sans text-base leading-7 text-onyx/75">
        30 minutes avec un coach Kwala pour parler de votre projet et voir si le
        programme est pertinent pour vous, maintenant. Sans engagement.
      </p>
    </div>
  );
}

export default function LyonStartUp() {
  return (
    <>
      <Header />
      <main className="bg-alabaster">
        {/* Les deux logos, en partenariat. Le logo Lyon Start Up est deja
            present dans public/logos, utilise par la bande partenaires. */}
        <section className="mx-auto w-full max-w-[1440px] px-6 pt-10 md:px-[120px]">
          <div className="flex items-center gap-5">
            <Image
              src="/logos/logo-kwala.svg"
              alt="Kwala"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <span aria-hidden="true" className="font-asap text-2xl text-onyx/40">
              ×
            </span>
            <Image
              src="/logos/lyon-start-up.png"
              alt="Lyon Start Up"
              width={160}
              height={64}
              className="h-12 w-auto"
            />
          </div>
        </section>

        <PageHero
          surtitre="Kwala Sales Academy × Lyon Start Up · janvier – mars 2027"
          titre={
            <>
              3 mois pour <MotCercle>vendre plus</MotCercle>
            </>
          }
          sousTitre="Un programme d’accélération commerciale imaginé entre Lyon Start Up et Kwala, limité à 8 projets."
          cta={{
            libelle: "Réserver un rendez-vous d’information",
            href: "#contact",
          }}
          photo={{
            src: "/photos/pages/formation-collectif.webp",
            alt: "Fondateurs en session collective d’entraînement commercial chez Kwala",
          }}
        />

        <section className={SECTION}>
          <h2 className={H2}>
            L’IA a accéléré le produit. Reste à le vendre.
          </h2>
          <Trait />
          <div className={`mt-6 max-w-[860px] space-y-4 ${CORPS}`}>
            <p>
              Construire un premier produit utilisable prend aujourd’hui
              quelques semaines, là où il fallait plusieurs mois. Le produit
              n’est plus le goulot d’étranglement.
            </p>
            <p>
              Ce qui fait la différence, c’est la capacité du fondateur à aller
              chercher ses premiers clients, à parler de son offre et à la faire
              signer. Cette partie-là, l’IA ne la fait pas à votre place.
            </p>
          </div>
        </section>

        <section className={`${SECTION} bg-alabaster`}>
          <h2 className={H2}>Ce qu’on observe chez les fondateurs</h2>
          <Trait />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {CONSTATS.map((constat, i) => (
              <li key={constat} className="rounded-xl bg-dust px-6 py-8">
                <span
                  aria-hidden="true"
                  className="font-asap text-[32px] font-bold italic leading-none text-wisteria-text"
                >
                  {i + 1}
                </span>
                <p className="mt-3 font-dm-sans text-base leading-7 text-onyx">
                  {constat}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Section cle : le tri se fait ici, pas au rendez-vous. */}
        <section className={SECTION}>
          <h2 className={H2}>Pour qui c’est fait, et pour qui ça ne l’est pas</h2>
          <Trait />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-onyx/15 px-6 py-8 md:px-8">
              <h3 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[28px]">
                Ce n’est pas fait pour vous si…
              </h3>
              <ul className="mt-6 space-y-4 font-dm-sans text-base leading-7 text-onyx">
                {PAS_POUR_VOUS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-onyx/40">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-wisteria px-6 py-8 md:px-8">
              <h3 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[28px]">
                C’est pleinement fait pour vous si…
              </h3>
              <ul className="mt-6 space-y-4 font-dm-sans text-base leading-7 text-onyx">
                {POUR_VOUS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BoutonRendezVous />
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Un accélérateur commercial pour passer un cap</h2>
          <Trait />
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {OBJECTIFS.map((objectif) => (
              <li
                key={objectif}
                className="rounded-xl bg-dust px-6 py-8 font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]"
              >
                {objectif}
              </li>
            ))}
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>
            Le format : de janvier à mars 2027, limité à 8 projets
          </h2>
          <Trait />
          <p className={`mt-6 max-w-[860px] ${CORPS}`}>
            Le programme est réservé aux projets de la promotion Lyon Start Up
            en cours et aux alumni.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {MOIS.map((mois) => (
              <div key={mois.nom} className="rounded-xl bg-dust px-6 py-8">
                <h3 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[28px]">
                  {mois.nom}
                </h3>
                <ul className="mt-5 space-y-3 font-dm-sans text-base leading-7 text-onyx">
                  {mois.etapes.map((etape) => (
                    <li key={etape}>
                      <span className="text-wisteria-text">• </span>
                      {etape}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Tout ce qui est inclus sur les 3 mois</h2>
          <Trait />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {INCLUS.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-dust px-6 py-5 font-dm-sans text-base leading-7 text-onyx"
              >
                <span aria-hidden="true" className="text-wisteria-text">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Ce que vous repartez avec</h2>
          <Trait />
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {REPARTS_AVEC.map((item, i) => (
              <li key={item.titre} className="rounded-xl bg-dust px-6 py-8">
                <span
                  aria-hidden="true"
                  className="font-asap text-[32px] font-bold italic leading-none text-wisteria-text"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]">
                  {item.titre}
                </h3>
                <p className="mt-2 font-dm-sans text-base leading-7 text-onyx">
                  {item.texte}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Ce qu’en disent les fondateurs accompagnés</h2>
          <Trait />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TEMOIGNAGES.map((t) => (
              <figure
                key={t.nom}
                className="flex flex-col rounded-xl bg-dust px-6 py-8"
              >
                <blockquote className="grow font-dm-sans text-base leading-7 text-onyx">
                  « {t.citation} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-onyx font-asap text-sm font-bold italic text-white"
                  >
                    {initiales(t.nom)}
                  </span>
                  <span className="font-dm-sans text-base leading-6 text-onyx">
                    <span className="font-medium">{t.nom}</span>
                    <br />
                    {t.fonction}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 font-dm-sans text-base leading-7 text-onyx">
            Avis vérifiés et recueillis par{" "}
            <a
              href="https://trustfolio.co/profil/kwala-sdJEBF2Ciw1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-wisteria-text underline underline-offset-2 hover:no-underline"
            >
              Trustfolio
            </a>
            .
          </p>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Un tarif négocié par Lyon Start Up</h2>
          <Trait />
          <div className="mt-10 max-w-[760px] rounded-xl bg-onyx px-6 py-10 md:px-10">
            <p className="font-dm-sans text-base leading-7 text-dust">
              Offre standard Kwala :{" "}
              <s className="text-dust/60">4 000 € HT pour 3 mois</s>
            </p>
            <p className="mt-4 font-asap text-3xl font-bold italic leading-tight text-white md:text-[40px]">
              2 900 € HT
            </p>
            <p className="mt-4 font-dm-sans text-base leading-7 text-dust">
              Payables en trois fois : 1 000 € HT le premier mois, 900 € HT le
              deuxième, 1 000 € HT le troisième. Un tarif obtenu par Lyon Start
              Up, réservé à ses projets.
            </p>
            <p className="mt-4 font-dm-sans text-base leading-7 text-dust">
              Offre valable pour toute signature avant le 20 décembre 2026.
            </p>
          </div>
          <BoutonRendezVous />
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Pourquoi investir</h2>
          <Trait />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {RAISONS.map((raison, i) => (
              <li key={raison} className="rounded-xl bg-dust px-6 py-8">
                <span
                  aria-hidden="true"
                  className="font-asap text-[32px] font-bold italic leading-none text-wisteria-text"
                >
                  {i + 1}
                </span>
                <p className="mt-3 font-dm-sans text-base leading-7 text-onyx">
                  {raison}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className={SECTION}>
          <h2 className={H2}>Vos coachs</h2>
          <Trait />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:w-[760px]">
            {COACHS.map((coach) => (
              <div key={coach.prenom} className="rounded-xl bg-dust px-6 py-8">
                <h3 className="font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]">
                  {coach.prenom}
                </h3>
                <p className="mt-3 font-dm-sans text-base leading-7 text-onyx">
                  <a href={`tel:${coach.tel}`} className="underline">
                    {coach.telLisible}
                  </a>
                  <br />
                  <a href={`mailto:${coach.email}`} className="underline">
                    {coach.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <p className={`mt-8 max-w-[860px] ${CORPS}`}>
            8 places, et une signature à boucler avant le 20 décembre 2026.
          </p>
        </section>

        <Contact
          titre="Parlons de votre projet"
          texte="30 minutes avec un coach Kwala pour parler de votre projet et voir si le programme est pertinent pour vous, maintenant. Sans engagement."
          source="lyon-start-up"
          formulaire={{
            prenomEtNomSepares: true,
            societeLabel: "Nom du projet",
            societePlaceholder: "Le nom de votre startup",
            messageLabel: "Où en est votre projet ?",
            messagePlaceholder:
              "Idée, MVP en cours, premiers clients, premiers recrutements…",
            titre: "Réserver un rendez-vous d’information",
            sousTitre:
              "Un coach vous rappelle pour caler le rendez-vous, sans engagement.",
            bouton: "Réserver mon rendez-vous",
            confirmationTitre: "Merci, c’est bien envoyé.",
            confirmationTexte:
              "Un coach vous rappelle pour caler le rendez-vous.",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
