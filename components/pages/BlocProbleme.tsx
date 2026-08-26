import Image from "next/image";

type Props = {
  titre: string;
  texte: string;
  /**
   * Decor du bloc, repris tel quel de l'accueil pour ne pas introduire un
   * vocabulaire visuel de plus : "petales" = colonne noire de la section 03,
   * "formes" = vague alabaster de la section 09. Un seul a la fois — les
   * empiler encombre le meme cote du bloc.
   */
  decor: "petales" | "formes";
};

/** Bloc contraste sur le modele de 09-AvantLumpur : aplat Wisteria, motif en
 *  surimpression, titre Asap Bold Italic et corps en onyx. Le decor deborde
 *  volontairement du bloc, qui le rogne. */
export function BlocProbleme({ titre, texte, decor }: Props) {
  return (
    <section className="w-full bg-alabaster px-6 py-8 md:px-[30px] md:py-[40px]">
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-xl bg-wisteria py-16 md:py-[96px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage: "url(/decor/motif-09-avant-lumpur.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {decor === "petales" ? (
          <Image
            src="/decor/mieux-closer-blobs.svg"
            alt=""
            width={332}
            height={624}
            aria-hidden="true"
            className="pointer-events-none absolute hidden md:left-[76%] md:top-[-10%] md:block md:h-[120%] md:w-[19%]"
          />
        ) : (
          <Image
            src="/decor/mode-isolation-lumpur.svg"
            alt=""
            width={1061}
            height={1026}
            aria-hidden="true"
            className="pointer-events-none absolute hidden -rotate-90 md:left-[62%] md:top-[-24%] md:block md:h-[150%] md:w-[46%]"
          />
        )}

        <div className="relative px-6 md:max-w-[1158px] md:px-[60px]">
          <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
            {titre}
          </h2>
          <p className="mt-8 font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
            {texte}
          </p>
        </div>
      </div>
    </section>
  );
}
