"use client";

import Image from "next/image";
import { useState } from "react";

// La navigation pointe vers de vraies URL et non vers une ancre : c'est le
// principal levier pour que Google puisse composer des liens de site sous le
// resultat de kwala.fr. Une ancre (#offres) ne constitue pas une page.
const NAV_LINKS = [
  { href: "/coaching-dirigeants-lyon", label: "Dirigeants" },
  { href: "/coaching-equipe-commerciale-lyon", label: "Équipes" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full bg-alabaster">
      <div className="mx-auto flex h-[75px] w-full max-w-[1200px] items-center justify-between rounded-xl bg-dust px-4 mt-4 mb-4 md:mt-[38px] md:mb-[38px] md:px-[30px]">
        <a href="/" className="shrink-0">
          <Image src="/logos/logo-kwala.svg" alt="Kwala" width={129} height={35} priority />
        </a>

        <div className="hidden items-center gap-[39px] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-asap text-[18px] italic font-medium text-onyx"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-sm bg-wisteria px-4 py-2.5 font-asap text-[15px] font-medium text-onyx"
          >
            Discuter avec un coach
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-onyx transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`h-[2px] w-6 bg-onyx transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-[2px] w-6 bg-onyx transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="mx-4 mb-4 flex flex-col gap-4 rounded-xl bg-dust p-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-asap text-[18px] italic font-medium text-onyx"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-sm bg-wisteria px-4 py-2.5 text-center font-asap text-[15px] font-medium text-onyx"
          >
            Discuter avec un coach
          </a>
        </div>
      )}
    </header>
  );
}
