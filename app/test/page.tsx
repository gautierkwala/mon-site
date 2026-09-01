import type { Metadata } from "next";

// Planche de controle du design system, utile en interne mais sans valeur pour
// un visiteur : elle repondait 200 et rien n'empechait son indexation.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const colors = [
  { name: "onyx", hex: "#12130f", className: "bg-onyx" },
  { name: "white", hex: "#ffffff", className: "bg-white" },
  { name: "wisteria", hex: "#8093f1", className: "bg-wisteria" },
  { name: "alabaster", hex: "#eae7e4", className: "bg-alabaster" },
  { name: "dust", hex: "#e1ddd8", className: "bg-dust" },
];

const asapStyles = [
  { label: "Regular", className: "font-asap font-normal not-italic" },
  { label: "Medium", className: "font-asap font-medium not-italic" },
  { label: "SemiBold", className: "font-asap font-semibold not-italic" },
  { label: "Italic", className: "font-asap font-normal italic" },
  { label: "Medium Italic", className: "font-asap font-medium italic" },
  { label: "Bold Italic", className: "font-asap font-bold italic" },
];

const dmSansStyles = [
  { label: "Regular", className: "font-dm-sans font-normal" },
  { label: "Medium", className: "font-dm-sans font-medium" },
];

export default function TestPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-16 p-10">
      <section>
        <h1 className="mb-6 text-2xl font-asap font-bold">Couleurs</h1>
        <div className="grid grid-cols-5 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="space-y-2">
              <div
                className={`h-24 w-full rounded-md border border-onyx/20 ${color.className}`}
              />
              <p className="font-dm-sans text-sm font-medium">{color.name}</p>
              <p className="font-dm-sans text-xs text-onyx/60">{color.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="mb-6 text-2xl font-asap font-bold">Asap</h1>
        <div className="space-y-4">
          {asapStyles.map((style) => (
            <div key={style.label} className="flex items-baseline gap-6">
              <span className="w-36 shrink-0 font-dm-sans text-xs text-onyx/60">
                {style.label}
              </span>
              <p className={`text-xl ${style.className}`}>
                Pour mieux closer, apprenez à l&rsquo;ouvrir
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="mb-6 text-2xl font-asap font-bold">DM Sans</h1>
        <div className="space-y-4">
          {dmSansStyles.map((style) => (
            <div key={style.label} className="flex items-baseline gap-6">
              <span className="w-36 shrink-0 font-dm-sans text-xs text-onyx/60">
                {style.label}
              </span>
              <p className={`text-xl ${style.className}`}>
                Kwala entraine dirigeants et commerciaux à générer plus
                d&rsquo;opportunités.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
