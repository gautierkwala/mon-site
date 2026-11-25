/**
 * Les avis clients, en dur, avec le visage de la personne qui parle.
 *
 * Le widget Trustfolio rendait ses avis dans une iframe servie par
 * share.trustfolio.co : leur contenu est cross-origin, donc invisible pour
 * Google comme pour les assistants. Il defilait en plus trop vite pour etre
 * lu. Les reprendre ici en texte les rend lisibles par les deux.
 *
 * Un logo d'entreprise ne porte pas de recommandation : c'est une personne
 * qui recommande. Chaque avis affiche donc le portrait de son auteur, repris
 * de son profil Trustfolio — la meme photo que le widget montrait deja sur
 * kwala.fr. Les clients dont l'avis Trustfolio n'a pas de portrait ne
 * figurent pas ici, faute de visage a montrer.
 *
 * Tous les textes sont repris mot pour mot du profil Trustfolio, a deux
 * exceptions pres : les coupes sont signalees par des crochets, et quelques
 * fautes de frappe evidentes ont ete corrigees (accords, pluriels).
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
  /** Portrait carre 240x240, dans /public/temoignages/portraits. */
  photo: string;
  /** Resultat chiffre, quand l'avis en donne un. Mis en avant sur la carte. */
  chiffre?: string;
};

export const PROFIL_TRUSTFOLIO = "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1";
export const NOTE_TRUSTFOLIO = "5/5";

const P = "/temoignages/portraits";

/** Dirigeants et entrepreneurs qui portent eux-memes le developpement. */
export const TEMOIGNAGES_DIRIGEANTS: Temoignage[] = [
  {
    citation:
      "J’étais seule dans l’entreprise et un peu démunie sur le ciblage et la méthode commerciale plus largement. Gautier m’a formée, boostée et encouragée. Au-delà de la méthode, c’est aussi et surtout l’état d’esprit du commercial que j’ai découvert. […] Bref, de passer d’une logique de consultante indépendante à celle de cheffe d’entreprise.",
    nom: "Axelle Sorret",
    fonction: "Fondatrice & Dirigeante, TRINITY",
    photo: `${P}/axelle-sorret.webp`,
    chiffre: "De consultante à cheffe d’entreprise",
  },
  {
    citation:
      "Les principaux freins portent sur les objectifs, le discours, la posture et la mise en action. Nous avons pu travailler tout le processus de vente, de la prospection au closing. La méthode Kwala permet d’adopter une posture et un discours avec des résultats concrets et surtout rapides. En quelques mois, la stratégie est établie, le discours est clair, les signatures tombent.",
    nom: "Adrien Crespinée",
    fonction: "Directeur commercial, OOrion",
    photo: `${P}/adrien-crespinee.webp`,
    chiffre: "En quelques mois, les signatures tombent",
  },
  {
    citation:
      "J’ai suivi un coaching commercial avec Kwala pendant six mois. Ce que j’en retiens, c’est le côté très concret : on s’entraîne, on pratique sur ses propres rendez-vous, et la théorie n’arrive que quand elle sert à quelque chose. Des situations bloquées depuis longtemps ont fini par se débloquer. […] L’impact s’est vu sur le chiffre d’affaires.",
    nom: "Simon Dechaud",
    fonction: "CEO, Silex Club",
    photo: `${P}/simon-dechaud.webp`,
    chiffre: "6 mois, un impact sur le CA",
  },
  {
    citation:
      "Chez Pégase Digital, la croissance reposait surtout sur le réseau et le bouche-à-oreille. Nous avions besoin de structurer une vraie démarche commerciale B2B : clarifier notre offre et notre pitch, mettre en place une méthode de prospection régulière et mieux convertir nos rendez-vous. […] De la formation le matin et de la prospection en direct l’après-midi.",
    nom: "Renaud Durier",
    fonction: "Co-fondateur, Pégase Digital",
    photo: `${P}/renaud-durier.webp`,
  },
  {
    citation:
      "Nous souhaitions développer le marché BtoB, et avons fait appel à Kwala pour nous aider à former l’équipe commerciale à prospecter et entrer sur ce nouveau marché. Cela nous a permis de structurer les process en interne. […] Très vite, nous avons réussi à capter le marché de l’immobilier et signer de nouveaux contrats, qui n’auraient pas été signés sans une formation chez Kwala.",
    nom: "Hannah Peters",
    fonction: "Fondatrice & Dirigeante, Digi Atlas",
    photo: `${P}/hannah-peters.webp`,
    chiffre: "Un nouveau marché capté",
  },
  {
    citation:
      "En tant qu’indépendante, Kwala m’a aidée à passer à l’action en donnant une méthode concrète pour la prospection téléphonique et en accompagnant la mise en pratique avec beaucoup de clarté et de bienveillance. Mise en pratique et résultats rapides.",
    nom: "Lucile Brisedoux",
    fonction: "RRH externalisée, La Ressource Humaine",
    photo: `${P}/lucile-brisedoux.webp`,
  },
];

