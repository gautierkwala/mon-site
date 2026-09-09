import type { Metadata } from "next";
import { ADRESSE, SITE_URL, TELEPHONE } from "@/lib/site";
import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";
import { Contact } from "@/components/10-Contact";
import { PageHero } from "@/components/pages/PageHero";
import { MotCercle } from "@/components/pages/MotCercle";
import { BlocProbleme } from "@/components/pages/BlocProbleme";
import { BlocPourquoi } from "@/components/pages/BlocPourquoi";
import { LienPageSoeur } from "@/components/pages/LienPageSoeur";

const CHEMIN = "/formation-commerciale-lyon";

export const metadata: Metadata = {
  title: "Formation commerciale à Lyon, finançable par votre OPCO | Kwala",
  description:
    "Formation commerciale à Lyon en présentiel, de 3 à 6 mois, pour des groupes de 5 à 15 personnes. Entraînement sur vos dossiers réels. Financement OPCO possible.",
  alternates: { canonical: CHEMIN },
  openGraph: {
    type: "website",
    title: "Formation commerciale à Lyon, finançable par votre OPCO | Kwala",
    description:
      "Une formation commerciale en présentiel à Lyon, construite comme un entraînement sur vos dossiers réels. Financement OPCO possible.",
    url: CHEMIN,
  },
};

