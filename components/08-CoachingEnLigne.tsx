import Image from "next/image";

export function CoachingEnLigne() {
  return (
    <section id="coaching-en-ligne" className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-[30px] md:py-[14px]">
      {/* Le calque Figma (encart noir 1080×428 dans une carte 1380×683, texte
          calé pour tenir sur 2 lignes à cette largeur précise) ne tient
          qu'à 1440px : en dessous, le texte a besoin de plus de lignes que
          l'encart n'a de hauteur disponible, quel que soit le % choisi.
          Donc mise en page Figma exacte à partir de 1440px seulement ;
          en dessous, encart en flux normal (pas de maquette Figma pour
          mobile/tablette). */}
      <div className="relative overflow-hidden rounded-xl min-[1440px]:aspect-[1380/683]">
        <Image
          src="/photos/coaching-en-ligne-hotel-de-ville.webp"
          alt="Espace de coaching commercial en ligne Kwala"
          fill
          className="object-cover"
        />

        {/* Formes Alabaster (#EAE7E4, calque Figma "Mode_Isolation") : opaques,
            pas semi-transparentes — positions en % de la carte calculées
            depuis les coordonnées absolues Figma (carte à x=30/y=4270,
            Mode_Isolation à x=-218/y=4122 → décalage relatif -248px/-148px,
            soit -18%/-22% d'une carte 1380×683). */}
        <Image
          src="/decor/mode-isolation.svg"
          alt=""
          width={1152}
          height={1114}
          aria-hidden="true"
          className="pointer-events-none absolute hidden min-[1440px]:left-[-18%] min-[1440px]:top-[-22%] min-[1440px]:block min-[1440px]:h-[163%] min-[1440px]:w-[83.5%]"
        />
        <Image
          src="/decor/coaching-en-ligne-blob.svg"
          alt=""
          width={253}
          height={255}
          aria-hidden="true"
          className="pointer-events-none absolute hidden min-[1440px]:left-[43.5%] min-[1440px]:top-[76%] min-[1440px]:block min-[1440px]:h-[37.3%] min-[1440px]:w-[18.3%]"
        />

        {/* Encart noir opaque (#12130F) : remplace le filtre sombre qui
            assombrissait toute la photo. En dessous de 1440px, bloc en
            flux normal pleine largeur ; à 1440px, position/taille exactes
            du calque Figma "Vector" (1080×428 natif, visible sur 718×428
            une fois clippé au bord de page). */}
        <div className="relative m-4 rounded-xl bg-onyx px-6 py-8 min-[1440px]:absolute min-[1440px]:left-[-2%] min-[1440px]:top-[16.25%] min-[1440px]:m-0 min-[1440px]:w-[52%] min-[1440px]:px-10 min-[1440px]:py-10">
          <h2 className="font-asap text-2xl font-bold italic leading-tight text-white min-[1440px]:text-[30px]">
            Nous aussi, on fait du coaching en ligne. Ligne A, Lyon métro{" "}
            <span className="text-wisteria-text">Hôtel de Ville</span>
          </h2>
          <p className="mt-6 font-dm-sans text-base font-medium leading-7 text-white min-[1440px]:text-[20px] min-[1440px]:leading-[28px]">
            Un écran, ça ne corrige pas une posture. Ça ne dit pas si vous
            parlez trop vite, si vous perdez votre prospect au bout de trente
            secondes, si vous baissez les yeux au moment de parler prix. Chez
            Kwala, le coaching se fait en chair, en os et en salle. Des
            coachs, des entrepreneurs autour de la table, et un lieu dédié à
            une seule chose : vous faire progresser.
          </p>
        </div>
      </div>
    </section>
  );
}
