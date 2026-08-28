import Script from "next/script";

const PROFIL_TRUSTFOLIO = "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1";

export function Resultats() {
  return (
    <section id="resultats" className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="font-asap text-2xl italic text-onyx">
        Des résultats concrets et rapides
      </h2>

      {/* Le widget Trustfolio s'affiche dans une iframe servie par
          share.trustfolio.co : son contenu est cross-origin, donc impossible
          a styler depuis le site. Or ses cartes de temoignages font 689px de
          large QUELLE QUE SOIT la largeur du conteneur (mesure a 342, 390,
          480 et 600px : toujours 689). Sur un telephone elles ne peuvent donc
          pas tenir et le texte est coupe des deux cotes.
          Le widget n'est affiche qu'a partir de 768px ; en dessous, un renvoi
          vers le profil public prend le relais. */}
      <div className="mt-8 hidden md:block">
        <a
          className="trustfolio-widget"
          data-config-id="dBOT4lIRnc2"
          data-lazyload="true"
          data-initial-height="500"
          target="_blank"
          rel="noopener noreferrer"
          href={PROFIL_TRUSTFOLIO}
        >
          Découvrez les témoignages de nos clients
        </a>
      </div>

      {/* Repli mobile. */}
      <div className="mt-8 md:hidden">
        <p className="font-dm-sans text-base leading-7 text-onyx">
          Nos clients racontent leur accompagnement, en avis vérifiés.
        </p>
        <a
          href={PROFIL_TRUSTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Lire les avis authentifiés par Trustfolio
        </a>
      </div>

      {/* lazyOnload : le script (1,9 Mo) ne se charge qu'à l'idle du
          navigateur, jamais en concurrence avec le LCP. Le widget a en plus
          son propre data-lazyload="true" qui ne rend son contenu qu'au
          scroll. L'attribut data-mode a ete retire : embed-v2.js ne lit que
          data-config-id, data-initial-height et data-lazyload, il etait
          donc sans effet. */}
      <Script
        src="https://share.trustfolio.co/scripts/embed-v2.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
