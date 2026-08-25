import Image from "next/image";

export function CoachingEnLigne() {
  return (
    <section id="coaching-en-ligne" className="w-full px-6 py-8 md:px-[30px] md:py-[14px]">
      <div className="relative overflow-hidden rounded-xl md:min-h-[683px]">
        <Image
          src="/photos/section-08-bureau@2x.webp"
          alt="Bureaux Kwala, ambiance feutrée avec suspensions lumineuses"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-onyx/60" />

        <Image
          src="/decor/mode-isolation.svg"
          alt=""
          width={1152}
          height={1114}
          className="pointer-events-none absolute -left-[260px] top-1/2 hidden w-[550px] -translate-y-1/2 opacity-80 md:block"
        />
        <Image
          src="/decor/coaching-en-ligne-blob.svg"
          alt=""
          width={253}
          height={255}
          className="pointer-events-none absolute bottom-[40px] right-[10%] hidden w-[180px] opacity-30 md:block"
        />

        <div className="relative px-6 py-10 md:max-w-[560px] md:px-[30px] md:py-[180px]">
          <h2 className="font-asap text-2xl font-bold italic leading-tight text-white md:text-[30px]">
            Nous aussi, on fait du coaching en ligne. Ligne A, Lyon métro{" "}
            <span className="text-wisteria">Hôtel de Ville</span>
          </h2>
          <p className="mt-6 font-dm-sans text-base leading-7 text-white md:text-[20px] md:leading-[28px]">
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
