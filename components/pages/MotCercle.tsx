import type { ReactNode } from "react";

/**
 * Entoure un mot du cercle dessine a la main du design system
 * (KwalaNew_circle_01, recolore en #8093F1), sur le meme principe que
 * "vive voix" en section contact de l'accueil.
 *
 * Rendu en image de fond et non en <img> : le trace doit s'etirer aux
 * dimensions du mot, ce qui casse son rapport d'aspect natif — Lighthouse
 * le signale sur une balise <img>, pas sur un fond CSS. Purement decoratif,
 * donc absent de l'arbre d'accessibilite dans les deux cas.
 */
export function MotCercle({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        // Debordement reduit sur petit ecran : a 390px le mot touche le bord
        // de la colonne et le trace se faisait rogner a gauche.
        className="pointer-events-none absolute -inset-x-1 -inset-y-1 z-0 md:-inset-x-3 md:-inset-y-2"
        style={{
          backgroundImage: "url(/decor/kwala-circle-01.webp)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </span>
  );
}
