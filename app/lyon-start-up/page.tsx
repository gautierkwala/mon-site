import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/10-Contact";
import { EMAIL, TELEPHONE_LISIBLE } from "@/lib/site";

/**
 * Page d'atterrissage reservee aux projets de la promotion Lyon Start Up.
 *
 * Mono-page volontairement : ni le Header ni le Footer du site ne sont
 * montes. Elle est partagee par lien direct, le visiteur ne doit pas en
 * sortir vers le reste du site — il n'a qu'une action a faire, demander un
 * rendez-vous. Un en-tete minimal (les deux logos, un bouton) tient lieu de
 * navigation, et un pied de page compact porte les contacts et les mentions
 * legales.
 *
 * Elle reste discrete : le tarif qui y figure a ete negocie par Lyon Start Up
 * pour ses projets, il n'est pas le tarif public de Kwala. D'ou le
 * noindex/nofollow, l'absence du sitemap, du menu et de llms.txt.
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

const CHIFFRES = [
  { valeur: "3 mois", libelle: "de janvier à mars 2027" },
  { valeur: "8 projets", libelle: "et pas un de plus" },
  { valeur: "12 demi-journées", libelle: "d’atelier et de prospection" },
];

const PARTENAIRES = [
  { src: "/logos/lyon-start-up.png", alt: "Lyon Start Up", width: 134, height: 69 },
  { src: "/logos/h7.svg", alt: "H7", width: 50, height: 54 },
  { src: "/logos/reseau-entreprendre.png", alt: "Réseau Entreprendre", width: 98, height: 69 },
  { src: "/logos/la-french-tech.png", alt: "La French Tech", width: 62, height: 86 },
  { src: "/logos/les-premieres.png", alt: "Les Premières", width: 93, height: 93 },
  { src: "/logos/sisuu.png", alt: "SISUU Entrepreneurs Studio", width: 235, height: 84 },
];

const CONSTATS = [
  "Une expertise métier, peu d’expérience de la vente.",
  "Une prospection peu structurée : ciblage flou, pas de méthode, peu de relances.",
  "Un discours centré sur le produit, plutôt que sur les problèmes du client.",
  "Un manque de confiance dans son offre et son prix, qui freine le passage à l’action.",
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
  "Prendre confiance dans son offre et son prix",
];

const MOIS = [
  {
    nom: "Janvier",
    accroche: "On cadre et on démarre",
    etapes: [
      "Cadrage des objectifs et des attentes",
      "2 journées de formation-action",
      "Rodages et débriefs de rendez-vous",
    ],
  },
  {
    nom: "Février",
    accroche: "On ajuste et on accélère",
    etapes: [
      "Suivi et adaptation du parcours",
      "2 journées de formation-action",
      "Rodages et débriefs de rendez-vous",
    ],
  },
  {
    nom: "Mars",
    accroche: "On consolide et on fait le bilan",
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
    texte: "De quoi parler argent sans gêne, et oser demander la signature.",
  },
  {
    titre: "Des réflexes qui restent",
    texte:
      "Une culture commerciale installée, et un réseau de startups pour continuer à s’entraîner.",
  },
];

/**
 * Avis repris mot pour mot du profil Trustfolio, choisis pour parler a des
 * fondateurs qui cherchent leurs premiers clients. Trustfolio ne stocke une
 * photo de la personne que pour cinq de ses quarante avis : pour les autres
 * on affiche le logo de l'entreprise, d'ou le champ `visuel` qui distingue
 * les deux cas.
 */
