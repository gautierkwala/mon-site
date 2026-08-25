// Pastille de tag. Reprend telle quelle la facture des tags de la section
// "On coache toutes les cases" (bordure onyx sur fond Dust, aplat Wisteria
// a l'etat actif) pour que le blog n'introduise pas un second langage visuel.
export function tagPillClasses(active = false): string {
  return [
    "inline-block rounded-lg border px-[14px] py-[5px] font-asap text-[15px]",
    "transition-colors duration-150",
    // Texte onyx sur l'aplat Wisteria, comme le CTA du header : le blanc n'y
    // atteint que 2.85:1 (echec AA, releve par Lighthouse), l'onyx 6.54:1.
    active
      ? "border-wisteria bg-wisteria text-onyx"
      : "border-onyx bg-dust text-onyx hover:border-wisteria hover:bg-wisteria",
  ].join(" ");
}

export function TagPill({ tag }: { tag: string }) {
  return <span className={tagPillClasses()}>{tag}</span>;
}
