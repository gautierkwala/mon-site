import Image from "next/image";

export type Temoignage = {
  nom: string;
  /** Fonction et societe, en une ligne : "fondateur d'Enerkaya". */
  fonction: string;
  /** Resultat mis en avant, tel qu'il figure sur l'avis. */
  chiffre: string;
  /** Verbatim du client, repris sans reformulation. */
  citation: string;
};

type Props = { titre: string; temoignages: Temoignage[] };

const PROFIL_TRUSTFOLIO = "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1";

/** Initiales de secours : aucune photo client n'est disponible dans le repo. */
function initiales(nom: string) {
  return nom
    .split(/\s+/)
    .slice(0, 2)
    .map((mot) => mot[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Temoignages clients en vrai texte HTML.
 *
 * Le widget Trustfolio rend ses avis dans une iframe cross-origin : leur
 * contenu n'est lu ni par Google ni par les assistants. Les reprendre ici en
 * texte est le seul moyen qu'ils comptent pour le referencement. Le widget
 * reste par ailleurs en place, il apporte la preuve de verification.
 *
 * Pas de balisage schema.org Review : Google interdit le balisage des avis
 * collectes par une entreprise sur elle-meme ("self-serving reviews"), et le
 * risque d'action manuelle depasse le gain.
 */
export function BlocTemoignages({ titre, temoignages }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="max-w-[820px] font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
        {titre}
      </h2>
      <Image
        src="/decor/kwala-line-01.webp"
        alt=""
        width={675}
        height={12}
        aria-hidden="true"
        className="mt-3 h-auto w-[180px]"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {temoignages.map((t) => (
          <figure
            key={t.nom}
            className="flex flex-col rounded-xl bg-dust px-6 py-8"
          >
            <p className="font-asap text-xl font-bold italic leading-tight text-wisteria-text md:text-[24px]">
              {t.chiffre}
            </p>
            <blockquote className="mt-4 grow font-dm-sans text-base leading-7 text-onyx">
              « {t.citation} »
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-onyx font-asap text-sm font-bold italic text-white"
              >
                {initiales(t.nom)}
              </span>
              <span className="font-dm-sans text-base leading-6 text-onyx">
                <span className="font-medium">{t.nom}</span>
                <br />
                {t.fonction}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-8 font-dm-sans text-base leading-7 text-onyx">
        Avis vérifiés et recueillis par{" "}
        <a
          href={PROFIL_TRUSTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-wisteria-text underline underline-offset-2 hover:no-underline"
        >
          Trustfolio
        </a>
        .
      </p>
    </section>
  );
}