const TEMOIGNAGES = [
  {
    citation:
      "Nous avons fait appel à Kwala dans le cadre du programme Lyon Start Up à destination des porteurs de projets innovants accompagnés. […] Les objectifs de prises de rdv ont largement été atteints avec par ailleurs un gain en compétences et confiance significatifs.",
    nom: "Shaërazade Harzallah",
    fonction: "Cheffe de projet Lyon Start Up",
    image: "/temoignages/la-french-tech.png",
    visuel: "logo" as const,
  },
  {
    citation:
      "Je construis un logiciel depuis quelques mois et je crée aujourd’hui une start-up pour le mettre sur le marché. Grâce à l’accompagnement de Kwala, j’ai pu comprendre l’intérêt de signer rapidement de premiers clients, d’entrer en contact avec mon marché pour le tester en parallèle du développement technique, afin de ne pas tomber dans le piège du perfectionnisme.",
    nom: "Thomas Jebabli",
    fonction: "Fondateur & Software Engineer, Gentica",
    image: "/temoignages/gentica.png",
    visuel: "logo" as const,
  },
  {
    citation:
      "J’étais indépendant, j’avais un seul client, j’étais seul face à mon défi de croissance et sans méthode. Kwala a apporté l’écoute, la méthode, l’émulation et la régularité dans mon action commerciale. Je suis passé d’1 client à 6 clients en 1 an, j’ai pris une vraie casquette de commercial, avec plaisir.",
    nom: "Guillaume Blanchard",
    fonction: "Fondateur, Enerkaya",
    image: "/temoignages/enerkaya.jpg",
    visuel: "logo" as const,
  },
  {
    citation:
      "J’étais seule dans l’entreprise et un peu démunie sur le ciblage et la méthode commerciale. […] Ça m’a permis de passer d’une logique de consultante indépendante à celle de cheffe d’entreprise.",
    nom: "Axelle Sorret",
    fonction: "Fondatrice & Dirigeante, TRINITY",
    image: "/temoignages/axelle-sorret.jpg",
    visuel: "photo" as const,
  },
];

const RAISONS = [
  {
    titre: "Débloquer du chiffre d’affaires",
    texte: "Rapidement, pendant le programme et pas des mois après.",
  },
  {
    titre: "Investir sur soi",
    texte: "Savoir vendre reste acquis pour toute la suite de votre carrière.",
  },
  {
    titre: "Donner à votre projet ses vraies chances",
    texte:
      "Un bon produit qui ne trouve pas ses clients s’arrête quand même. Autant lever ce doute-là tout de suite.",
  },
];


/** Aucune photo de ces clients dans le depot : on affiche leurs initiales. */
function initiales(nom: string) {
  return nom
    .split(/\s+/)
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");
}

const BANDE = "px-6 py-20 md:px-[120px] md:py-[100px]";
const LARGEUR = "mx-auto w-full max-w-[1280px]";
const SURTITRE =
  "font-asap text-[15px] font-bold italic uppercase tracking-[0.12em]";
const TITRE_CLAIR =
  "font-asap text-[34px] font-bold italic leading-[1.08] text-onyx md:text-[52px]";
const TITRE_SOMBRE =
  "font-asap text-[34px] font-bold italic leading-[1.08] text-white md:text-[52px]";

function Bouton({
  variante = "wisteria",
}: {
  variante?: "wisteria" | "onyx";
}) {
  const style =
    variante === "wisteria"
      ? "bg-wisteria text-onyx hover:bg-[#97A6F5]"
      : "bg-onyx text-white hover:opacity-90";
  return (
    <Link
      href="#contact"
      className={`inline-flex items-center rounded-sm px-7 py-4 font-asap text-[16px] font-bold italic transition-all active:scale-[0.98] ${style}`}
    >
      Réserver un rendez-vous d’information
    </Link>
  );
}

function Accroche({ sombre = false }: { sombre?: boolean }) {
  return (
    <p
      className={`mt-4 max-w-[540px] font-dm-sans text-[15px] leading-7 ${
        sombre ? "text-dust/80" : "text-onyx/70"
      }`}
    >
      30 minutes avec un coach Kwala pour parler de votre projet et voir si le
      programme est pertinent pour vous, maintenant. Sans engagement.
    </p>
  );
}

