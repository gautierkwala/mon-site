import Image from "next/image";
import Link from "next/link";

type OfferKey = "dirigeants" | "equipes";

type Offre = {
  /** Public vise, en toutes lettres : c'est l'etiquette du bandeau. */
  public: string;
  /** La phrase qui permet au visiteur de se reconnaitre en une seconde. */
  pourQui: string;
  headingPrefix: string;
  headingHighlight: string;
  headingSuffix: string;
  bullets: string[];
  fineprint: string;
  photo: { src: string; alt: string };
  photoSide: "left" | "right";
  /** Les deux cartes n'ont pas la meme couleur : voir CarteOffre. */
  ton: "wisteria" | "onyx";
  /** Page dediee vers laquelle pointe le bouton de la carte. */
  page: string;
  libelleBouton: string;
};

const OFFERS: Record<OfferKey, Offre> = {
  dirigeants: {
    public: "Dirigeants et indépendants",
    pourQui: "Vous vendez vous-même, et vous êtes seul à le faire.",
    headingPrefix: "Pour apprendre à closer, ",
    headingHighlight: "apprenez à l’ouvrir",
    headingSuffix: ".",
    bullets: [
      "Une offre et un pitch clarifiés : quoi dire, à qui, et à quel prix.",
      "De la prospection en direct : des rendez-vous décrochés pendant les sessions.",
      "Des rodages chronométrés et vos rendez-vous réécoutés avec un coach.",
      "Un coaching individuel et un tableau de bord pour suivre les progrès.",
    ],
    fineprint:
      "Présentiel à Lyon et partout en France • 3 à 12 mois • formation-action",
    photo: {
      src: "/photos/offres-homme-telephone",
      alt: "Dirigeant en session de coaching commercial à distance",
    },
    photoSide: "right",
    ton: "wisteria",
    page: "/coaching-dirigeants-lyon",
    libelleBouton: "Découvrir le coaching dirigeants",
  },
  equipes: {
    public: "Équipes commerciales",
    pourQui:
      "Vous avez des commerciaux, et vous voulez qu’ils vendent mieux ensemble.",
    headingPrefix: "Les meilleurs commerciaux sont déjà ",
    headingHighlight: "chez vous",
    headingSuffix: ".",
    bullets: [
      "Toute l’équipe formée à une même méthode de vente.",
      "Un challenge de prospection ou de closing pour remettre l’équipe en mouvement.",
      "Des managers formés à coacher plutôt qu’à reporter.",
      "Les bons indicateurs, suivis chaque semaine.",
    ],
    fineprint:
      "Présentiel à Lyon et partout en France • 3 à 12 mois • formation-action collective + coaching des managers",
    photo: {
      src: "/photos/offres-equipe",
      alt: "Équipe commerciale Kwala en pleine session de coaching",
    },
    // La maquette prevoit deux etats : photo a droite pour les dirigeants
    // (calque Figma 132:3620) et a gauche pour les equipes (132:5616).
    photoSide: "left",
    ton: "onyx",
    page: "/coaching-equipe-commerciale-lyon",
    libelleBouton: "Découvrir le coaching d’équipe",
  },
};

/**
 * Les deux cartes n'ont pas la meme couleur.
 *
 * Empilees, deux aplats wisteria identiques se lisaient comme une seule
 * offre qui continue. Un aplat clair puis un aplat sombre separe nettement
 * les deux publics, et casse au passage l'alternance alabaster/blanc du
 * reste de la page.
 */
const TONS = {
  wisteria: {
    fond: "bg-wisteria",
    motif: "mix-blend-soft-light",
    badge: "bg-onyx text-white",
    pourQui: "text-white",
    titre: "text-onyx",
    accent: "text-white",
    corps: "text-onyx",
    puce: "text-white",
    fineprint: "text-white",
    bouton: "bg-onyx text-white",
  },
  onyx: {
    fond: "bg-onyx",
    // Le soft-light disparait sur un aplat sombre : le motif y passe en
    // surimpression simple, tres peu marquee.
    motif: "opacity-[0.14]",
    badge: "bg-wisteria text-onyx",
    pourQui: "text-wisteria",
    titre: "text-white",
    accent: "text-wisteria",
    corps: "text-dust",
    puce: "text-wisteria",
    fineprint: "text-wisteria",
    bouton: "bg-wisteria text-onyx",
  },
} as const;

