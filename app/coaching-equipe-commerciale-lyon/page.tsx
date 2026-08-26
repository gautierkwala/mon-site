import type { Metadata } from "next";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { Contact } from "@/components/10-Contact";
import { PageHero } from "@/components/pages/PageHero";
import { BlocProbleme } from "@/components/pages/BlocProbleme";
import { BlocPourquoi } from "@/components/pages/BlocPourquoi";
import { BlocResultats } from "@/components/pages/BlocResultats";
import { LienPageSoeur } from "@/components/pages/LienPageSoeur";

const SITE_URL = "https://kwala.fr";
const CHEMIN = "/coaching-equipe-commerciale-lyon";

export const metadata: Metadata = {
  title: "Coaching commercial d’équipe à Lyon | Kwala",
  description:
    "Formez votre équipe commerciale à Lyon avec Kwala : méthode commune, coaching terrain, manager accompagné. Premier échange pour cadrer votre projet.",
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    title: "Coaching commercial d’équipe à Lyon | Kwala",
    description:
      "Méthode commune, coaching terrain, manager accompagné : Kwala fait progresser votre équipe commerciale à Lyon.",
    url: CHEMIN,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coaching commercial pour équipes",
  serviceType: "Coaching commercial",
  description:
    "Accompagnement des équipes commerciales et de leur manager : méthode de vente commune, entraînement sur situations réelles, pilotage de la performance.",
  url: `${SITE_URL}${CHEMIN}`,
  inLanguage: "fr-FR",
  provider: {
    "@type": "ProfessionalService",
    name: "Kwala",
    url: SITE_URL,
    telephone: "+33623130149",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 rue Royale",
      postalCode: "69001",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
  },
  areaServed: { "@type": "City", name: "Lyon" },
  audience: { "@type": "Audience", audienceType: "Équipes commerciales et managers" },
};

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
          surtitre="Coaching commercial B2B · Lyon"
          titre="Coaching commercial pour équipes à Lyon"
          sousTitre="Votre équipe a les clients, les produits, les arguments. Ce qui manque souvent, c’est une méthode commune, un process structuré, et quelqu’un pour faire progresser chacun dans la durée. C’est ce que fait Kwala, à Lyon."
          cta={{ libelle: "Discuter de votre projet", href: "#contact" }}
        />

        <BlocProbleme
          titre="Quand chacun vend à sa façon, rien ne se duplique."
          texte="Dans beaucoup d’équipes commerciales, les bons résultats dépendent d’une ou deux personnes. Les autres ont du potentiel, mais pas de méthode claire. Le manager fait ce qu’il peut entre le reporting, les urgences et les recrutements — il n’a pas vraiment le temps de coacher. Résultat : les performances stagnent, les process de vente ne s’améliorent pas, et quand quelqu’un part, le savoir-faire repart avec lui. Ce n’est pas un problème de motivation. C’est un problème de structure."
        />

        <BlocPourquoi
          titre="Un coaching ancré dans le réel."
          texte="Une formation en salle avec des slides, ça crée des prises de conscience. Ce qui ancre vraiment les comportements, c’est ce qui se passe après : les simulations, les appels passés en conditions réelles, les rendez-vous réécoutés et décortiqués ensemble. Kwala travaille sur deux niveaux en parallèle : les compétences de l’équipe (prospection, conduite de rendez-vous, closing) et la capacité du manager à faire progresser et piloter dans la durée. L’objectif n’est pas de créer une dépendance à un coach externe — c’est de rendre l’équipe autonome."
          puces={[
            "Séances en présentiel, à Lyon",
            "Entraînement sur des situations réelles : appels, rendez-vous, objections, négociation",
            "Écoute et analyse d’appels ou de rendez-vous de l’équipe",
            "Coaching dédié au manager en parallèle",
            "Un process de vente documenté et utilisable en autonomie",
          ]}
        />

        <BlocResultats
          titre="Ce que ça change, concrètement."
          stats={[
            "+20% de taux de conversion en rendez-vous en moyenne",
            "+6 rendez-vous par mois avec des décideurs par commercial",
            "Des équipes qui reproduisent la méthode sans dépendre du coach",
          ]}
        />

        <Contact
          titre="Un premier échange pour cadrer votre projet."
          texte="Chaque accompagnement commence par un point de cadrage avec le manager ou le dirigeant : la situation de l’équipe, les objectifs, ce qui bloque. C’est ce qui permet de construire quelque chose d’adapté — pas une formation standard."
          source="equipe"
        />

        <LienPageSoeur
          question="Vous développez votre activité seul ?"
          libelle="Voir la page dédiée aux dirigeants"
          href="/coaching-dirigeants-lyon"
        />
      </main>
      <Footer />
    </>
  );
}
