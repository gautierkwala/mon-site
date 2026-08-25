import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-alabaster">
      {/* Desktop / tablette large — reproduction fidèle Figma (conteneur 1440px) */}
      <div className="relative mx-auto hidden w-full max-w-[1440px] lg:block lg:h-[1142px]">
        <div
          className="absolute left-[8.29%] top-[17.64%] h-[43.97%] w-[64.12%] mix-blend-soft-light"
          style={{
            backgroundImage: "url(/decor/motif-01-hero.webp)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute left-[19.41%] top-[45.32%] h-[33.01%] w-[18.72%]">
          <Image src="/decor/hero-ellipse-3.svg" alt="" fill priority={false} />
        </div>
        <div className="absolute left-[41.73%] top-[56.02%] h-[37.84%] w-[8.28%]">
          <Image src="/decor/hero-ellipse-2.svg" alt="" fill />
        </div>
        <div className="absolute left-[58.04%] top-[60.7%] flex h-[36.31%] w-[5.44%] items-center justify-center">
          <div className="relative h-full w-[16.44%] rotate-[-5.15deg]">
            <Image src="/decor/hero-ellipse-1.svg" alt="" fill />
          </div>
        </div>

        <div className="absolute left-[29.15%] top-[42.16%] flex h-[6.37%] w-[7.76%] items-center justify-center">
          <div className="relative h-[124px] w-[54px] rotate-[106.98deg]">
            <Image src="/decor/kwala-arrow-03.svg" alt="" fill />
          </div>
        </div>
        <div className="absolute left-[39%] top-[33%] h-[8.82%] w-[8.44%]">
          <Image src="/decor/kwala-circle-03.svg" alt="" fill />
        </div>

        <div className="absolute left-[-0.96%] top-[18.86%] h-[37.96%] w-[37.63%]">
          <div
            className="relative h-full w-full"
            style={{
              maskImage: "url(/decor/hero-photo-mask.svg)",
              maskSize: "77.87% 76.47%",
              maskPosition: "19.58% 23.58%",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url(/decor/hero-photo-mask.svg)",
              WebkitMaskSize: "77.87% 76.47%",
              WebkitMaskPosition: "19.58% 23.58%",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <Image
              src="/photos/hero-portrait@2x.webp"
              alt="Deux coachs Kwala échangent dans les bureaux de l'équipe"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <p className="absolute left-[45.16%] top-[28.29%] font-asap text-[11px] font-bold italic tracking-[0.11px] text-wisteria">
          Coaching commercial B2B • Lyon
        </p>

        <h1 className="absolute left-[37.76%] top-[29.5%] w-[31%] font-asap text-[67px] font-bold italic leading-none text-onyx">
          <span className="block">The place</span>
          <span className="block">to biz</span>
        </h1>

        <p className="absolute left-[37.78%] top-[44.29%] w-[31.5%] font-dm-sans text-[14px] leading-[20px] tracking-[0.14px] text-onyx">
          Kwala entraine dirigeants et commerciaux à générer plus
          d’opportunités et à closer – concrètement, sur le terrain.
        </p>

        <a
          href="#offres"
          className="absolute left-[64.94%] top-[50.61%] rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white"
        >
          Voir plus
        </a>
      </div>

      {/* Mobile / tablette — mise en page simplifiée (pas de maquette Figma dédiée) */}
      <div className="flex flex-col gap-6 px-6 py-12 text-center lg:hidden">
        <p className="font-asap text-sm font-bold italic tracking-[0.16px] text-wisteria">
          Coaching commercial B2B • Lyon
        </p>
        <p className="font-asap text-4xl font-bold italic leading-tight text-onyx sm:text-5xl">
          The place to biz
        </p>
        <p className="mx-auto max-w-md font-dm-sans text-base leading-7 text-onyx">
          Kwala entraine dirigeants et commerciaux à générer plus
          d’opportunités et à closer – concrètement, sur le terrain.
        </p>
        <a
          href="#offres"
          className="mx-auto rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white"
        >
          Voir plus
        </a>
        <div className="relative mx-auto mt-4 aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl">
          <Image
            src="/photos/hero-portrait@1x.webp"
            alt="Deux coachs Kwala échangent dans les bureaux de l'équipe"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
