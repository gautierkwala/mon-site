import Image from "next/image";

export function AvantLumpur() {
  return (
    <section id="avant-lumpur" className="w-full bg-alabaster py-16 md:py-[107px]">
      {/* Fond : rectangle plein #8093F1, coins droits — vérifié directement
          sur le SVG source Figma ("M1440 0H0V800H1440V0Z", pas de rx) et sur
          le rendu 1:1 (bord bas parfaitement droit à y=906 sur toute la
          largeur). L'effet de "vague" en bas vient uniquement des formes
          Alabaster ci-dessous qui débordent du rectangle, pas d'une courbe
          sur le fond lui-même. */}
      {/* Plafonne a 1440 comme la page Figma : les decors de cette section
          sont positionnes en pourcentages du bloc (left-[20.49%], etc.).
          Laisser le bloc filer bord a bord sur un ecran large les
          disperserait, alors qu'ils sont cales sur un bloc de 1440. */}
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-wisteria py-16 md:min-h-[800px] md:py-[116px]">
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage: "url(/decor/motif-09-avant-lumpur.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Formes Alabaster (calque Figma "Mode_Isolation", -90deg) : position
            exacte depuis les valeurs Figma (left=calc(16.67%+37px)=277px,
            top=0 relatif à la section → -107px relatif à la carte 1440×800,
            soit -13.4%/19.24% ; taille 1026×1061 après rotation → 71.25%/
            132.6% de la carte). Desktop uniquement. */}
        <Image
          src="/decor/mode-isolation-lumpur.svg"
          alt=""
          width={1061}
          height={1026}
          aria-hidden="true"
          className="pointer-events-none absolute hidden -rotate-90 md:left-[19.24%] md:top-[-13.4%] md:block md:h-[132.6%] md:w-[71.25%]"
        />

        {/* Flèche : mesurée directement sur le rendu Figma 1:1 (les
            coordonnées brutes du calque, en cqw/hypot, ne donnaient pas une
            position exploitable une fois converties) — rotation 31.11deg
            de Figma confirmée par test visuel contre la référence. Position
            en % de la carte 1440×800 (20.49% / 62.75%, calque 4.31%×7.5%). */}
        <Image
          src="/decor/kwala-arrow-lumpur.svg"
          alt=""
          width={65}
          height={150}
          aria-hidden="true"
          className="pointer-events-none absolute hidden rotate-[31.11deg] md:left-[20.49%] md:top-[62.75%] md:block md:h-[7.5%] md:w-[4.31%]"
        />

        <div className="relative px-6 md:max-w-[1158px] md:px-[60px]">
          <h2 className="font-asap text-4xl font-bold italic leading-tight text-onyx md:text-[74px]">
            Avant Lumpur,
            <br />
            il y a <span className="text-white">Kwala</span>
          </h2>
          <p className="mt-8 max-w-2xl font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
            Vous souhaitez franchir un cap et atteindre les résultats
            auxquels vous aspirez ? Vous avez déjà testé différentes
            approches, mais il vous manque encore le déclic. Les
            rendez-vous ne génèrent pas les opportunités espérées, et vous
            ou vos équipes avez tendance à vous auto-négocier, sans
            valoriser pleinement votre expertise ni votre travail.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-alabaster"
          >
            Prendre RDV avec un coach
          </a>
        </div>
      </div>
    </section>
  );
}
