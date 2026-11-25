/**
 * Les avis clients, en dur.
 *
 * Le widget Trustfolio rend ses avis dans une iframe servie par
 * share.trustfolio.co : leur contenu est cross-origin, donc invisible pour
 * Google comme pour les assistants. Il defilait en plus trop vite pour etre
 * lu. Les reprendre ici en texte les rend lisibles par les deux.
 *
 * Tous sont repris mot pour mot du profil Trustfolio, a deux exceptions pres :
 * les coupes sont signalees par des crochets, et quelques fautes de frappe
 * evidentes ont ete corrigees (accords, « defis » au singulier).
 *
 * Pas de balisage schema.org Review : Google interdit le balisage des avis
 * qu'une entreprise collecte sur elle-meme, et le risque d'action manuelle
 * depasse le gain.
 */

export type Temoignage = {
  citation: string;
  nom: string;
  /** Fonction puis societe, en une ligne. */
  fonction: string;
  /** Logo d'entreprise ou portrait : les deux ne se recadrent pas pareil. */
  visuel: { src: string; type: "logo" | "photo" };
  /** Resultat chiffre, quand l'avis en donne un. Mis en avant sur la carte. */
  chiffre?: string;
};

export const PROFIL_TRUSTFOLIO = "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1";
export const NOTE_TRUSTFOLIO = "5/5";
export const NOMBRE_AVIS = 40;

/** Dirigeants et entrepreneurs qui portent eux-memes le developpement. */
export const TEMOIGNAGES_DIRIGEANTS: Temoignage[] = [
  {
    citation:
      "J’étais indépendant, j’avais un seul client, j’étais seul face à mon défi de croissance et sans méthode. Kwala a apporté l’écoute, la méthode, l’émulation et la régularité dans mon action commerciale. Je suis passé d’1 client à 6 clients en 1 an, j’ai pris une vraie casquette de commercial, avec plaisir.",
    nom: "Guillaume Blanchard",
    fonction: "Fondateur, Enerkaya",
    visuel: { src: "/temoignages/enerkaya.jpg", type: "logo" },
    chiffre: "×6 clients en 1 an",
  },
  {
    citation:
      "J’avais besoin d’un cadre pour me forcer à prospecter et me sanctuariser des heures dédiées au commerce de mon entreprise. Au bout de 2 mois j’ai signé des clients qui émanaient de cette démarche.",
    nom: "Ludovic Tronel",
    fonction: "Fondateur, Silyane",
    visuel: { src: "/temoignages/silyane.png", type: "logo" },
    chiffre: "Des clients signés en 2 mois",
  },
  {
    citation:
      "J’étais seule dans l’entreprise et un peu démunie sur le ciblage et la méthode commerciale plus largement. Gautier m’a formée, boostée et encouragée. Au-delà de la méthode, c’est aussi et surtout l’état d’esprit du commercial que j’ai découvert. […] Bref, de passer d’une logique de consultante indépendante à celle de cheffe d’entreprise.",
    nom: "Axelle Sorret",
    fonction: "Fondatrice & Dirigeante, TRINITY",
    visuel: { src: "/temoignages/axelle-sorret.jpg", type: "photo" },
  },
  {
    citation:
      "J’ai fait appel à Kwala au lancement de mon activité pour monter en compétences sur l’ensemble du cycle commercial. […] Ils sont là pour nous challenger et nous sortir de notre zone de confort, mais dans un cadre bienveillant et orienté résultats. Ce coaching a marqué un bon tournant dans mon activité : objectifs atteints et compétences acquises.",
    nom: "Victor Dumas",
    fonction: "Fondateur & CEO, Vivasun",
    visuel: { src: "/temoignages/vivasun.jpg", type: "logo" },
  },
  {
    citation:
      "Je recommande vivement Gautier pour des séances de coaching commercial ! De mon côté, j’ai pu lever certains freins et comprendre comment raisonner pour atteindre mon CA idéal. Aujourd’hui, j’ai dépassé mon objectif prévisionnel !",
    nom: "Emmanuelle Jouffe",
    fonction: "Focus Management Group",
    visuel: { src: "/temoignages/focus-management.jpg", type: "logo" },
    chiffre: "Objectif prévisionnel dépassé",
  },
  {
    citation:
      "La croissance reposait surtout sur le réseau et le bouche-à-oreille. Nous avions besoin de structurer une vraie démarche commerciale B2B : clarifier notre offre et notre pitch, mettre en place une méthode de prospection régulière et mieux convertir nos rendez-vous. […] De la formation le matin et de la prospection en direct l’après-midi.",
    nom: "Renaud Durier",
    fonction: "Co-fondateur, Pégase Digital",
    visuel: { src: "/temoignages/pegase-digital.jpg", type: "logo" },
  },
];

