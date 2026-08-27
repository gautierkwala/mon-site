import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-x-hidden overflow-y-visible bg-alabaster">
      {/* Hauteur plafonnée en dur + overflow-hidden : tout ce qui dépasse
          (blobs, flèche, photo) est ROGNÉ net à ce bord, plutôt que de
          repousser "Nos partenaires" hors du premier écran à 1440×860. */}
      <div className="relative mx-auto w-full max-w-[1440px] lg:max-h-[586px] lg:overflow-hidden">
        {/* Decorative layer: dot-pattern texture + 3 grey blobs. Purely visual —
            hidden on mobile where there is no matching Figma frame to reproduce. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 hidden lg:block lg:h-[950px]"
        >
          <div
            className="absolute left-[8.29%] top-[17.64%] h-[43.97%] w-[64.12%] mix-blend-soft-light"
            style={{
              backgroundImage: "url(/decor/motif-01-hero.webp)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute left-[19.41%] top-[45.32%] h-[33.01%] w-[18.72%]">
            <Image src="/decor/hero-ellipse-3.svg" alt="" fill />
          </div>
          <div className="absolute left-[41.73%] top-[56.02%] h-[37.84%] w-[8.28%]">
            <Image src="/decor/hero-ellipse-2.svg" alt="" fill />
          </div>
          <div className="absolute left-[58.04%] top-[60.7%] flex h-[36.31%] w-[5.44%] items-center justify-center">
            <div className="relative h-full w-[16.44%] rotate-[-5.15deg]">
              <Image src="/decor/hero-ellipse-1.svg" alt="" fill />
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-10 py-16 lg:flex-row lg:items-start lg:gap-16 lg:py-0">
          {/* Colonne texte (gauche) : largeur fixe de 653px (mesure exacte du
              conteneur de texte Figma) + la marge gauche de 120px (≈8.29% de
              1440, alignée sur le repère du fond à motif) — pas un % de la
              largeur de la ligne, sinon le texte revient à la ligne en trop. */}
          <div className="w-full px-6 lg:w-auto lg:shrink-0 lg:basis-[773px] lg:pl-[120px] lg:pr-0">
            <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
              Coaching commercial B2B • Lyon
            </p>

            <h1 className="mt-4 font-asap text-[56px] font-bold italic leading-[0.95] text-onyx sm:text-[72px] lg:text-[96px]">
              The place
              <br />
              to{" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10">biz</span>
                <Image
                  src="/decor/kwala-circle-03.svg"
                  alt=""
                  width={177}
                  height={147}
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-2 -inset-y-3 -z-0 h-[calc(100%+1.5rem)] w-[calc(100%+1rem)]"
                />
              </span>
            </h1>

            <p className="mt-6 max-w-[653px] font-dm-sans text-[20px] leading-7 tracking-[0.2px] text-onyx">
              Kwala entraine dirigeants et commerciaux à générer plus
              d’opportunités et à closer, concrètement, sur le terrain.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Discuter avec un coach
            </a>
          </div>

          {/* Colonne photo (droite) : remplit tout l'espace restant de la ligne
              (pas de largeur figée) et vient jusqu'au bord droit de la section
              — dans Figma la photo va jusqu'au bord du frame, sans marge. */}
          <div className="relative w-full px-6 lg:w-auto lg:flex-1 lg:px-0">
                        {/* Photo déjà découpée + masquée côté Figma (export du calque "Photo",
                alpha transparent hors de la forme) : évite de ré-implémenter le
                crop en CSS, dont le mask-position/mask-size ne reproduisait pas
                le cadrage réel (le fill Figma applique son propre recadrage
                interne, non exposé par l'export du bitmap brut). */}
            <div className="relative ml-auto aspect-[1966/1909] w-full max-w-[480px] lg:max-w-[595px]">
              <Image
                src="/photos/hero-photo-leaf.webp"
                alt="Coach commercial Kwala à Lyon"
                fill
                priority
                sizes="(min-width: 1024px) 780px, (min-width: 640px) 480px, 90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
