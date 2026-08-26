export function MieuxCloser() {
  return (
    <section id="mieux-closer" className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-[30px] md:py-[14px]">
      {/* Carte 1380×580 (get_metadata du calque "BACKGROUND" Figma) : à 1440px
          de page avec le padding md:px-[30px] ci-dessus, la carte fait déjà
          1380px de large — aspect-ratio verrouillé pour garder exactement
          ce rapport 1380:580 à toute largeur, plutôt qu'une min-height fixe
          qui décale les % au redimensionnement. */}
      <div className="relative md:aspect-[1380/580]">
        <div className="absolute inset-0 overflow-hidden rounded-xl bg-wisteria">
          <div
            className="absolute inset-0 mix-blend-soft-light"
            style={{
              backgroundImage: "url(/decor/motif-03-mieux-closer.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Pétales noires : calque Figma "Group 55" à x=947.386 y=984 (page),
            carte à x=31 y=1009 (get_metadata) → relatif à la carte :
            gauche 916.386/1380=66.4%, haut -25/580=-4.31%, largeur
            332.393/1380=24.09%, hauteur 624/580=107.6% — dépasse
            volontairement les bords haut/bas de la carte (comme dans
            Figma), donc rendues hors du conteneur overflow-hidden. */}
        <img
          src="/decor/mieux-closer-blobs.svg"
          alt=""
          className="pointer-events-none absolute left-[66.4%] top-[-4.31%] hidden h-[107.6%] w-[24.09%] md:block"
        />

        <div className="relative px-6 py-12 md:px-[122px] md:py-[127px]">
          <h2 className="font-asap text-3xl font-bold italic leading-tight text-white md:max-w-[46%] md:text-[43.6px]">
            Pour mieux closer, apprenez à l’<span className="text-onyx">ouvrir</span>
          </h2>
          {/* Largeur : le calque Figma (132:5102) fait 699px de large pour une
              carte de 1380 avec 122px de padding, soit 61.5% de la boîte de
              contenu (1136px) — et non 45%, qui ne donnait que 511px et
              étirait le paragraphe sur 9 lignes au lieu de 6, d'où une carte
              de 675px de haut au lieu des 580 de la maquette.
              Texte en onyx (pas blanc) et DM Sans Medium — confirmé via
              get_design_context sur le nœud du paragraphe (132:5102) :
              text-[color:var(--onyx,#12130f)], font-['DM_Sans:Medium'],
              texte uniforme (aucun mot en gras dans l'export Figma). */}
          <p className="mt-6 max-w-[420px] font-dm-sans text-base font-medium leading-7 text-onyx md:mt-[60px] md:max-w-[61.5%] md:text-[20px] md:leading-[28px]">
            Les meilleurs commerciaux ne sont pas ceux qui parlent le plus. Ce
            sont ceux qui questionnent, confrontent et font réfléchir. Chez
            Kwala, nous vous apprenons à mener des rendez-vous de vente plus
            impactants, à traiter les objections avec confiance et à
            transformer les conversations commerciales en décisions. Parce
            qu’un bon closing ne commence pas au moment de signer. Il commence
            dès la première question.
          </p>
        </div>
      </div>
    </section>
  );
}
