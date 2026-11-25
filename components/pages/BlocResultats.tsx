type Props = { titre: string; surtitre?: string; stats: string[] };

/**
 * Les resultats de l'accompagnement, en bande coloree.
 *
 * Le widget Trustfolio qui occupait le bas de ce bloc a ete retire : il
 * rendait ses avis dans une iframe cross-origin, donc illisible par Google
 * et par les assistants, defilait trop vite pour un visiteur, et pesait
 * ~3,2 Mo. Les avis sont desormais en dur dans BlocTemoignages, et la preuve
 * de verification Trustfolio y figure avec le lien vers le profil.
 */
export function BlocResultats({ titre, surtitre, stats }: Props) {
  return (
    <section className="bg-wisteria px-6 py-20 md:px-[120px] md:py-[100px]">
      <div className="mx-auto w-full max-w-[1280px]">
        {surtitre && (
          <p className="font-asap text-[15px] font-bold italic uppercase tracking-[0.12em] text-onyx/60">
            {surtitre}
          </p>
        )}
        <h2 className="mt-4 max-w-[860px] font-asap text-[34px] font-bold italic leading-[1.08] text-onyx md:text-[52px]">
          {titre}
        </h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat}
              className="rounded-2xl bg-alabaster px-7 py-9 font-asap text-[21px] font-bold italic leading-tight text-onyx md:text-[24px]"
            >
              {stat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