/** Equipes commerciales et leurs managers. */
export const TEMOIGNAGES_EQUIPES: Temoignage[] = [
  {
    citation:
      "Formation de l’équipe aux méthodes de cold call pour gagner en performance, et organisation d’un challenge commercial pour mettre en mouvement l’équipe sur le sujet. Construction d’un playbook pour le cold call, et équipe formée et motivée pour accélérer notre acquisition.",
    nom: "Antonin Guy",
    fonction: "CEO, WeCount",
    photo: `${P}/antonin-guy.webp`,
    chiffre: "Un playbook de cold call",
  },
  {
    citation:
      "Nous avions déjà quelques clients, mais avions du mal à identifier nos forces et répliquer les ventes. Nous avons fait appel à Kwala afin d’apprendre à vendre et avoir de meilleurs taux de conversion à chaque étape de la vente. Nous avons clairement amélioré nos taux de conversion et avons appris à vendre de manière beaucoup plus efficace et structurée.",
    nom: "Romain Saint-Jean",
    fonction: "Founder & CEO, Bacastages",
    photo: `${P}/romain-saint-jean.webp`,
    chiffre: "Des taux de conversion en hausse",
  },
  {
    citation:
      "Nous avons fait appel à Kwala pour nous accompagner sur toute l’approche de prospection et de structuration commerciale. Leur méthode agile est très concrète, orientée terrain et passage à l’action. […] Notre équipe commerciale est aujourd’hui plus structurée et plus performante dans son approche de prospection.",
    nom: "Zakari Hiouni",
    fonction: "Directeur, Kooreo",
    photo: `${P}/zakari-hiouni.webp`,
    chiffre: "Une équipe plus structurée",
  },
  {
    citation:
      "Kwala nous a accompagnés pour mieux performer en rendez-vous et en prospection. La formation sur 2 jours nous a permis de réaliser des ateliers complets et concrets couplés à une méthodologie théorique adaptée à notre marché. Résultats positifs pour nos équipes de vente qui sont ressorties soudées, challengées et engagées dans une stratégie de performance commune !",
    nom: "Océane Bouvard",
    fonction: "Partner Innovation, iii Financements",
    photo: `${P}/oceane-bouvard.webp`,
    chiffre: "Des équipes soudées et challengées",
  },
  {
    citation:
      "Nous avons fait appel à Gautier et son équipe chez Kwala pour nous accompagner dans le développement d’une des branches de notre activité. Leur accompagnement et leur méthode nous ont aidés à structurer notre approche commerciale, clarifier notre positionnement et développer cette nouvelle activité. […] Cela a apporté une vraie montée en confiance et une meilleure vision des opportunités de développement.",
    nom: "Benjamin Blanc",
    fonction: "Business manager, VSS Groupe",
    photo: `${P}/benjamin-blanc.webp`,
  },
  {
    citation:
      "Kwala a organisé plusieurs ateliers de montée en compétence sur la prospection téléphonique pour notre réseau de consultants RH indépendants. Nous sommes ravis de leur accompagnement auprès d’une population novice et peu à l’aise avec l’exercice. Nos consultants disposent d’une méthodologie solide et parviennent à dépasser leurs freins et croyances limitantes.",
    nom: "Baptiste Renault",
    fonction: "Co-fondateur, La Ressource Humaine",
    photo: `${P}/baptiste-renault.webp`,
  },
];