/** Equipes commerciales et leurs managers. */
export const TEMOIGNAGES_EQUIPES: Temoignage[] = [
  {
    citation:
      "Formation de l’équipe aux méthodes de cold call pour gagner en performance, et organisation d’un challenge commercial pour mettre en mouvement l’équipe sur le sujet. Construction d’un playbook pour le cold call, et équipe formée et motivée pour accélérer notre acquisition.",
    nom: "Antonin Guy",
    fonction: "CEO, WeCount",
    visuel: { src: "/temoignages/wecount.png", type: "logo" },
    chiffre: "Un playbook de cold call",
  },
  {
    citation:
      "Nous avons sollicité Kwala dans le cadre du changement drastique de notre machine d’acquisition. Un défi sérieux pour nous, avec des résultats notables. D’autant plus complexe que nos équipes commerciales sont éclatées un peu partout en France. […] Des équipes formées, des process en lien avec notre cycle de vente gravés dans le marbre.",
    nom: "Florian Genisson",
    fonction: "Directeur commercial, Refectory",
    visuel: { src: "/temoignages/refectory.png", type: "logo" },
    chiffre: "Des équipes alignées dans toute la France",
  },
  {
    citation:
      "Kwala nous a accompagnés pour mieux performer en rendez-vous et en prospection. La formation sur 2 jours nous a permis de réaliser des ateliers complets et concrets couplés à une méthodologie théorique adaptée à notre marché. Résultats positifs pour nos équipes de vente qui sont ressorties soudées, challengées et engagées dans une stratégie de performance commune !",
    nom: "Océane Bouvard",
    fonction: "Partner Innovation, iii Financements",
    visuel: { src: "/temoignages/iii-financements.png", type: "logo" },
  },
  {
    citation:
      "Nous avons fait appel à Kwala pour nous accompagner sur toute l’approche de prospection et de structuration commerciale. Leur méthode agile est très concrète, orientée terrain et passage à l’action. […] Notre équipe commerciale est aujourd’hui plus structurée et plus performante dans son approche de prospection.",
    nom: "Zakari Hiouni",
    fonction: "Directeur, Kooreo",
    visuel: { src: "/temoignages/kooreo.jpg", type: "logo" },
  },
  {
    citation:
      "Nous souhaitions développer le marché BtoB, et avons fait appel à Kwala pour nous aider à former l’équipe commerciale à prospecter et entrer sur ce nouveau marché. Cela nous a permis de structurer les process en interne. […] Très vite, nous avons réussi à capter le marché de l’immobilier et signer de nouveaux contrats, qui n’auraient pas été signés sans une formation chez Kwala.",
    nom: "Hannah Peters",
    fonction: "Fondatrice et Dirigeante, Digi Atlas",
    visuel: { src: "/temoignages/digi-atlas.jpg", type: "logo" },
    chiffre: "Un nouveau marché capté",
  },
  {
    citation:
      "Kwala a organisé plusieurs ateliers de montée en compétence sur la prospection téléphonique pour notre réseau de consultants RH indépendants. Nous sommes ravis de leur accompagnement auprès d’une population novice et peu à l’aise avec l’exercice. Nos consultants disposent d’une méthodologie solide et parviennent à dépasser leurs freins et croyances limitantes.",
    nom: "Baptiste Renault",
    fonction: "Co-fondateur, La Ressource Humaine",
    visuel: { src: "/temoignages/la-ressource-humaine.jpg", type: "logo" },
  },
];

