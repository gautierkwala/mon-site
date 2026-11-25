import Image from "next/image";
import Link from "next/link";

type OfferKey = "dirigeants" | "equipes";

const OFFERS: Record<
  OfferKey,
  {
    kicker: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    bullets: string[];
    fineprint: string;
    photo: { src: string; alt: string };
    photoSide: "left" | "right";
    /** Page dediee vers laquelle pointe le bouton de la carte. */
    page: string;
  }
> = {
  dirigeants: {
    kicker: "Pour les dirigeants",
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
    page: "/coaching-dirigeants-lyon",
  },
  equipes: {
    kicker: "Pour vos équipes",
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
    page: "/coaching-equipe-commerciale-lyon",
  },
};

type Offre = (typeof OFFERS)[OfferKey];

/**
 * Une carte d'offre, reprise telle quelle de la maquette Figma : aplat
 * wisteria, motif en surimpression, photo masquee d'un cote et texte de
 * l'autre. Seul le cote de la photo change d'une carte a l'autre, ce qui
 * donne le rythme quand elles s'enchainent.
 */
function CarteOffre({ offre }: { offre: Offre }) {
  return (
    <div className="relative overflow-hidden rounded-[18px] bg-wisteria">
      <div
        aria-hidden="true"
        className="absolute inset-0 mix-blend-soft-light"
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
          <p className="font-asap text-lg font-semibold italic text-white">
            {offre.kicker}
          </p>
          <h3 className="mt-3 font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
            {offre.headingPrefix}
            {/* La ponctuation finale suit la couleur du segment mis en avant :
                un "?" noir apres un groupe blanc detonait. */}
            <span className="text-white">
              {offre.headingHighlight}
              {offre.headingSuffix}
            </span>
          </h3>
          <ul className="mt-6 space-y-3 font-dm-sans text-base leading-7 text-onyx md:text-[20px]">
            {offre.bullets.map((bullet) => (
              <li key={bullet}>
                <span className="text-white">• </span>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-dm-sans text-sm font-bold text-white">
            {offre.fineprint}
          </p>
          <Link
            href={offre.page}
            className="mt-6 w-fit rounded-sm bg-onyx px-5 py-3 font-asap text-[16px] font-bold italic text-white transition-opacity hover:opacity-90"
          >
            Découvrir l’offre
          </Link>
        </div>
      </div>
    </div>
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
    <section
      id="offres"
      className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[30px] md:py-[60px]"
    >
      {/* Dans le Figma la carte est quasi pleine largeur (x=32, 1381 de large
          sur une page de 1440) tandis que le chapeau est indente a x=121.
          D'ou 30px de marge sur la section et 90px de plus sur le chapeau. */}
      <div className="md:px-[90px]">
        <p className="font-asap text-2xl italic text-onyx">Nos offres</p>
        <h2 className="mt-4 font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
          Pour <span className="text-wisteria-text">vous</span>. Pour{" "}
          <span className="text-wisteria-text">vos équipes</span>.
        </h2>
        <p className="mt-4 max-w-2xl font-dm-sans text-onyx">
          Un parcours en deux temps : d’abord les fondamentaux, puis la
          performance dans la durée.
        </p>
      </div>

      <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
        {(Object.keys(OFFERS) as OfferKey[]).map((cle) => (
          <CarteOffre key={cle} offre={OFFERS[cle]} />
        ))}
      </div>
    </section>
  );
}
