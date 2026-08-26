import Link from "next/link";

type Props = {
  surtitre: string;
  titre: string;
  sousTitre: string;
  cta: { libelle: string; href: string };
};

/**
 * En-tete des pages dediees. Reprend le langage visuel du hero d'accueil
 * (fond alabaster, motif de points en mix-blend-soft-light, titre Asap Bold
 * Italic, bouton onyx) sans en copier la geometrie, qui est calee sur un
 * calque Figma precis avec photo et blobs — inexistant ici.
 */
export function PageHero({ surtitre, titre, sousTitre, cta }: Props) {
  return (
    <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-alabaster">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage: "url(/decor/motif-01-hero.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative px-6 py-16 md:px-[120px] md:py-[100px]">
        <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
          {surtitre}
        </p>
        <h1 className="mt-5 max-w-[900px] font-asap text-4xl font-bold italic leading-[1.05] text-onyx md:text-[56px]">
          {titre}
        </h1>
        <p className="mt-6 max-w-[653px] font-dm-sans text-[20px] leading-7 tracking-[0.2px] text-onyx">
          {sousTitre}
        </p>
        <Link
          href={cta.href}
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {cta.libelle}
        </Link>
      </div>
    </section>
  );
}
