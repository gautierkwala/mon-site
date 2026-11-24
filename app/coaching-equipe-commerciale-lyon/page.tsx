import type { Metadata } from "next";
import { ADRESSE, SITE_URL, TELEPHONE } from "@/lib/site";
import { CONVICTION, QUATRE_TEMPS } from "@/lib/methode";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { Contact } from "@/components/10-Contact";
import { PageHero } from "@/components/pages/PageHero";
import { MotCercle } from "@/components/pages/MotCercle";
import { BlocProbleme } from "@/components/pages/BlocProbleme";
import { BlocPourquoi } from "@/components/pages/BlocPourquoi";
import { BlocActions } from "@/components/pages/BlocActions";
import { BlocResultats } from "@/components/pages/BlocResultats";
import { BlocTemoignages } from "@/components/pages/BlocTemoignages";
import { LienPageSoeur } from "@/components/pages/LienPageSoeur";


const CHEMIN = "/coaching-equipe-commerciale-lyon";

export const metadata: Metadata = {
  title: "Coaching commercial d’équipe à Lyon | Kwala",
  description:
    "Formation-action pour faire progresser vos commerciaux en place : méthode commune, entraînement, challenge d’équipe et managers formés à coacher. À Lyon.",
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    title: "Coaching commercial d’équipe à Lyon | Kwala",
    description:
      "Méthode commune, entraînement sur situations réelles et managers formés à coacher : Kwala fait progresser votre équipe commerciale à Lyon.",
    url: CHEMIN,
  },
};

// Pas de bloc offers : les tarifs ne doivent pas ressortir dans les resultats
// de recherche, ils ne figurent que dans les programmes PDF.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coaching commercial pour équipes",
  serviceType: "Coaching commercial",
  description:
    "Formation-action pour les équipes commerciales et leurs managers : méthode de vente commune, entraînement sur situations réelles, challenge de prospection et pilotage de la performance.",
  url: `${SITE_URL}${CHEMIN}`,
  inLanguage: "fr-FR",
  provider: {
    "@type": "ProfessionalService",
    name: "Kwala",
    url: SITE_URL,
    telephone: TELEPHONE,
    address: ADRESSE,
  },
  areaServed: { "@type": "City", name: "Lyon" },
  audience: { "@type": "Audience", audienceType: "Équipes commerciales et managers" },
};

const VOLETS = [
  {
    titre: "Les fondamentaux",
    actions: [
      {
        titre: "Ateliers de vente",
        texte:
          "De la prospection au closing : la théorie, des sketchs de vente et la réécoute de rendez-vous réels de l’équipe.",
      },
      {
        titre: "Intégration des nouveaux",
        texte:
          "Une méthode commune transmise dès le premier jour, pour qu’un commercial qui arrive soit opérationnel plus vite.",
      },
    ],
  },
  {
    titre: "L’entraînement",
    actions: [
      {
        titre: "Challenge d’équipe",
        texte:
          "Un challenge de prospection ou de closing, pour remettre toute l’équipe en mouvement en même temps.",
      },
      {
        titre: "Coach IA",
        texte:
          "Une grille d’évaluation de vos rendez-vous, confiée à votre IA pour réécouter les appels et corriger le tir entre deux sessions.",
      },
    ],
  },
  {
    titre: "Le pilotage",
    actions: [
      {
        titre: "Formation des managers",
        texte:
          "Apprendre à coacher son équipe et à en tirer le meilleur, plutôt que de se limiter au reporting.",
      },
      {
        titre: "Indicateurs de performance",
        texte:
          "Choisir les bons chiffres et les suivre chaque semaine, pour voir venir les écarts avant la fin du trimestre.",
      },
    ],
  },
];

