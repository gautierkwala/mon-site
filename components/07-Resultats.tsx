import { WidgetTrustfolio } from "./pages/WidgetTrustfolio";

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
          Le widget n'est donc monte qu'a partir de 768px ; en dessous, le
          renvoi vers le profil public prend le relais. */}
      <WidgetTrustfolio profil={PROFIL_TRUSTFOLIO} />

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
    </section>
  );
}
