"use client";

import Image from "next/image";
import { useState } from "react";

type OfferKey = "dirigeants" | "equipes";

const OFFERS: Record<
  OfferKey,
  {
    tab: string;
    kicker: string;
    headingPrefix: string;
    headingHighlight: string;
    headingSuffix: string;
    bullets: string[];
    fineprint: string;
    photo: { src: string; alt: string };
    photoSide: "left" | "right";
  }
> = {
  dirigeants: {
    tab: "Pour les dirigeants",
    kicker: "Pour les dirigeants",
    headingPrefix: "Vous préférez un coaching gratuit ou un ",
    headingHighlight: "coaching qui paye",
    headingSuffix: " ?",
    bullets: [
      "Plus de rendez-vous qualifiés, un meilleur taux de transformation.",
      "La prospection maîtrisée, jusqu’au closing.",
      "Un coaching individuel, appliqué à vos vrais dossiers.",
      "Un chiffre d’affaire en hausse, dès le court terme.",
    ],
    fineprint:
      "Présentiel à Lyon • 6 à 12 mois • formation/action + coaching des managers",
    photo: {
      src: "/photos/offres-homme-telephone",
      alt: "Dirigeant en session de coaching commercial à distance",
    },
    photoSide: "right",
  },
  equipes: {
    tab: "Pour vos équipes",
    kicker: "Pour vos équipes",
    headingPrefix: "Les meilleurs commerciaux sont déjà ",
    headingHighlight: "chez vous",
    headingSuffix: ".",
    bullets: [
      "Tout l’équipe formée à une même méthode de vente.",
      "Des managers autonomes et rigoureux.",
      "Un suivi des performances, mois après mois.",
      "Une performance collective qui s’installe durablement.",
    ],
    fineprint:
      "Présentiel à Lyon • 6 à 12 mois • formation/action collective + coaching des managers",
    photo: {
      src: "/photos/offres-equipe",
      alt: "Équipe commerciale Kwala en pleine session de coaching",
    },
    // La maquette prevoit deux etats : photo a droite pour les dirigeants
    // (calque Figma 132:3620) et a gauche pour les equipes (132:5616).
    photoSide: "left",
  },
};

export function NosOffres() {
  const [active, setActive] = useState<OfferKey>("dirigeants");
  const offer = OFFERS[active];

  return (
    <section id="offres" className="w-full px-6 py-16 md:px-[30px] md:py-[60px]">
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

      <div className="relative mt-10">
        {/* Coins à 12px (rx=12 sur les deux calques SVG Figma — la piste
            blanche pleine largeur et la pastille active, toutes deux
            65px de haut) : pas une pilule "rounded-full", un arrondi
            modéré cohérent avec le reste du site. */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1349px] rounded-xl bg-white p-1 shadow-sm md:-mb-[35px]">
          <span
            aria-hidden
            className={`absolute inset-y-1 w-[calc(50%-4px)] rounded-xl bg-onyx transition-transform duration-300 ${
              active === "equipes" ? "translate-x-[calc(100%+8px)]" : "translate-x-0"
            }`}
          />
          {(Object.keys(OFFERS) as OfferKey[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`relative z-10 flex-1 rounded-xl px-6 py-4 font-asap text-lg font-bold italic transition-colors md:text-[25px] ${
                active === key ? "text-white" : "text-onyx"
              }`}
            >
              {OFFERS[key].tab}
            </button>
          ))}
        </div>

        {/* Carte à 18px (rx=18 sur le rectangle de fond Figma, 1381×631) */}
        <div className="relative overflow-hidden rounded-[18px] bg-wisteria">
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              backgroundImage: "url(/decor/motif-06-nos-offres.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className={`relative flex flex-col ${
              offer.photoSide === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Bord incurve, toujours du cote du texte : masques SVG repris
                des calques Figma "Photo" (132:3620 pour la photo a droite,
                528.754x631 ; 132:5616 pour la photo a gauche, 523.976x630.27
                — soit 38% de la carte de 1381 dans les deux cas). Appliques
                a partir de md, la maquette n'existant qu'en desktop. */}
            <div
              className={`relative aspect-[4/3] w-full md:aspect-auto md:min-h-[631px] md:w-[38%] ${
                offer.photoSide === "left"
                  ? "offres-photo-mask-gauche"
                  : "offres-photo-mask-droite"
              }`}
            >
              <Image
                src={`${offer.photo.src}@2x.webp`}
                alt={offer.photo.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative flex flex-1 flex-col px-6 py-10 md:justify-center md:px-[70px] md:py-[70px]">
              <p className="font-asap text-lg font-semibold italic text-white">
                {offer.kicker}
              </p>
              <h3 className="mt-3 font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
                {offer.headingPrefix}
                <span className="text-white">{offer.headingHighlight}</span>
                {offer.headingSuffix}
              </h3>
              <ul className="mt-6 space-y-3 font-dm-sans text-base leading-7 text-onyx md:text-[20px]">
                {offer.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="text-white">• </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-dm-sans text-sm font-bold text-white">
                {offer.fineprint}
              </p>
              <a
                href="#contact"
                className="mt-6 w-fit rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white"
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
