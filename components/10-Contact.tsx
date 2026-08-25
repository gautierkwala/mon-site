"use client";

import Image from "next/image";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-alabaster px-6 py-16 md:px-20 md:py-[120px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{
          backgroundImage: "url(/decor/motif-01-hero.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-20">
        {/* Pitch (gauche) */}
        <div>
          <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
            Contact
          </p>
          <h2 className="mt-5 font-asap text-4xl font-bold italic leading-[1.05] text-onyx md:text-[64px]">
            On en discute
            <br />
            de{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">vive voix</span>
              <Image
                src="/decor/kwala-circle-04.svg"
                alt=""
                width={160}
                height={72}
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-0 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)]"
              />
            </span>{" "}
            ?
          </h2>
          <p className="mt-6 max-w-[440px] font-dm-sans text-lg leading-7 text-onyx">
            Envie de savoir si Kwala est fait pour vous ou vos équipes ?
            Décrivez-nous votre contexte, on revient vers vous sous 24h
            ouvrées.
          </p>
        </div>

        {/* Carte formulaire (droite) */}
        <div className="relative overflow-hidden rounded bg-onyx p-8 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[60px] -top-[60px] h-[220px] w-[220px] rounded-full bg-wisteria opacity-15"
          />

          <div className="relative">
            <h3 className="font-asap text-[28px] font-bold italic text-white">
              Prenons contact
            </h3>
            <p className="mt-2 font-dm-sans text-[15px] text-dust">
              Tous les champs sont nécessaires pour bien préparer notre
              échange.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust"
                  >
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Jeanne Martin"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust"
                  >
                    Société
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nom de votre entreprise"
                    className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jeanne@entreprise.fr"
                  className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust"
                >
                  Téléphone (facultatif)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block font-dm-sans text-[13px] font-medium tracking-[0.2px] text-dust"
                >
                  Votre besoin
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Dirigeant, équipe commerciale, effectif, objectifs…"
                  className="w-full min-h-[100px] resize-y rounded-sm border border-white/15 bg-white/5 px-4 py-3.5 font-dm-sans text-[15px] text-white placeholder:text-white/35 focus:border-wisteria focus:bg-white/10 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-sm bg-wisteria px-6 py-4 font-dm-sans text-[15px] font-medium text-onyx transition-colors hover:bg-[#97A6F5] active:scale-[0.98]"
              >
                Envoyer ma demande
              </button>
              <p className="mt-4 text-center font-dm-sans text-xs text-white/40">
                En envoyant, vous acceptez d’être recontacté par l’équipe
                Kwala.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
