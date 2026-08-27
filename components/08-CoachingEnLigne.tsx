import Image from "next/image";

export function CoachingEnLigne() {
  return (
    <section
      id="coaching-en-ligne"
      className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-[30px] md:py-[14px]"
    >
      {/* Deux colonnes cote a cote, sans recouvrement. Le calque Figma
          superposait l'encart noir a la photo ; en dessous de 1440px l'encart
          passait en flux normal et couvrait la quasi-totalite de la carte,
          ne laissant de la photo qu'un liseré de visages flous. Le propos de
          la section est "en chair, en os et en salle" : les gens doivent se
          voir. */}
      <div className="overflow-hidden rounded-xl md:flex md:items-stretch">
        {/* Texte */}
        <div className="bg-onyx px-6 py-10 md:w-[52%] md:px-10 md:py-12 lg:px-14 lg:py-16">
          <h2 className="font-asap text-2xl font-bold italic leading-tight text-white min-[1440px]:text-[30px]">
            Nous aussi, on fait du coaching en ligne. Ligne A, Lyon métro{" "}
            <span className="text-wisteria">Hôtel de Ville</span>
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

        {/* Photo */}
        <div className="relative aspect-[4/3] w-full md:aspect-auto md:w-[48%]">
          <Image
            src="/photos/coaching-en-ligne-hotel-de-ville.webp"
            alt="Espace de coaching commercial en ligne Kwala"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
