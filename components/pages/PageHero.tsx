import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  surtitre: string;
  /** ReactNode pour permettre d'entourer un mot du cercle dessine. */
  titre: ReactNode;
  sousTitre: string;
  cta: { libelle: string; href: string };
  photo: { src: string; alt: string };
};

/**
 * En-tete des pages dediees. Reprend le langage visuel du hero d'accueil
 * (fond alabaster, motif de points en mix-blend-soft-light, titre Asap Bold
 * Italic, bouton onyx, photo en colonne droite) sans en copier la geometrie,
 * calee sur un calque Figma precis avec masque organique.
 */
export function PageHero({ surtitre, titre, sousTitre, cta, photo }: Props) {
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

      <div className="relative flex flex-col gap-10 px-6 py-16 md:px-[120px] md:py-[80px] lg:flex-row lg:items-center lg:gap-16">
        <div className="lg:w-[54%]">
          <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
            {surtitre}
          </p>
          <h1 className="mt-5 font-asap text-4xl font-bold italic leading-[1.05] text-onyx md:text-[48px]">
            {titre}
          </h1>
          <p className="mt-6 font-dm-sans text-[20px] leading-7 tracking-[0.2px] text-onyx">
            {sousTitre}
          </p>
          <Link
            href={cta.href}
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            {cta.libelle}
          </Link>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:w-[46%]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