// Course plutot que Service : c'est le type que les moteurs attendent pour
// une formation, et le seul qui accepte la duree, le mode presentiel et la
// fourchette de prix.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation commerciale à Lyon",
  description:
    "Formation commerciale en présentiel à Lyon pour dirigeants, entrepreneurs et équipes commerciales B2B. Entraînement sur des situations de vente réelles : prospection, conduite de rendez-vous, traitement des objections, closing.",
  url: `${SITE_URL}${CHEMIN}`,
  inLanguage: "fr-FR",
  provider: {
    "@type": "ProfessionalService",
    name: "Kwala",
    url: SITE_URL,
    telephone: TELEPHONE,
    address: ADRESSE,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "P3M/P6M",
    location: {
      "@type": "Place",
      name: "Kwala",
      address: ADRESSE,
    },
  },
  offers: {
    "@type": "Offer",
    category: "Formation professionnelle",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: 4000,
      maxPrice: 15000,
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}${CHEMIN}`,
  },
  audience: {
    "@type": "Audience",
    audienceType: "Dirigeants, entrepreneurs et équipes commerciales B2B",
  },
};

const REPERES = [
  { intitule: "Durée", valeur: "De 3 à 6 mois, en séances espacées pour laisser le temps de pratiquer entre deux." },
  { intitule: "Groupe", valeur: "De 5 à 15 participants, pour que chacun passe réellement à l’exercice." },
  { intitule: "Format", valeur: "En présentiel, à Lyon. Pas de module en ligne à regarder seul." },
  { intitule: "Budget", valeur: "De 4 000 à 15 000 euros HT selon la durée et la taille du groupe." },
];

export default function FormationCommercialeLyon() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-alabaster">
        <PageHero
          surtitre="Formation commerciale · Lyon"
          titre={
            <>
              Formation commerciale à <MotCercle>Lyon</MotCercle>
            </>
          }
          sousTitre="Une formation commerciale qui ne se regarde pas, qui se pratique. Trois à six mois d’entraînement en présentiel à Lyon, sur vos dossiers réels, avec un financement OPCO possible."
          cta={{ libelle: "Discuter de votre projet", href: "#contact" }}
          photo={{
            src: "/photos/pages/formation-collectif.webp",
            alt: "Participants en train de travailler pendant une session de formation commerciale Kwala à Lyon",
          }}
        />

        <BlocProbleme
          decor="petales"
          titre="Deux jours de formation, et tout le monde reprend ses habitudes."
          texte="C’est le scénario le plus répandu. Une session dense, des slides, des prises de conscience réelles, beaucoup d’enthousiasme en sortie de salle. Puis le retour au quotidien : les urgences, les relances en retard, les réflexes qui reviennent. Trois semaines plus tard, il ne reste presque rien. Le problème n’est pas le contenu de la formation, il est souvent bon. Le problème, c’est qu’une compétence commerciale ne se transmet pas comme une information. Elle s’acquiert en la pratiquant, en se trompant, et en étant corrigé sur le moment."
        />

        {/* Reperes pratiques : c'est ce que cherche quelqu'un qui tape
            "formation commerciale Lyon". Durée, taille du groupe, format et
            budget, avant tout argumentaire. */}
        <section className="w-full bg-alabaster">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[80px]">
            <h2 className="max-w-[820px] font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
              Le format, en clair.
            </h2>
            <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {REPERES.map(({ intitule, valeur }) => (
                <div key={intitule} className="rounded-xl bg-dust px-6 py-6">
                  <dt className="font-asap text-[15px] font-bold italic text-wisteria-text">
                    {intitule}
                  </dt>
                  <dd className="mt-3 font-dm-sans text-base leading-7 text-onyx">
                    {valeur}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <BlocPourquoi
          titre="Une formation qui se pratique."
          texte="Le déroulé est celui d’un entraînement, pas d’un cours. On travaille sur vos vrais dossiers, vos vrais prospects, vos vraies objections. Les appels se passent en direct devant le groupe. Les rendez-vous sont réécoutés et décortiqués ensemble. Entre deux séances, chacun applique sur le terrain et revient avec ce qui a marché et ce qui a bloqué. C’est cet aller-retour, étalé sur plusieurs mois, qui transforme une intention en réflexe."
          puces={[
            "Séances en présentiel, à Lyon",
            "Prospection, conduite de rendez-vous, traitement des objections, négociation, closing",
            "Appels et rendez-vous réels analysés avec le groupe",
            "Mise en pratique sur le terrain entre chaque séance",
            "Un plan de progression individuel pour chaque participant",
          ]}
          photo={{
            src: "/photos/pages/formation-animation.webp",
            alt: "Coach Kwala animant une séance de formation commerciale à Lyon",
          }}
        />

        {/* Financement : premiere question posee sur cette requete. La
            formulation distingue explicitement Kwala de l'organisme porteur,
            Kwala n'etant pas certifie Qualiopi en propre. */}
        <section className="w-full bg-alabaster">
          <div className="mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-[120px] md:pb-[80px]">
            <div className="max-w-[900px] rounded-xl bg-dust px-6 py-10 md:px-12 md:py-12">
              <h2 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
                Financer la formation avec votre OPCO.
              </h2>
              <div className="mt-5 space-y-4 font-dm-sans text-[17px] leading-8 text-onyx/85">
                <p>
                  Une formation ne peut ouvrir droit à un financement que si
                  elle est portée par un organisme certifié Qualiopi. Kwala ne
                  l’est pas en propre. Nos actions de formation sont déposées
                  par PKF Arsilon Academy, notre organisme partenaire, qui en
                  assure l’enregistrement et le suivi administratif.
                </p>
                <p>
                  Concrètement, cela vous permet de solliciter une prise en
                  charge auprès de votre OPCO, comme pour n’importe quelle
                  formation professionnelle. Le montant accordé dépend de votre
                  branche, de votre effectif et du budget restant sur votre
                  exercice. Nous regardons ensemble ce qui est mobilisable dès
                  le premier échange, avant que vous ne vous engagiez.
                </p>
                <p>
                  Nous nous chargeons du dossier et des documents à fournir.
                  Vous n’avez pas de démarche administrative à mener seul.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact
          titre="Un premier échange pour cadrer votre formation."
          texte="Chaque formation commence par un point de cadrage : votre situation commerciale, le niveau des participants, ce que vous voulez qu’ils sachent faire à la fin. C’est ce qui permet de construire un programme adapté, et de vérifier ce que votre OPCO peut prendre en charge."
          source="formation"
        />

        <LienPageSoeur
          question="Vous cherchez plutôt un accompagnement individuel ?"
          libelle="Voir la page dédiée aux dirigeants"
          href="/coaching-dirigeants-lyon"
        />
      </main>
      <Footer />
    </>
  );
}
