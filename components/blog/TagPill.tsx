// Pastille de tag. Reprend telle quelle la facture des tags de la section
// "On coache toutes les cases" (bordure onyx sur fond Dust, aplat Wisteria
// a l'etat actif) pour que le blog n'introduise pas un second langage visuel.
export function tagPillClasses(active = false): string {
  return [
    "inline-block rounded-lg border px-[14px] py-[5px] font-asap text-[15px]",
    "transition-colors duration-150",
    active
      ? "border-wisteria bg-wisteria text-white"
      : "border-onyx bg-dust text-onyx hover:border-wisteria hover:bg-wisteria hover:text-white",
  ].join(" ");
}

export function TagPill({ tag }: { tag: string }) {
  return <span className={tagPillClasses()}>{tag}</span>;
}
