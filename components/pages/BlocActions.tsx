import Image from "next/image";

export type Volet = {
  /** Fondamentaux, entrainement, pilotage. */
  titre: string;
  actions: { titre: string; texte: string }[];
};

type Props = { titre: string; volets: Volet[] };

/**
 * Les actions de l'accompagnement, groupees en volets. Meme grille et meme
 * carte dust que BlocMethode, pour que les deux blocs se lisent comme une
 * suite et non comme deux systemes visuels differents.
 */
export function BlocActions({ titre, volets }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-alabaster px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="max-w-[820px] font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
        {titre}
      </h2>
      <Image
        src="/decor/kwala-line-01.webp"
        alt=""
        width={675}
        height={12}
        aria-hidden="true"
        className="mt-3 h-auto w-[180px]"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {volets.map((volet) => (
          <div key={volet.titre}>
            <h3 className="font-asap text-2xl font-bold italic leading-tight text-onyx md:text-[30px]">
              {volet.titre}
            </h3>
            <ul className="mt-5 space-y-5">
              {volet.actions.map((action) => (
                <li
                  key={action.titre}
                  className="rounded-xl bg-dust px-6 py-6"
                >
                  <p className="font-asap text-lg font-bold italic leading-tight text-onyx md:text-[20px]">
                    {action.titre}
                  </p>
                  <p className="mt-2 font-dm-sans text-base leading-7 text-onyx">
                    {action.texte}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