export default function LyonStartUp() {
  return (
    <div className="bg-alabaster">
      {/* En-tete propre a la page : pas la navigation du site, seulement les
          deux logos et l'unique action possible. */}
      <header className="sticky top-0 z-50 w-full border-b border-onyx/10 bg-alabaster/90 backdrop-blur">
        <div
          className={`${LARGEUR} flex items-center justify-between gap-4 px-6 py-4 md:px-10`}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/logos/logo-kwala.svg"
              alt="Kwala"
              width={120}
              height={32}
              className="h-6 w-auto md:h-7"
            />
            <span aria-hidden="true" className="font-asap text-lg text-onyx/35">
              ×
            </span>
            <Image
              src="/logos/lyon-start-up.png"
              alt="Lyon Start Up"
              width={134}
              height={69}
              className="h-8 w-auto md:h-10"
            />
          </div>
          <Link
            href="#contact"
            className="shrink-0 rounded-sm bg-onyx px-4 py-2.5 font-asap text-[14px] font-bold italic text-white transition-opacity hover:opacity-90 md:px-6 md:py-3 md:text-[15px]"
          >
            <span className="md:hidden">Rendez-vous</span>
            <span className="hidden md:inline">
              Réserver un rendez-vous
            </span>
          </Link>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative overflow-hidden bg-onyx">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-screen"
            style={{
              backgroundImage: "url(/decor/motif-01-hero.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className={`${LARGEUR} relative grid gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16`}
          >
            <div>
              <p className={`${SURTITRE} text-wisteria`}>
                Kwala Sales Academy × Lyon Start Up
              </p>
              <p className="mt-2 font-dm-sans text-[15px] text-dust/70">
                Janvier – mars 2027 · 8 projets
              </p>
              <h1 className="mt-6 font-asap text-[44px] font-bold italic leading-[1.02] text-white md:text-[76px]">
                3 mois pour
                <br />
                <span className="text-wisteria">vendre plus</span>
              </h1>
              <p className="mt-7 max-w-[520px] font-dm-sans text-[19px] leading-8 text-dust">
                Un programme d’accélération commerciale imaginé entre Lyon Start
                Up et Kwala, limité à 8 projets.
              </p>
              <div className="mt-9">
                <Bouton />
                <Accroche sombre />
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:aspect-[5/6]">
              <Image
                src="/photos/pages/formation-collectif.webp"
                alt="Fondateurs en session collective d’entraînement commercial chez Kwala"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- CHIFFRES ---------- */}
        <section className="bg-wisteria">
          <div
            className={`${LARGEUR} grid gap-8 px-6 py-12 md:grid-cols-3 md:px-10`}
          >
            {CHIFFRES.map((c) => (
              <div key={c.valeur}>
                <p className="font-asap text-[36px] font-bold italic leading-none text-onyx md:text-[44px]">
                  {c.valeur}
                </p>
                <p className="mt-2 font-dm-sans text-[15px] leading-6 text-onyx/75">
                  {c.libelle}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CONTEXTE ---------- */}
        <section className={`bg-alabaster ${BANDE}`}>
          <div className={`${LARGEUR} grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20`}>
            <div>
              <p className={`${SURTITRE} text-wisteria-text`}>Le contexte</p>
              <h2 className={`mt-4 ${TITRE_CLAIR}`}>
                L’IA a accéléré le produit.
                <br />
                Reste à le vendre.
              </h2>
              <div className="mt-7 space-y-5 font-dm-sans text-[18px] leading-8 text-onyx">
                <p>
                  Construire un premier produit utilisable prend aujourd’hui
                  quelques semaines, là où il fallait plusieurs mois. Le produit
                  n’est plus le goulot d’étranglement.
                </p>
                <p>
                  Ce qui fait la différence, c’est la capacité du fondateur à
                  aller chercher ses premiers clients, à parler de son offre et
                  à la faire signer.{" "}
                  <strong className="font-medium">
                    Cette partie-là, l’IA ne la fait pas à votre place.
                  </strong>
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/photos/pages/dirigeants-methode.webp"
                alt="Coach Kwala détaillant au tableau la construction d’un objectif commercial"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------- CONSTAT ---------- */}
        <section className={`bg-dust ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria-text`}>Le constat</p>
            <h2 className={`mt-4 ${TITRE_CLAIR}`}>
              Ce qu’on observe chez les fondateurs
            </h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {CONSTATS.map((constat, i) => (
                <li
                  key={constat}
                  className="flex gap-5 rounded-2xl bg-alabaster px-7 py-8"
                >
                  <span
                    aria-hidden="true"
                    className="font-asap text-[40px] font-bold italic leading-none text-wisteria-text"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 font-dm-sans text-[17px] leading-7 text-onyx">
                    {constat}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- POUR QUI ---------- */}
        <section className={`bg-onyx ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria`}>Le tri se fait ici</p>
            <h2 className={`mt-4 ${TITRE_SOMBRE}`}>
              Pour qui c’est fait,
              <br />
              et pour qui ça ne l’est pas
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/15 px-7 py-9 md:px-9">
                <h3 className="font-asap text-[24px] font-bold italic leading-tight text-white md:text-[28px]">
                  Ce n’est pas fait pour vous si…
                </h3>
                <ul className="mt-7 space-y-5 font-dm-sans text-[16px] leading-7 text-dust/85">
                  {PAS_POUR_VOUS.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span aria-hidden="true" className="text-white/30">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-wisteria px-7 py-9 md:px-9">
                <h3 className="font-asap text-[24px] font-bold italic leading-tight text-onyx md:text-[28px]">
                  C’est pleinement fait pour vous si…
                </h3>
                <ul className="mt-7 space-y-5 font-dm-sans text-[16px] leading-7 text-onyx">
                  {POUR_VOUS.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span aria-hidden="true" className="font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Bouton />
              <Accroche sombre />
            </div>
          </div>
        </section>

        {/* ---------- OBJECTIF ---------- */}
        <section className={`bg-alabaster ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria-text`}>L’objectif</p>
            <h2 className={`mt-4 ${TITRE_CLAIR}`}>
              Un accélérateur commercial pour passer un cap
            </h2>
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {OBJECTIFS.map((objectif) => (
                <li
                  key={objectif}
                  className="rounded-2xl bg-onyx px-7 py-9 font-asap text-[21px] font-bold italic leading-tight text-white"
                >
                  {objectif}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- FORMAT ---------- */}
        <section className={`bg-dust ${BANDE}`}>
          <div className={LARGEUR}>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/photos/pages/equipe-collectif.webp"
                  alt="Session collective autour de la table chez Kwala"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className={`${SURTITRE} text-wisteria-text`}>Le format</p>
                <h2 className={`mt-4 ${TITRE_CLAIR}`}>
                  De janvier à mars 2027, limité à 8 projets
                </h2>
                <p className="mt-6 font-dm-sans text-[18px] leading-8 text-onyx">
                  Le programme est réservé aux projets de la promotion Lyon
                  Start Up en cours et aux alumni.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {MOIS.map((mois) => (
                <div
                  key={mois.nom}
                  className="rounded-2xl bg-alabaster px-7 py-9"
                >
                  <p className="font-asap text-[28px] font-bold italic leading-none text-wisteria-text">
                    {mois.nom}
                  </p>
                  <p className="mt-2 font-asap text-[18px] font-bold italic text-onyx">
                    {mois.accroche}
                  </p>
                  <ul className="mt-6 space-y-3 font-dm-sans text-[16px] leading-7 text-onyx/85">
                    {mois.etapes.map((etape) => (
                      <li key={etape} className="flex gap-3">
                        <span aria-hidden="true" className="text-wisteria-text">
                          •
                        </span>
                        <span>{etape}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- INCLUS ---------- */}
        <section className={`bg-onyx ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria`}>Ce que ça comprend</p>
            <h2 className={`mt-4 ${TITRE_SOMBRE}`}>
              Tout ce qui est inclus sur les 3 mois
            </h2>
            <ul className="mt-12 grid gap-4 md:grid-cols-2">
              {INCLUS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-white/[0.06] px-6 py-5 font-dm-sans text-[17px] leading-7 text-white"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-wisteria font-asap text-[13px] font-bold text-onyx"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- CE QUE VOUS REPARTEZ AVEC ---------- */}
        <section className={`bg-alabaster ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria-text`}>À la sortie</p>
            <h2 className={`mt-4 ${TITRE_CLAIR}`}>Ce que vous repartez avec</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2">
              {REPARTS_AVEC.map((item, i) => (
                <li key={item.titre} className="rounded-2xl bg-dust px-7 py-9">
                  <span
                    aria-hidden="true"
                    className="font-asap text-[40px] font-bold italic leading-none text-wisteria-text"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-asap text-[21px] font-bold italic leading-tight text-onyx md:text-[24px]">
                    {item.titre}
                  </h3>
                  <p className="mt-3 font-dm-sans text-[16px] leading-7 text-onyx/85">
                    {item.texte}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- TEMOIGNAGES ---------- */}
        <section className={`bg-dust ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria-text`}>Ils l’ont fait</p>
            <h2 className={`mt-4 ${TITRE_CLAIR}`}>
              Ce qu’en disent les fondateurs accompagnés
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {TEMOIGNAGES.map((t) => (
                <figure
                  key={t.nom}
                  className="flex flex-col rounded-2xl bg-alabaster px-7 py-9"
                >
                  <span
                    aria-hidden="true"
                    className="font-asap text-[44px] font-bold italic leading-none text-wisteria"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 grow font-dm-sans text-[17px] leading-7 text-onyx">
                    {t.citation}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    {/* Un portrait se recadre, un logo doit rester entier :
                        d'ou object-cover dans un cercle pour l'un, un cadre
                        blanc et object-contain pour l'autre. */}
                    <span
                      className={`relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full ${
                        t.visuel === "logo" ? "bg-white p-2" : ""
                      }`}
                    >
                      <Image
                        src={t.image}
                        alt={t.visuel === "logo" ? t.fonction : t.nom}
                        fill={t.visuel === "photo"}
                        width={t.visuel === "logo" ? 56 : undefined}
                        height={t.visuel === "logo" ? 56 : undefined}
                        sizes="56px"
                        className={
                          t.visuel === "logo"
                            ? "h-auto w-full object-contain"
                            : "object-cover"
                        }
                      />
                    </span>
                    <span className="font-dm-sans text-[15px] leading-6 text-onyx">
                      <span className="font-medium">{t.nom}</span>
                      <br />
                      <span className="text-onyx/70">{t.fonction}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-8 font-dm-sans text-[15px] leading-7 text-onyx/70">
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
          </div>
        </section>

        {/* ---------- TARIF ---------- */}
        <section className={`bg-onyx ${BANDE}`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria`}>Le tarif</p>
            <h2 className={`mt-4 ${TITRE_SOMBRE}`}>
              Un tarif négocié par Lyon Start Up
            </h2>

            <div className="mt-12 grid gap-8 rounded-2xl bg-wisteria px-7 py-10 md:px-12 md:py-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
              <div>
                <p className="font-dm-sans text-[16px] text-onyx/60">
                  Offre standard Kwala{" "}
                  <s className="decoration-onyx/50">4 000 € HT</s>
                </p>
                <p className="mt-2 font-asap text-[56px] font-bold italic leading-none text-onyx md:text-[72px]">
                  2 900 € HT
                </p>
                <p className="mt-3 font-dm-sans text-[16px] text-onyx/75">
                  pour les 3 mois
                </p>
              </div>
              <div className="space-y-4 font-dm-sans text-[16px] leading-7 text-onyx/85 lg:border-l lg:border-onyx/20 lg:pl-16">
                <p>
                  <span className="font-medium">Payable en trois fois :</span>{" "}
                  1 000 € HT le premier mois, 900 € HT le deuxième, 1 000 € HT
                  le troisième.
                </p>
                <p>
                  Un tarif obtenu par Lyon Start Up, réservé à ses projets.
                </p>
                <p className="font-medium text-onyx">
                  Offre valable pour toute signature avant le 20 décembre 2026.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Bouton />
              <Accroche sombre />
            </div>
          </div>
        </section>

        {/* ---------- POURQUOI INVESTIR ---------- */}
        <section className={`bg-wisteria ${BANDE}`}>
          <div className={LARGEUR}>
            <h2 className={`${TITRE_CLAIR}`}>Pourquoi investir</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {RAISONS.map((raison, i) => (
                <li
                  key={raison.titre}
                  className="rounded-2xl bg-alabaster px-7 py-9"
                >
                  <span
                    aria-hidden="true"
                    className="font-asap text-[40px] font-bold italic leading-none text-wisteria-text"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-asap text-[21px] font-bold italic leading-tight text-onyx">
                    {raison.titre}
                  </h3>
                  <p className="mt-3 font-dm-sans text-[16px] leading-7 text-onyx/85">
                    {raison.texte}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- EQUIPE ---------- */}
        <section className={`bg-alabaster px-6 pt-20 md:px-[120px] md:pt-[100px]`}>
          <div className={LARGEUR}>
            <p className={`${SURTITRE} text-wisteria-text`}>L’équipe</p>
            <h2 className={`mt-4 ${TITRE_CLAIR}`}>
              C’est avec nous que vous travaillerez
            </h2>
            <p className="mt-6 max-w-[760px] font-dm-sans text-[18px] leading-8 text-onyx">
              Toute l’équipe Kwala intervient sur le programme. Vous
              rencontrerez vos coachs lors du rendez-vous d’information.
            </p>

            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl md:aspect-[16/9] lg:max-w-[980px]">
              <Image
                src="/photos/equipe-kwala.jpeg"
                alt="L’équipe de coachs Kwala"
                fill
                sizes="(max-width: 1024px) 100vw, 980px"
                className="object-cover"
              />
            </div>

            <p className="mt-10 font-asap text-[20px] font-bold italic text-onyx md:text-[24px]">
              8 places, et une signature à boucler avant le 20 décembre 2026.
            </p>
          </div>
        </section>

        {/* ---------- FORMULAIRE ---------- */}
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

        {/* ---------- ECOSYSTEME ---------- */}
        <section className="bg-alabaster px-6 pb-20 md:px-[120px]">
          <div className={LARGEUR}>
            <p className="text-center font-dm-sans text-[14px] uppercase tracking-[0.12em] text-onyx/50">
              Nos partenaires
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {PARTENAIRES.map((p) => (
                <li key={p.alt}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    className="h-10 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-12"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Pied de page compact : la page n'embarque pas celui du site, mais
          les mentions legales doivent rester atteignables. */}
      <footer className="bg-onyx px-6 py-12 md:px-[120px]">
        <div
          className={`${LARGEUR} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/logos/logo-kwala.svg"
              alt="Kwala"
              width={120}
              height={32}
              className="h-7 w-auto brightness-0 invert"
            />
            <span aria-hidden="true" className="font-asap text-lg text-white/30">
              ×
            </span>
            <Image
              src="/logos/lyon-start-up.png"
              alt="Lyon Start Up"
              width={134}
              height={69}
              className="h-9 w-auto"
            />
          </div>
          <p className="font-dm-sans text-[15px] leading-7 text-dust/80">
            {TELEPHONE_LISIBLE} · {EMAIL}
            <br />
            <Link href="/mentions-legales" className="underline underline-offset-2 hover:no-underline">
              Mentions légales
            </Link>{" "}
            ·{" "}
            <Link href="/confidentialite" className="underline underline-offset-2 hover:no-underline">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
