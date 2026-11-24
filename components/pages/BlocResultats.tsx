import { WidgetTrustfolio } from "./WidgetTrustfolio";

type Props = { titre: string; stats: string[] };

const PROFIL_TRUSTFOLIO = "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1";

/**
 * Les resultats de l'accompagnement, puis le widget Trustfolio.
 *
 * Le widget passe par WidgetTrustfolio, qui ne le monte qu'au-dessus de
 * 768px : ses ~3,2 Mo (HTML, script et photos) etaient jusqu'ici telecharges
 * par les visiteurs mobiles pour un bloc que leur ecran ne peut pas afficher.
 * Meme traitement que sur l'accueil.
 */
export function BlocResultats({ titre, stats }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] bg-alabaster px-6 py-16 md:px-[120px] md:py-[60px]">
      <h2 className="font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
        {titre}
      </h2>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <li
            key={stat}
            className="rounded-xl bg-dust px-6 py-8 font-asap text-xl font-bold italic leading-tight text-onyx md:text-[24px]"
          >
            {stat}
          </li>
        ))}
      </ul>

      <WidgetTrustfolio profil={PROFIL_TRUSTFOLIO} />

      {/* Repli mobile : le widget n'est pas monte sous 768px. */}
      <div className="mt-8 md:hidden">
        <a
          href={PROFIL_TRUSTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-sm bg-onyx px-4 py-2.5 font-asap text-[15px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Lire les avis authentifiés par Trustfolio
        </a>
      </div>
    </section>
  );
}
