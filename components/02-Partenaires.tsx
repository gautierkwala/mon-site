import Image from "next/image";

const PARTNERS = [
  { src: "/logos/h7.svg", alt: "H7", width: 50, height: 54 },
  { src: "/logos/reseau-entreprendre.png", alt: "Réseau Entreprendre", width: 98, height: 69 },
  { src: "/logos/la-french-tech.png", alt: "La French Tech", width: 62, height: 86 },
  { src: "/logos/lyon-start-up.png", alt: "Lyon Start Up", width: 134, height: 69, mixBlend: false },
  {
    src: "/logos/centre-entrepreneuriat-lyon-st-etienne.png",
    alt: "Centre d'Entrepreneuriat Lyon | Saint-Étienne — Université de Lyon",
    width: 220,
    height: 84,
  },
  { src: "/logos/lyve.jpeg", alt: "Lyve", width: 84, height: 84, mixBlend: true },
  { src: "/logos/les-premieres.png", alt: "Les Premières", width: 93, height: 93 },
  { src: "/logos/sisuu.png", alt: "SISUU Entrepreneurs Studio", width: 235, height: 84 },
  { src: "/logos/gango-coworking.svg", alt: "GANGO Club & Coworking", width: 170, height: 59 },
  { src: "/logos/cara.svg", alt: "CARA — European Cluster for Mobility Solutions", width: 168, height: 68 },
  { src: "/logos/le-local.svg", alt: "LeLocal", width: 87, height: 61 },
];

export function Partenaires() {
  return (
    <section id="partenaires" className="w-full overflow-hidden py-0">
      <h2 className="px-6 font-asap text-2xl italic text-onyx md:px-[120px]">
        Nos partenaires
      </h2>
      {/* Carrousel en boucle infinie : la liste est dupliquée une fois et la
          piste entière (200% de large) est translatée de -50%, soit
          exactement la largeur d'une copie — la boucle est donc invisible. */}
      <div className="mt-0 w-full [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-partners-scroll gap-[90px]">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              aria-hidden={i >= PARTNERS.length}
              className="flex shrink-0 items-center"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={partner.mixBlend ? "mix-blend-darken" : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
