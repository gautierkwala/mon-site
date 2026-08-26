type Props = { titre: string; texte: string };

/**
 * Bloc contraste, sur le modele de 09-AvantLumpur : aplat Wisteria plafonne
 * a 1440, motif en surimpression, titre Asap Bold Italic et corps en onyx.
 */
export function BlocProbleme({ titre, texte }: Props) {
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
