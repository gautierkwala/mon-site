import Script from "next/script";

export function Resultats() {
  return (
    <section id="resultats" className="w-full px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="font-asap text-2xl italic text-onyx">Résultats</h2>

      <div className="mt-8">
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

      {/* lazyOnload : le script (1,9 Mo) ne se charge qu'à l'idle du
          navigateur, jamais en concurrence avec le LCP. Le widget a en plus
          son propre data-lazyload="true" qui ne rend son contenu qu'au
          scroll. */}
      <Script
        src="https://share.trustfolio.co/scripts/embed-v2.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
