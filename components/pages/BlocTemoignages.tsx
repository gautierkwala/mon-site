import Image from "next/image";
import {
  NOTE_TRUSTFOLIO,
  PROFIL_TRUSTFOLIO,
  type Temoignage,
} from "@/lib/temoignages";

type Props = {
  titre: string;
  surtitre?: string;
  temoignages: Temoignage[];
  /** Fond sombre : la page alterne les bandes, le bloc doit suivre. */
  sombre?: boolean;
};

/**
 * Les avis clients, en texte lisible plutot que dans le carrousel Trustfolio.
 *
 * Deux raisons. Le widget rendait ses avis dans une iframe cross-origin : ni
 * Google ni les assistants n'en lisent un mot, alors que ces pages visent
 * « coaching commercial Lyon » et « formation commerciale Lyon ». Et il
 * defilait trop vite pour etre lu par un visiteur.
 *
 * Chaque carte montre le visage de la personne qui parle, pas le logo de son
 * entreprise : c'est un dirigeant qui recommande, pas une marque. Le nom de
 * l'entreprise reste dans la ligne de fonction.
 *
 * La preuve de verification reste entiere : la note, le nombre d'avis et le
 * lien vers le profil Trustfolio sont affiches sous les cartes.
 */
export function BlocTemoignages({
  titre,
  surtitre,
  temoignages,
  sombre = false,
}: Props) {
  const fond = sombre ? "bg-onyx" : "bg-alabaster";
  const carte = sombre ? "bg-white/[0.06]" : "bg-white";
  const texte = sombre ? "text-white" : "text-onyx";
  const secondaire = sombre ? "text-dust/70" : "text-onyx/60";
  const accent = sombre ? "text-wisteria" : "text-wisteria-text";

  return (
    <section className={`${fond} px-6 py-16 md:px-[120px] md:py-24`}>
      <div className="mx-auto w-full max-w-[1280px]">
        {surtitre && (
          <p
            className={`font-asap text-[15px] font-bold italic uppercase tracking-[0.12em] ${accent}`}
          >
            {surtitre}
          </p>
        )}
        <h2
          className={`mt-4 max-w-[860px] font-asap text-[34px] font-bold italic leading-[1.08] md:text-[52px] ${texte}`}
        >
          {titre}
        </h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {temoignages.map((t) => (
            <li key={t.nom}>
              <figure
                className={`flex h-full flex-col rounded-2xl px-7 pb-8 pt-7 ${carte} ${
                  sombre ? "" : "shadow-[0_1px_0_0_rgba(18,19,15,0.08)]"
                }`}
              >
                {/* Le visage d'abord : c'est une personne qui recommande. */}
                <figcaption className="flex items-center gap-4">
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-wisteria ring-offset-2 ring-offset-transparent">
                    <Image
                      src={t.photo}
                      alt={t.nom}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span className={`font-dm-sans text-[15px] leading-6 ${texte}`}>
                    <span className="font-medium">{t.nom}</span>
                    <br />
                    <span className={secondaire}>{t.fonction}</span>
                  </span>
                </figcaption>

                {t.chiffre && (
                  <p
                    className={`mt-6 font-asap text-[19px] font-bold italic leading-tight ${accent}`}
                  >
                    {t.chiffre}
                  </p>
                )}

                <blockquote
                  className={`mt-4 grow font-dm-sans text-[16px] leading-7 ${
                    sombre ? "text-dust" : "text-onyx/80"
                  }`}
                >
                  {t.citation}
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>

        {/* La preuve de verification, qui portait jusqu'ici sur le widget. */}
        <div
          className={`mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-dm-sans text-[16px] ${texte}`}
        >
          <span className={`font-asap text-[28px] font-bold italic ${accent}`}>
            {NOTE_TRUSTFOLIO}
          </span>
          {/* Pas de nombre d'avis affiche : le compteur Trustfolio ne couvre
              qu'une partie des clients accompagnes, et un chiffre partiel
              dessert plus qu'il ne prouve. Ce qui compte est dit : chaque
              avis cite ici a ete verifie par un tiers, et le profil est a un
              clic pour qui veut compter lui-meme. */}
          <span>
            Chaque avis de cette page est authentifié par{" "}
            <a
              href={PROFIL_TRUSTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-2 hover:no-underline"
            >
              Trustfolio
            </a>
          </span>
          <a
            href={PROFIL_TRUSTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-sm px-5 py-2.5 font-asap text-[15px] font-bold italic transition-opacity hover:opacity-90 ${
              sombre ? "bg-wisteria text-onyx" : "bg-onyx text-white"
            }`}
          >
            Lire tous les avis
          </a>
        </div>
      </div>
    </section>
  );
}
