import Image from "next/image";

const TAGS = [
  "Prospection",
  "Challenger en rendez-vous",
  "Négociations et Closing",
  "Recrutement",
  "Mental & confiance",
  "Écoute d’audio post RDV",
  "Sessions de prospection",
  "Coaching individuel",
  "Coaching collectif",
  "Suivi des performances",
];

export function OnCoacheToutesLesCases() {
  return (
    <section
      id="on-coache"
      className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-alabaster md:min-h-[780px]"
    >
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url(/decor/motif-05-on-coache.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden md:absolute md:left-0 md:top-0 md:aspect-auto md:h-full md:w-[569px]">
        <Image
          src="/photos/section-05-salle@2x.webp"
          alt="Session de coaching commercial collectif chez Kwala"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative px-6 pt-10 md:absolute md:left-[634px] md:top-[74px] md:w-[420px] md:px-0 md:pt-0">
        <div className="relative">
          <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
            On coache
            <br />
            toutes les cases :
          </h2>
          <Image
            src="/decor/kwala-line-02.svg"
            alt=""
            width={184}
            height={8}
            className="mt-2 h-auto w-[140px] md:w-[184px]"
          />
        </div>
      </div>

      <div className="relative px-6 py-10 md:absolute md:left-[634px] md:top-[237px] md:w-[780px] md:px-0 md:py-0">
        <div className="flex flex-wrap gap-x-[15px] gap-y-[15px]">
          {TAGS.map((tag) => (
            <span
              key={tag}
              // État survolé = état actif du Figma (node 132:4135, variable
              // "wisteria-blue-(main)" = #8093f1 en fond ET en bordure) :
              // le tag passe en aplat Wisteria, texte blanc. En Tailwind v4
              // le variant `hover:` est déjà encapsulé dans
              // `@media (hover: hover)`, donc l'état ne reste pas collé
              // après un tap sur mobile.
              className={`rounded-lg border px-[18px] py-[6px] font-asap text-base transition-colors duration-150 hover:border-wisteria hover:bg-wisteria hover:text-white md:text-[19px] ${
                tag === "Coaching collectif"
                  ? "border-wisteria bg-wisteria text-white"
                  : "border-onyx bg-dust text-onyx"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
