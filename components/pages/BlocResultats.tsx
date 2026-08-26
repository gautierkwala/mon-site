import Script from "next/script";

type Props = { titre: string; stats: string[] };

/**
 * Trois chiffres cles puis le widget Trustfolio — meme snippet et meme
 * strategie de chargement que 07-Resultats sur l'accueil (lazyOnload : le
 * script fait 1,9 Mo et ne doit jamais concurrencer le LCP).
 */
export function BlocResultats({ titre, stats }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-alabaster px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
        {titre}
      </h2>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <li
            key={stat}
            className="rounded-xl bg-dust px-6 py-8 font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]"
          >
            {stat}
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <a
          className="trustfolio-widget"
          data-config-id="dBOT4lIRnc2"
          data-mode="default"
          data-lazyload="true"
          data-initial-height="500"
          target="_blank"
          rel="noopener noreferrer"
          href="https://trustfolio.co/profil/kwala-sdJEBF2Ciw1"
        >
          Découvrez les témoignages de nos clients
        </a>
      </div>

      <Script
        src="https://share.trustfolio.co/scripts/embed-v2.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
