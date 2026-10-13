"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/** Point de rupture Tailwind `md`. */
const LARGEUR_MINIMALE = "(min-width: 768px)";

/**
 * Le widget Trustfolio pese environ 3,2 Mo (575 ko de HTML, ~800 ko de JS et
 * ~1,6 Mo de photos). Le masquer en CSS (`hidden md:block`) laissait les
 * visiteurs mobiles telecharger ces 3,2 Mo pour un bloc qu'ils ne voient
 * jamais. Ici il n'est pas monte du tout sous 768px : ni l'ancre, ni le
 * script.
 *
 * Le rendu initial est vide des deux cotes (serveur comme client) pour que
 * l'hydratation corresponde ; le widget apparait apres le premier effet, ce
 * qui est sans consequence puisqu'il se charge de toute facon au ralenti
 * (`lazyOnload` + `data-lazyload`).
 */
export function WidgetTrustfolio({ profil }: { profil: string }) {
  const [assezLarge, setAssezLarge] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(LARGEUR_MINIMALE);
    const synchroniser = () => setAssezLarge(media.matches);
    synchroniser();
    media.addEventListener("change", synchroniser);
    return () => media.removeEventListener("change", synchroniser);
  }, []);

  if (!assezLarge) return null;

  return (
    <div className="mt-8">
      <a
        className="trustfolio-widget"
        data-config-id="dBOT4lIRnc2"
        data-lazyload="true"
        data-initial-height="500"
        target="_blank"
        rel="noopener noreferrer"
        href={profil}
      >
        Découvrez les témoignages de nos clients
      </a>
      <Script
        src="https://share.trustfolio.co/scripts/embed-v2.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
