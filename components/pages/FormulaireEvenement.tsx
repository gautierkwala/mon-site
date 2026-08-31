"use client";

import { useRef, useState } from "react";
import { WEB3FORMS_ENDPOINT, WEB3FORMS_KEY } from "@/lib/web3forms";

type Etat = "repos" | "envoi" | "succes" | "erreur";

// Styles repris a l'identique du formulaire de contact (10-Contact) : memes
// bordures, memes fonds, meme couleur de focus.
const CHAMP =
  "w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none";
const LABEL =
  "mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust";

export function FormulaireEvenement() {
  const [etat, setEtat] = useState<Etat>("repos");
  const [erreur, setErreur] = useState("");
  const [presence, setPresence] = useState("");
  const confirmation = useRef<HTMLDivElement>(null);

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat("envoi");
    setErreur("");
    const donnees = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const reponse = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `5 ans de Kwala : ${donnees.presence === "Oui" ? "présence" : "absence"} de ${donnees.name || "sans nom"}`,
          from_name: "Invitation 5 ans Kwala",
          ...donnees,
        }),
      });
      const resultat = await reponse.json().catch(() => null);
      // Web3Forms repond 200 avec success:false quand il refuse l'envoi :
      // le statut HTTP seul ne suffit pas.
      if (!reponse.ok || !resultat?.success) {
        throw new Error(resultat?.message || `Erreur ${reponse.status}`);
      }
      setEtat("succes");
      requestAnimationFrame(() => confirmation.current?.focus());
    } catch (err) {
      setEtat("erreur");
      setErreur(err instanceof Error && err.message ? err.message : "L’envoi n’a pas abouti.");
    }
  }

  if (etat === "succes") {
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        role="status"
        className="rounded bg-onyx px-8 py-12 focus:outline-none md:px-14"
      >
        <h2 className="font-asap text-[28px] font-bold italic text-white">
          Merci, on a hâte de vous voir le 15 octobre !
        </h2>
        <p className="mt-4 font-dm-sans text-[15px] leading-7 text-dust">
          Votre réponse est bien enregistrée. On vous attend aux Woraces à
          partir de 18h30.
        </p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded bg-onyx p-8 md:p-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-wisteria opacity-15"
      />

      <form onSubmit={envoyer} className="relative" aria-busy={etat === "envoi"}>
        {/* Piege a robots de Web3Forms : invisible et non focusable pour un
            humain, coche par les robots qui remplissent tout. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          style={{ display: "none" }}
        />
        {/* Origine de la demande, pour distinguer ces reponses des demandes
            de contact dans la meme boite de reception. */}
        <input type="hidden" name="source" value="5ans" />

        <fieldset>
          <legend className={LABEL}>Serez-vous présent à l’évènement ?</legend>
          <div className="flex gap-3">
            {["Oui", "Non"].map((choix) => (
              <label
                key={choix}
                className={`flex-1 cursor-pointer rounded-sm border px-4 py-3.5 text-center font-asap text-[15px] transition-colors duration-150 ${
                  presence === choix
                    ? "border-wisteria bg-wisteria text-onyx"
                    : "border-white/15 bg-white/5 text-white hover:border-wisteria"
                }`}
              >
                <input
                  type="radio"
                  name="presence"
                  value={choix}
                  required
                  checked={presence === choix}
                  onChange={() => setPresence(choix)}
                  className="sr-only"
                />
                {choix}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5">
          <label htmlFor="evt-name" className={LABEL}>
            Votre prénom et nom
          </label>
          <input id="evt-name" name="name" type="text" autoComplete="name" required
            placeholder="Jeanne Martin" className={CHAMP} />
        </div>

        <div className="mt-5">
          <label htmlFor="evt-company" className={LABEL}>
            Entreprise
          </label>
          <input id="evt-company" name="company" type="text" autoComplete="organization" required
            placeholder="Nom de votre entreprise" className={CHAMP} />
        </div>

        <div className="mt-5">
          <label htmlFor="evt-guest" className={LABEL}>
            Serez-vous accompagné ?
          </label>
          <input id="evt-guest" name="accompagnant" type="text" required
            placeholder="Non, ou le prénom et nom de la personne" className={CHAMP} />
          <p className="mt-2 font-dm-sans text-xs text-white/40">
            Si oui, indiquez le prénom et le nom de la personne.
          </p>
        </div>

        <div className="mt-5">
          <label htmlFor="evt-email" className={LABEL}>
            Votre e-mail
          </label>
          <input id="evt-email" name="email" type="email" autoComplete="email" required
            placeholder="jeanne@entreprise.fr" className={CHAMP} />
        </div>

        {etat === "erreur" && (
          <p role="alert" className="mt-5 rounded-sm border border-white/25 bg-white/10 px-4 py-3 font-dm-sans text-[14px] leading-6 text-white">
            L’envoi n’a pas abouti ({erreur}). Vérifiez votre connexion et
            réessayez, vos réponses sont conservées. Si le problème persiste,
            écrivez-nous à{" "}
            <a href="mailto:team@kwala.fr" className="underline">team@kwala.fr</a>.
          </p>
        )}

        <button
          type="submit"
          disabled={etat === "envoi"}
          className="mt-6 w-full rounded-sm bg-wisteria px-6 py-4 font-dm-sans text-[15px] font-medium text-onyx transition-colors hover:bg-[#97A6F5] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-wisteria"
        >
          {etat === "envoi" ? "Envoi en cours…" : etat === "erreur" ? "Réessayer" : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
