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
import { TEMOIGNAGES_DIRIGEANTS } from "@/lib/temoignages";
import { LienPageSoeur } from "@/components/pages/LienPageSoeur";


const CHEMIN = "/coaching-dirigeants-lyon";

export const metadata: Metadata = {
  title: "Coaching commercial à Lyon pour dirigeants | Kwala",
  description:
    "Formation-action pour les dirigeants qui portent le développement commercial de leur entreprise. Ateliers, entraînement et coaching individuel, à Lyon.",
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    title: "Coaching commercial à Lyon pour dirigeants | Kwala",
    description:
      "Formation-action pour les dirigeants qui portent le développement commercial : ateliers, entraînement et coaching individuel, à Lyon.",
    url: CHEMIN,
  },
};

// Service rattache au ProfessionalService declare dans le layout : meme
// @id d'organisation, pour que les deux blocs decrivent bien la meme entite.
// Pas de bloc offers : les tarifs ne doivent pas ressortir dans les resultats
// de recherche, ils ne figurent que dans les programmes PDF.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coaching commercial pour dirigeants",
  serviceType: "Coaching commercial",
  description:
    "Formation-action pour les dirigeants et entrepreneurs qui portent le développement commercial : ateliers de vente, entraînement à la prospection, conduite de rendez-vous, closing et coaching individuel.",
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
  audience: { "@type": "Audience", audienceType: "Dirigeants et entrepreneurs" },
};

const VOLETS = [
  {
    titre: "Les fondamentaux",
    actions: [
      {
        titre: "Ateliers de vente",
        texte:
          "En petit groupe de dirigeants, nous travaillons l’offre, le pitch, la prospection, la conduite de rendez-vous et le closing.",
      },
      {
        titre: "Une offre et un pitch clarifiés",
        texte:
          "Vous repartez en sachant quoi dire, à qui vous adresser et à quel prix vous positionner.",
      },
    ],
  },
  {
    titre: "L’entraînement",
    actions: [
      {
        titre: "Prospection en direct",
        texte:
          "On apprend le matin, on prospecte l’après-midi. Les rendez-vous se décrochent pendant la journée, pas après.",
      },
      {
        titre: "Rodages et écoute de rendez-vous",
        texte:
          "Des simulations chronométrées, puis vos propres appels réécoutés et analysés avec un coach.",
      },
    ],
  },
  {
    titre: "Le pilotage",
    actions: [
      {
        titre: "Coaching individuel du dirigeant",
        texte:
          "Des points réguliers, en tête à tête, pour suivre vos indicateurs et vos progrès.",
      },
      {
        titre: "Tableau de bord",
        texte:
          "Un suivi chiffré de l’impact de l’accompagnement, challengé avec votre coach à chaque point.",
      },
    ],
  },
];


export default function CoachingDirigeantsLyon() {
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
          surtitre="Formation-action · Dirigeants · Lyon"
          /* Le H1 porte l'accroche ET la requete visee. Deplacer « coaching
             commercial Lyon » hors du H1 aurait fragilise le seul
             positionnement acquis du site. */
          titre={
            <>
              Pour apprendre à closer,{" "}
              <MotCercle>apprenez à l’ouvrir</MotCercle>
              <span className="mt-4 block font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[28px]">
                Coaching commercial à Lyon pour dirigeants et entrepreneurs
              </span>
            </>
          }
          sousTitre="Kwala propose de la formation-action aux dirigeants qui portent eux-mêmes le développement commercial de leur entreprise : on apprend, on s’entraîne, et on décroche des rendez-vous pendant les sessions."
          cta={{ libelle: "Prendre contact", href: "#contact" }}
          photo={{
            src: "/photos/pages/dirigeants-methode.webp",
            alt: "Coach Kwala détaillant au tableau la construction d’un objectif commercial",
          }}
        />

        <BlocProbleme
          decor="petales"
          titre="Les blocages que rencontrent les dirigeants"
          texte="Vous êtes seul face au développement commercial, sans méthode claire ni regard extérieur sur ce que vous faites. La prospection passe après le reste, si bien que le chiffre d’affaires dépend encore largement du réseau et du bouche-à-oreille. En rendez-vous, le discours reste centré sur le produit plutôt que sur les problèmes du client. Et le manque de confiance dans son offre et dans son prix finit par freiner le passage à l’action."
        />

        <BlocPourquoi
          titre="Notre conviction, notre méthode"
          texte={`${CONVICTION} C’est pourquoi l’accompagnement Kwala ne se joue pas en salle de cours, mais en quatre temps qui se répètent tout au long du parcours.`}
          puces={QUATRE_TEMPS}
          photo={{
            src: "/photos/pages/dirigeants-cadrage.webp",
            alt: "Point de cadrage individuel entre un dirigeant et une coach Kwala",
          }}
        />

        <BlocActions titre="Ce que nous faisons ensemble" volets={VOLETS} />

        <BlocResultats
          surtitre="Les résultats"
          titre="Les résultats déjà obtenus"
          stats={[
            "Plus de rendez-vous",
            "Plus de clients",
            "Une méthode duplicable",
            "De la confiance",
          ]}
        />

        <BlocTemoignages
          sombre
          surtitre="Ils l’ont fait"
          titre="Ce qu’en disent les dirigeants accompagnés"
          temoignages={TEMOIGNAGES_DIRIGEANTS}
        />

        <Contact
          titre="Un premier échange pour voir si c’est fait pour vous"
          texte="Chaque accompagnement commence par un point de cadrage individuel avec Gautier Colson, fondateur et coach sales : vos objectifs, votre situation actuelle, ce qui bloque, et les résultats que vous visez. Par téléphone au 06 23 13 01 49, ou via le formulaire."
          source="dirigeant"
        />

        <LienPageSoeur
          question="Vous encadrez une équipe commerciale ?"
          libelle="Voir la page dédiée aux équipes"
          href="/coaching-equipe-commerciale-lyon"
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
