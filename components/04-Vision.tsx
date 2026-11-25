import Image from "next/image";

export function Vision() {
  return (
    // Bande pleine largeur en wisteria. Le corps du site est servi sur un
    // seul aplat alabaster : d'un bout a l'autre de l'accueil, rien ne
    // changeait de fond. Cette phrase, qui tient en une ligne et dit ce que
    // Kwala pense, est le bon endroit pour poser la couleur.
    <section id="vision" className="w-full bg-wisteria">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-24">
      <p className="font-asap text-2xl italic text-onyx/70">Notre vision</p>
      <h2 className="mt-4 max-w-3xl font-asap text-3xl font-bold italic leading-tight text-onyx md:mt-[15px] md:text-[42.145px] md:leading-[1.15] min-[1440px]:max-w-none min-[1440px]:whitespace-nowrap">
        {/* Groupe colore d'un seul tenant : deux fragments violets separes
            par un "et le" noir hachaient la lecture. Sur l'aplat wisteria,
            c'est le blanc qui detache le groupe, pas le violet. */}
        <span className="text-white">L’humain et le bon sens</span>{" "}
        primeront{" "}
        <span className="relative inline-block whitespace-nowrap">
          toujours
          <span className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[170px] -translate-x-1/2 -translate-y-1/2 min-[1440px]:block">
            <Image
              src="/decor/kwala-circle-04.svg"
              alt=""
              width={160}
              height={72}
              className="h-auto w-full"
            />
          </span>
        </span>{" "}
        sur le digital.
      </h2>
      </div>
    </section>
  );
}