/** Organismes et entreprises qui ont commande une formation. */
export const TEMOIGNAGES_FORMATION: Temoignage[] = [
  {
    citation:
      "Nous avons fait appel à Kwala dans le cadre de nos programmes d’accompagnement au développement commercial, afin d’aider les créatrices d’entreprises à structurer leur plan d’action commercial, à poser les bases d’une prospection efficace et à mieux appréhender les entretiens avec leurs clients. Les retours de nos adhérentes sont très positifs. Les créatrices y voient plus clair sur les démarches à mettre en place pour conquérir de nouveaux clients.",
    nom: "Caroline Kampf",
    fonction: "Coordinatrice de programmes, Incubateur Les Premières AURA",
    visuel: { src: "/temoignages/les-premieres.jpg", type: "logo" },
  },
  {
    citation:
      "Nous collaborons avec Kwala depuis plus de deux ans. L’équipe accompagne les start-up de H7 dans le cadre d’ateliers et d’événements au cours desquels ils mettent à disposition des méthodes et des outils. Le taux de satisfaction des start-up qui bénéficient de cette expertise est excellent.",
    nom: "Julien Marbouty",
    fonction: "Responsable des programmes, H7",
    visuel: { src: "/temoignages/h7.jpg", type: "logo" },
    chiffre: "Plus de 2 ans de collaboration",
  },
  {
    citation:
      "Les start-up que j’accompagne et moi avons beaucoup aimé le cycle de 5 ateliers de la prospection au closing, très pertinent, intense et concret.",
    nom: "Alexandre Teston",
    fonction: "Responsable incubateur, CELSE",
    visuel: { src: "/temoignages/celse.png", type: "logo" },
    chiffre: "5 ateliers, de la prospection au closing",
  },
  {
    citation:
      "Nous avons travaillé avec l’équipe de Kwala à de nombreuses reprises pour animer des formations à la prospection pour nos consultants RH. Les formateurs avec qui nous avons travaillé ont toujours été très appréciés des équipes, avec des résultats très satisfaisants.",
    nom: "Dominique Gaudio",
    fonction: "Co-fondatrice, La Ressource Humaine",
    visuel: { src: "/temoignages/la-ressource-humaine.jpg", type: "logo" },
  },
  {
    citation:
      "Alexis est intervenu au sein du studio [d+] pour accompagner et coacher nos startups sur la partie business. L’objectif était clair : booster les ventes et leur donner les clés pour avancer seuls ensuite. Les 3 startups accompagnées ont vraiment bénéficié des conseils d’Alexis. Elles ont toutes évolué et amélioré leur méthode et leur stratégie commerciale.",
    nom: "Antoine Serouille",
    fonction: "Responsable Startup Studio, TeamWork Corporate",
    visuel: { src: "/temoignages/teamwork.jpg", type: "logo" },
  },
  {
    citation:
      "J’ai sollicité Kwala pour l’animation d’un atelier commercial au sein de mon espace de coworking. Nous sommes ressortis après l’atelier avec une vision plus claire des actions commerciales à mener et des pistes auxquelles réfléchir pour la suite.",
    nom: "Alexandre Touron",
    fonction: "Responsable de tiers-lieu, La Cordée",
    visuel: { src: "/temoignages/la-cordee.jpg", type: "logo" },
  },
];

/**
 * Selection pour l'accueil, qui s'adresse aux deux publics : trois
 * dirigeants et trois equipes, pour qu'un visiteur se reconnaisse quel que
 * soit son cas.
 */
export const TEMOIGNAGES_ACCUEIL: Temoignage[] = [
  TEMOIGNAGES_DIRIGEANTS[0],
  TEMOIGNAGES_EQUIPES[4],
  TEMOIGNAGES_DIRIGEANTS[1],
  TEMOIGNAGES_EQUIPES[1],
  TEMOIGNAGES_DIRIGEANTS[2],
  TEMOIGNAGES_EQUIPES[0],
];
