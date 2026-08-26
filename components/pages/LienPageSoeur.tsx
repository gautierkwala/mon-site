import Link from "next/link";

type Props = { question: string; libelle: string; href: string };

/** Maillage interne discret entre les deux pages dediees. */
export function LienPageSoeur({ question, libelle, href }: Props) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-[120px]">
      <p className="font-dm-sans text-base leading-7 text-onyx">
        {question}{" "}
        <Link
          href={href}
          className="font-medium text-wisteria-text underline underline-offset-2 hover:no-underline"
        >
          {libelle}
        </Link>
      </p>
    </section>
  );
}
