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
const CHEMIN = "/coaching-dirigeants-lyon";

export const metadata: Metadata = {
  title: "Coaching commercial à Lyon pour dirigeants | Kwala",
  description:
    "Vous prospectez seul ? Kwala structure votre approche commerciale à Lyon : plus de rendez-vous qualifiés, un closing maîtrisé. 1er échange gratuit.",
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    title: "Coaching commercial à Lyon pour dirigeants | Kwala",
    description:
      "Kwala structure votre approche commerciale à Lyon : plus de rendez-vous qualifiés, un closing maîtrisé.",
    url: CHEMIN,
  },
};

// Service rattache au ProfessionalService declare dans le layout : meme
// @id d'organisation, pour que les deux blocs decrivent bien la meme entite.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coaching commercial pour dirigeants",
  serviceType: "Coaching commercial",
  description:
    "Accompagnement des dirigeants et entrepreneurs pour structurer leur approche commerciale : prospection, conduite de rendez-vous, négociation et closing.",
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
  audience: { "@type": "Audience", audienceType: "Dirigeants et entrepreneurs" },
};

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
          surtitre="Coaching commercial B2B · Lyon"
          titre="Coaching commercial à Lyon pour dirigeants et entrepreneurs"
          sousTitre="Vous faites le commerce seul. Kwala vous accompagne pour structurer votre approche, décrocher plus de rendez-vous qualifiés et aller au bout de vos deals — avec méthode, et dans la durée."
          cta={{ libelle: "Prendre contact", href: "#contact" }}
        />

        <BlocProbleme
          titre="Ce n’est pas le produit qui bloque."
          texte="La plupart des dirigeants qui arrivent chez Kwala ont un bon produit, une vraie proposition de valeur, et la volonté de développer leur activité. Ce qui manque, c’est rarement l’envie — c’est la méthode, la régularité, et quelqu’un pour regarder comment ça se passe vraiment en rendez-vous. Prospecter sans routine, c’est remettre à demain. Aller en rendez-vous sans structure, c’est laisser le prospect mener la danse. Parler prix sans préparation, c’est souvent baisser d’emblée. Sans regard extérieur, on progresse lentement — et souvent on ne sait pas exactement pourquoi ça ne signe pas."
        />

        <BlocPourquoi
          titre="Un coaching qui se passe en vrai."
          texte="Les formations en ligne apportent des connaissances. Ce qui change une posture commerciale, c’est autre chose : une correction en temps réel, un appel passé en live devant un coach, un rendez-vous réécouté et analysé ensemble. Chez Kwala, le travail se fait en salle, avec d’autres entrepreneurs, face à des situations concrètes. Ce n’est pas un cours — c’est de l’entraînement."
          puces={[
            "Séances en présentiel : pitch, schéma d’appel, objections, négociation, closing",
            "Écoute et analyse de vos vrais rendez-vous",
            "Sessions de prospection collectives, animées par un coach",
            "Suivi régulier des indicateurs commerciaux",
          ]}
        />

        <BlocResultats
          titre="Ce que ça change, concrètement."
          stats={[
            "+20% de taux de conversion en rendez-vous en moyenne",
            "+6 rendez-vous par mois avec des décideurs",
            "Un accompagnement rentabilisé en deux mois en moyenne",
          ]}
        />

        <Contact
          titre="Un premier échange pour voir si c’est fait pour vous."
          texte="Chaque accompagnement commence par un point de cadrage individuel : vos objectifs, votre situation commerciale actuelle, ce qui bloque. C’est gratuit, sans engagement, et ça permet de partir sur quelque chose de construit."
          source="dirigeant"
        />

        <LienPageSoeur
          question="Vous encadrez une équipe commerciale ?"
          libelle="Voir la page dédiée aux équipes"
          href="/coaching-equipe-commerciale-lyon"
        />
      </main>
      <Footer />
    </>
  );
}
