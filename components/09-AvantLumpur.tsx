export function AvantLumpur() {
  return (
    <section id="avant-lumpur" className="w-full bg-alabaster py-16 md:py-[107px]">
      <div className="relative w-full overflow-hidden bg-wisteria py-16 md:min-h-[800px] md:py-[116px]">
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage: "url(/decor/motif-09-avant-lumpur.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative px-6 md:max-w-[1158px] md:px-[60px]">
          <h2 className="font-asap text-4xl font-bold italic leading-tight text-onyx md:text-[74px]">
            Avant Lumpur,
            <br />
            il y a <span className="text-white">Kwala</span>
          </h2>
          <p className="mt-8 max-w-2xl font-dm-sans text-base leading-7 text-onyx md:text-[20px] md:leading-[28px]">
            Vous souhaitez franchir un cap et atteindre les résultats
            auxquels vous aspirez ? Vous avez déjà testé différentes
            approches, mais il vous manque encore le déclic. Les
            rendez-vous ne génèrent pas les opportunités espérées, et vous
            ou vos équipes avez tendance à vous auto-négocier, sans
            valoriser pleinement votre expertise ni votre travail.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-alabaster"
          >
            Prendre RDV avec un coach
          </a>
        </div>
      </div>
    </section>
  );
}