const TEMOIGNAGES = [
  {
    nom: "Antonin Guy",
    fonction: "CEO de WeCount",
    chiffre: "91 rendez-vous pris en 2 mois",
    citation:
      "Formation de l’équipe aux méthodes de cold call pour gagner en performance, et organisation d’un challenge commercial pour mettre en mouvement l’équipe. […] Une équipe formée et motivée pour accélérer notre acquisition via le cold call.",
  },
  {
    nom: "Florian Genisson",
    fonction: "directeur commercial de Refectory",
    chiffre: "+20 % de taux de closing",
    citation:
      "Nous avons sollicité Kwala dans le cadre du changement drastique de notre machine d’acquisition. […] Des équipes formées, des process en lien avec notre cycle de vente gravés dans le marbre et une adoption plus qu’acceptable sur l’ensemble de nos sites.",
  },
];

export default function CoachingEquipeCommercialeLyon() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      {/* Fond de page : le body est blanc, chaque section doit donc
          declarer son fond. On le pose une fois ici. */}
      <main className="bg-alabaster">
        <PageHero
          surtitre="Formation-action · Équipes commerciales · Lyon"
          /* Meme parti pris que la page dirigeants : l'accroche du deck et la
             requete visee cohabitent dans le H1. */
          titre={
            <>
              Les meilleurs commerciaux sont{" "}
              <MotCercle>déjà chez vous</MotCercle>
              <span className="mt-4 block font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[28px]">
                Coaching commercial d’équipe à Lyon
              </span>
            </>
          }
          sousTitre="Kwala propose de la formation-action pour faire progresser vos commerciaux en place : une méthode commune, de l’entraînement sur leurs vrais dossiers, et des managers outillés pour coacher."
          cta={{ libelle: "Discuter de votre projet", href: "#contact" }}
          photo={{
            src: "/photos/pages/equipe-collectif.webp",
            alt: "Équipe commerciale réunie autour de la table lors d’une session Kwala",
          }}
        />

        <BlocProbleme
          decor="formes"
          titre="Les blocages que rencontrent les équipes"
          texte="L’équipe s’essouffle : les appels se raréfient et le pipe se vide. Le marché se durcit en même temps, avec des cycles plus longs et davantage d’objections sur le prix. Chacun vend à sa façon, selon des habitudes installées, faute de méthode commune. Et les managers n’ont ni le temps ni toujours les compétences pour tirer le meilleur de leur équipe."
        />

        <BlocPourquoi
          titre="Notre conviction, notre méthode"
          texte={`${CONVICTION} C’est pourquoi l’accompagnement Kwala ne se joue pas en salle de cours, mais en quatre temps qui se répètent tout au long du parcours.`}
          puces={QUATRE_TEMPS}
          photo={{
            src: "/photos/pages/equipe-echange.webp",
            alt: "Échange entre commerciaux pendant un atelier collectif Kwala",
          }}
        />

        <BlocActions titre="Ce que nous faisons ensemble" volets={VOLETS} />

        <BlocResultats
          titre="Les résultats déjà obtenus"
          stats={[
            "Plus de rendez-vous",
            "Plus de closing",
            "Une méthode commune",
            "Des managers qui coachent",
          ]}
        />

        <BlocTemoignages
          titre="Ce qu’en disent les équipes accompagnées"
          temoignages={TEMOIGNAGES}
        />

        <Contact
          titre="Un premier échange pour cadrer votre projet"
          texte="Chaque accompagnement commence par un point de cadrage avec le manager ou le dirigeant, mené par Gautier Colson, fondateur et coach sales : la situation de l’équipe, les objectifs, ce qui bloque. Par téléphone au 06 23 13 01 49, ou via le formulaire."
          source="equipe"
        />

        <LienPageSoeur
          question="Vous développez votre activité seul ?"
          libelle="Voir la page dédiée aux dirigeants"
          href="/coaching-dirigeants-lyon"
        />

        <LienPageSoeur
          question="Prérequis, objectifs, durée, modalités et accessibilité :"
          libelle="programme détaillé de la formation"
          href="/programmes"
        />
      </main>
      <Footer />
    </>
  );
}