/** Entreprises et structures qui ont commande une formation pour leurs equipes. */
export const TEMOIGNAGES_FORMATION: Temoignage[] = [
  {
    citation:
      "Kwala nous a accompagnés pour mieux performer en rendez-vous et en prospection. La formation sur 2 jours nous a permis de réaliser des ateliers complets et concrets couplés à une méthodologie théorique adaptée à notre marché. Résultats positifs pour nos équipes de vente qui sont ressorties soudées, challengées et engagées dans une stratégie de performance commune !",
    nom: "Océane Bouvard",
    fonction: "Partner Innovation, iii Financements",
    photo: `${P}/oceane-bouvard.webp`,
    chiffre: "2 jours de formation",
  },
  {
    citation:
      "Nous souhaitions développer le marché BtoB, et avons fait appel à Kwala pour nous aider à former l’équipe commerciale à prospecter et entrer sur ce nouveau marché. Cela nous a permis de structurer les process en interne. […] Très vite, nous avons réussi à capter le marché de l’immobilier et signer de nouveaux contrats, qui n’auraient pas été signés sans une formation chez Kwala.",
    nom: "Hannah Peters",
    fonction: "Fondatrice & Dirigeante, Digi Atlas",
    photo: `${P}/hannah-peters.webp`,
    chiffre: "Un nouveau marché capté",
  },
  {
    citation:
      "Nous avons travaillé avec l’équipe de Kwala à de nombreuses reprises pour animer des formations à la prospection pour nos consultants RH. Les formateurs avec qui nous avons travaillé ont toujours été très appréciés des équipes, avec des résultats très satisfaisants.",
    nom: "Dominique Gaudio",
    fonction: "Co-fondatrice, La Ressource Humaine",
    photo: `${P}/dominique-gaudio.webp`,
  },
  {
    citation:
      "Nous avons fait appel à Gautier et son équipe chez Kwala pour nous accompagner dans le développement d’une des branches de notre activité. Leur accompagnement et leur méthode nous ont aidés à structurer notre approche commerciale, clarifier notre positionnement et développer cette nouvelle activité. […] Cela a apporté une vraie montée en confiance et une meilleure vision des opportunités de développement.",
    nom: "Benjamin Blanc",
    fonction: "Business manager, VSS Groupe",
    photo: `${P}/benjamin-blanc.webp`,
  },
  {
    citation:
      "Formation de l’équipe aux méthodes de cold call pour gagner en performance, et organisation d’un challenge commercial pour mettre en mouvement l’équipe sur le sujet. Construction d’un playbook pour le cold call, et équipe formée et motivée pour accélérer notre acquisition.",
    nom: "Antonin Guy",
    fonction: "CEO, WeCount",
    photo: `${P}/antonin-guy.webp`,
    chiffre: "Un playbook de cold call",
  },
  {
    citation:
      "Les start-ups que j’accompagne et moi avons beaucoup aimé le cycle de 5 ateliers, de la prospection au closing : très pertinent, intense et concret.",
    nom: "Alexandre Teston",
    fonction: "Responsable incubateur, CELSE",
    photo: `${P}/alexandre-teston.webp`,
    chiffre: "5 ateliers, de la prospection au closing",
  },
];

/**
 * Selection pour l'accueil, qui s'adresse aux deux publics : trois
 * dirigeants et trois equipes, pour qu'un visiteur se reconnaisse quel que
 * soit son cas.
 */
export const TEMOIGNAGES_ACCUEIL: Temoignage[] = [
  TEMOIGNAGES_DIRIGEANTS[0],
  TEMOIGNAGES_EQUIPES[0],
  TEMOIGNAGES_DIRIGEANTS[1],
  TEMOIGNAGES_EQUIPES[1],
  TEMOIGNAGES_DIRIGEANTS[2],
  TEMOIGNAGES_EQUIPES[2],
];

/**
 * Les visages affiches en preuve dans le hero, avant meme de defiler.
 * Six portraits suffisent : au-dela, la rangee deborde sur mobile.
 */
export const VISAGES_HERO: { photo: string; nom: string }[] = [
  TEMOIGNAGES_DIRIGEANTS[0],
  TEMOIGNAGES_EQUIPES[0],
  TEMOIGNAGES_DIRIGEANTS[2],
  TEMOIGNAGES_EQUIPES[1],
  TEMOIGNAGES_DIRIGEANTS[4],
  TEMOIGNAGES_EQUIPES[3],
].map(({ photo, nom }) => ({ photo, nom }));
