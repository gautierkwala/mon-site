import { Header } from "@/components/00-Header";
import { Footer } from "@/components/00-Footer";

// Gabarit commun aux pages legales. Les styles de titres et de paragraphes
// sont appliques par variantes descendantes plutot que repetes sur chaque
// balise : le contenu des pages reste ainsi lisible en clair.
export function PageLegale({
  titre,
  chapeau,
  miseAJour,
  children,
}: {
  titre: string;
  chapeau: string;
  miseAJour: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-alabaster">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[96px]">
          <div className="max-w-[760px]">
            <p className="font-asap text-[16px] font-bold italic tracking-[0.16px] text-wisteria-text">
              Informations légales
            </p>
            <h1 className="mt-4 font-asap text-3xl font-bold italic leading-tight text-onyx md:text-[43.6px]">
              {titre}
            </h1>
            <p className="mt-5 font-dm-sans text-[18px] leading-8 text-onyx/80">
              {chapeau}
            </p>
            <p className="mt-3 font-dm-sans text-[14px] text-onyx/60">
              Dernière mise à jour : {miseAJour}
            </p>

            <div
              className="
                mt-12 font-dm-sans text-[17px] leading-8 text-onyx/85
                [&_h2]:mt-12 [&_h2]:font-asap [&_h2]:text-[24px] [&_h2]:font-bold
                [&_h2]:italic [&_h2]:leading-tight [&_h2]:text-onyx
                [&_h3]:mt-8 [&_h3]:font-asap [&_h3]:text-[19px] [&_h3]:font-medium [&_h3]:text-onyx
                [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:pl-5 [&_li]:relative
                [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-wisteria-text
                [&_li]:before:content-['•']
                [&_a]:underline [&_a]:decoration-wisteria-text [&_a]:underline-offset-2
                [&_dl]:mt-4 [&_dt]:mt-4 [&_dt]:font-medium [&_dt]:text-onyx
              "
            >
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
