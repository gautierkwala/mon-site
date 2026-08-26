import Image from "next/image";

type Props = {
  titre: string;
  texte: string;
  puces: string[];
  photo: { src: string; alt: string };
};

/**
 * Texte + liste a puces, avec photo en vis-a-vis. Le style de liste est
 * repris de 06-NosOffres : puce coloree, corps en DM Sans 20px / 28.
 * Le trait sous le titre est le KwalaNew_line_01 du design system, sur le
 * meme principe que le trait sous "On coache toutes les cases" (section 05).
 */
export function BlocPourquoi({ titre, texte, puces, photo }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="lg:w-[56%]">
          <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
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
          <p className="mt-6 font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
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
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:w-[44%]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          {/* Forme alabaster en surimpression, comme sur la carte
              "Coaching en ligne" de l'accueil : elle mord sur un coin de la
              photo et casse le rectangle. */}
          <Image
            src="/decor/coaching-en-ligne-blob.svg"
            alt=""
            width={253}
            height={255}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[12%] -left-[10%] h-[58%] w-[42%]"
          />
        </div>
      </div>
    </section>
  );
}
