import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-alabaster">
      {/* Decorative layer: dot-pattern texture + 3 grey blobs. Purely visual —
          absolute over the whole section, never affects flow, hidden on mobile
          where there is no matching Figma frame to reproduce. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
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

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        {/* Colonne texte (gauche) */}
        <div className="w-full lg:w-[45%]">
          <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria">
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

          <p className="mt-6 max-w-md font-dm-sans text-[20px] leading-7 tracking-[0.2px] text-onyx">
            Kwala entraine dirigeants et commerciaux à générer plus
            d’opportunités et à closer – concrètement, sur le terrain.
          </p>

          <a
            href="#offres"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Voir plus
          </a>
        </div>

        {/* Colonne photo (droite) */}
        <div className="relative w-full lg:w-[55%]">
          {/* Flèche : décoration liée à la photo, pointe vers elle depuis l'espace texte/photo */}
          <Image
            src="/decor/kwala-arrow-03.svg"
            alt=""
            width={65}
            height={150}
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 bottom-[10%] z-20 hidden h-28 w-auto rotate-180 lg:block"
          />

          <div
            className="relative mx-auto aspect-[780/624] w-full max-w-[480px] lg:max-w-[640px] [mask-position:19.58%_23.58%] [mask-repeat:no-repeat] [mask-size:77.87%_76.47%]"
            style={{
              maskImage: "url(/decor/hero-photo-mask.svg)",
              WebkitMaskImage: "url(/decor/hero-photo-mask.svg)",
            }}
          >
            <Image
              src="/photos/hero-portrait@2x.webp"
              alt="Deux coachs Kwala échangent dans les bureaux de l’équipe"
              fill
              priority
              sizes="(min-width: 1024px) 640px, (min-width: 640px) 480px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