/**
 * Une carte d'offre, reprise de la maquette Figma : grand aplat, motif en
 * surimpression, photo masquee d'un cote et texte de l'autre. Le cote de la
 * photo et la couleur de l'aplat changent d'une carte a l'autre, ce qui
 * donne le rythme quand elles s'enchainent.
 *
 * Le bandeau numerote en haut (« Offre 01 — Dirigeants ») et la ligne
 * « pour qui » juste dessous existent pour une seule raison : empilees, les
 * deux cartes doivent dire en une seconde a qui elles s'adressent, sans
 * qu'il faille lire le titre pour le deviner.
 */
function CarteOffre({ offre, numero }: { offre: Offre; numero: number }) {
  const t = TONS[offre.ton];

  return (
    <article className={`relative overflow-hidden rounded-[18px] ${t.fond}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${t.motif}`}
        style={{
          backgroundImage: "url(/decor/motif-06-nos-offres.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className={`relative flex flex-col ${
          offre.photoSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Bord incurve, toujours du cote du texte : masques SVG repris des
            calques Figma "Photo", soit 38% de la carte dans les deux cas.
            Appliques a partir de md, la maquette n'existant qu'en desktop. */}
        <div
          className={`relative aspect-[4/3] w-full md:aspect-auto md:min-h-[631px] md:w-[38%] ${
            offre.photoSide === "left"
              ? "offres-photo-mask-gauche"
              : "offres-photo-mask-droite"
          }`}
        >
          <Image
            src={`${offre.photo.src}@2x.webp`}
            alt={offre.photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 38vw"
            className="object-cover"
          />
        </div>

        <div className="relative flex flex-1 flex-col px-6 py-10 md:justify-center md:px-[70px] md:py-[70px]">
          <p
            className={`w-fit rounded-full px-4 py-1.5 font-asap text-[13px] font-bold uppercase tracking-[0.1em] ${t.badge}`}
          >
            Offre {String(numero).padStart(2, "0")} — {offre.public}
          </p>
          <p
            className={`mt-4 font-asap text-lg font-semibold italic md:text-[21px] ${t.pourQui}`}
          >
            {offre.pourQui}
          </p>

          <h3
            className={`mt-5 font-asap text-2xl font-bold italic leading-tight md:text-[30px] ${t.titre}`}
          >
            {offre.headingPrefix}
            {/* La ponctuation finale suit la couleur du segment mis en avant :
                un "?" noir apres un groupe blanc detonait. */}
            <span className={t.accent}>
              {offre.headingHighlight}
              {offre.headingSuffix}
            </span>
          </h3>

          <ul
            className={`mt-6 space-y-3 font-dm-sans text-base leading-7 md:text-[20px] ${t.corps}`}
          >
            {offre.bullets.map((bullet) => (
              <li key={bullet}>
                <span className={t.puce}>• </span>
                {bullet}
              </li>
            ))}
          </ul>

          <p className={`mt-6 font-dm-sans text-sm font-bold ${t.fineprint}`}>
            {offre.fineprint}
          </p>

          <Link
            href={offre.page}
            className={`mt-6 w-fit rounded-sm px-5 py-3 font-asap text-[16px] font-bold italic transition-opacity hover:opacity-90 ${t.bouton}`}
          >
            {offre.libelleBouton}
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * Les deux offres, l'une sous l'autre.
 *
 * Elles etaient auparavant derriere deux onglets, et seul l'onglet actif
 * etait rendu : l'offre equipes etait donc absente du HTML, invisible pour
 * Google comme pour les assistants, et sa page ne recevait aucun lien depuis
 * l'accueil. Les deux cartes sont desormais toujours la, ce qui supprime
 * aussi le clic necessaire pour decouvrir la seconde offre.
 */
export function NosOffres() {
  return (
    <section id="offres" className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:px-[30px] md:py-16">
      {/* Dans le Figma la carte est quasi pleine largeur (x=32, 1381 de large
          sur une page de 1440) tandis que le chapeau est indente a x=121.
          D'ou 30px de marge sur la section et 90px de plus sur le chapeau. */}
      <div className="md:px-[90px]">
        <p className="font-asap text-2xl italic text-onyx">Nos offres</p>
        <h2 className="mt-4 font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
          Deux offres, <span className="text-wisteria-text">deux publics</span>.
        </h2>
        <p className="mt-4 max-w-2xl font-dm-sans text-onyx">
          La première pour le dirigeant qui vend lui-même. La seconde pour
          l’équipe commerciale qu’il faut faire monter d’un cran.
        </p>
      </div>

      <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
        {(Object.keys(OFFERS) as OfferKey[]).map((cle, index) => (
          <CarteOffre key={cle} offre={OFFERS[cle]} numero={index + 1} />
        ))}
      </div>
      </div>
    </section>
  );
}
