type Props = { titre: string; texte: string; puces: string[] };

/**
 * Texte + liste a puces. Le style de liste est repris de 06-NosOffres :
 * puce coloree, corps en DM Sans 20px sur interligne 28.
 */
export function BlocPourquoi({ titre, texte, puces }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
        {titre}
      </h2>
      <p className="mt-6 max-w-[860px] font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
        {texte}
      </p>
      <ul className="mt-8 space-y-3 font-dm-sans text-base leading-7 text-onyx md:text-[20px]">
        {puces.map((puce) => (
          <li key={puce}>
            <span className="text-wisteria-text">• </span>
            {puce}
          </li>
        ))}
      </ul>
    </section>
  );
}
