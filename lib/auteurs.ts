export type Auteur = {
  slug: string;
  nom: string;
  role: string;
  linkedin: string;
  intro: string;
  expertises: string[];
  reseau: string[];
};

// Ces fiches alimentent a la fois la page auteur et le balisage Person des
// articles. Un auteur declare par son seul nom n'est qu'une chaine de
// caracteres pour un moteur : c'est le lien vers une page detaillee et vers
// un profil externe verifiable qui en fait une personne identifiee.
export const AUTEURS: Auteur[] = [
  {
    slug: "mathilde-dugardin",
    nom: "Mathilde Dugardin",
    role: "Coach Sales",
    linkedin: "https://www.linkedin.com/in/mathilde-du-gardin-b38b5686/",
    intro:
      "Mathilde accompagne les commerciaux et les entrepreneurs qui doivent construire leur activité en partant de zéro : trouver son marché, décrocher ses premiers rendez-vous, puis conclure.",
    expertises: [
      "Challenger et closing",
      "Vente en SaaS",
      "Prospection téléphonique à froid",
      "Trouver son marché",
      "Construire une activité en partant de zéro",
    ],
    reseau: ["Hôtellerie et restauration", "Lyon"],
  },
  {
    slug: "jenny-tordjman",
    nom: "Jenny Tordjman",
    role: "Coach Sales",
    linkedin: "https://www.linkedin.com/in/jenny-tordjman/",
    intro:
      "Jenny intervient sur la structure : organiser une équipe commerciale, clarifier une offre, poser des objectifs et le plan d’action qui va avec.",
    expertises: [
      "Management et animation d’équipe commerciale",
      "Structuration et organisation commerciale",
      "Clarification de l’offre et de la proposition de valeur",
      "Recrutement et onboarding de commerciaux",
      "Planification commerciale : objectifs, moyens et plan d’action",
    ],
    reseau: [
      "Agences médias et régies publicitaires",
      "Agences de communication et de marketing",
      "Annonceurs",
      "Entreprises à impact et économie sociale et solidaire",
    ],
  },
  {
    slug: "alexis-mignard",
    nom: "Alexis Mignard",
    role: "Coach Sales",
    linkedin: "https://www.linkedin.com/in/alexis-mignard-56384145/",
    intro:
      "Alexis travaille le discours : le pitch qu’on tient en événement, la relance qui obtient une réponse, et l’énergie collective d’une équipe engagée dans un challenge.",
    expertises: [
      "Pitch et discours commercial",
      "Relance de prospects",
      "Animation et fédération d’une équipe commerciale",
      "Contenus vidéo pour mobiliser une équipe",
      "Publication sur LinkedIn",
    ],
    reseau: [
      "Écosystème entrepreneurial lyonnais",
      "Startups lyonnaises",
      "Hôtellerie et distribution en ligne",
    ],
  },
  {
    slug: "gautier-colson",
    nom: "Gautier Colson",
    role: "Coach Sales",
    linkedin: "https://www.linkedin.com/in/gautiercolson/",
    intro:
      "Gautier accompagne les dirigeants de TPE et de PME sur l’ensemble de la chaîne commerciale : la proposition de valeur, les outils qui la soutiennent, et l’équipe qui la porte.",
    expertises: [
      "Outils et CRM",
      "Challenger et closing",
      "Responsabilité commerciale",
      "Recrutement",
      "Marketing de l’offre",
      "Entrepreneuriat et gestion de TPE",
    ],
    reseau: ["Lyon", "Éditeurs de logiciels", "Prestataires de services"],
  },
];

export function getAuteur(nom: string): Auteur | undefined {
  return AUTEURS.find((a) => a.nom === nom);
}

export function getAuteurBySlug(slug: string): Auteur | undefined {
  return AUTEURS.find((a) => a.slug === slug);
}
