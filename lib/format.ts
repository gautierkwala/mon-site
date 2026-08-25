// Volontairement separe de lib/blog.ts : ce dernier lit le disque (node:fs)
// et ne peut donc pas etre importe par un composant client. Le formatage de
// date, lui, est utilise des deux cotes.

/** "2026-02-03" -> "3 février 2026". */
export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
