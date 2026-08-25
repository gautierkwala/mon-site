export function MieuxCloser() {
  return (
    <section id="mieux-closer" className="w-full px-6 py-8 md:px-[30px] md:py-[14px]">
      <div className="relative overflow-hidden rounded-xl bg-wisteria px-6 py-12 md:min-h-[580px] md:px-[122px] md:py-[127px]">
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage: "url(/decor/motif-03-mieux-closer.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <img
          src="/decor/mieux-closer-blobs.svg"
          alt=""
          className="pointer-events-none absolute right-6 top-0 hidden h-[70%] w-auto opacity-90 md:right-[60px] md:block"
        />

        <div className="relative md:max-w-[30%]">
          <h2 className="font-asap text-3xl font-bold italic leading-tight text-white md:text-[43.6px]">
            Pour mieux closer, apprenez à l’<span className="text-onyx">ouvrir</span>
          </h2>
        </div>
        <p className="relative mt-6 font-dm-sans text-base leading-7 text-white md:mt-[60px] md:max-w-[51%] md:text-[20px] md:leading-[28px]">
          Les meilleurs commerciaux ne sont pas ceux qui parlent le plus. Ce
          sont ceux qui questionnent, confrontent et font réfléchir. Chez
          Kwala, nous vous apprenons à mener des rendez-vous de vente plus
          impactants, à traiter les objections avec confiance et à
          transformer les conversations commerciales en décisions. Parce
          qu’un bon closing ne commence pas au moment de signer. Il commence
          dès la première question.
        </p>
      </div>
    </section>
  );
}
