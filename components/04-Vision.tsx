import Image from "next/image";

export function Vision() {
  return (
    <section id="vision" className="mx-auto w-full max-w-[1440px] px-6 py-16 md:px-[120px] md:py-[60px]">
      <p className="font-asap text-2xl italic text-onyx">Notre vision</p>
      <h2 className="mt-4 max-w-3xl font-asap text-3xl font-bold italic leading-tight text-onyx md:mt-[15px] md:text-[42.145px] md:leading-[1.15] min-[1440px]:max-w-none min-[1440px]:whitespace-nowrap">
        {/* Groupe colore d'un seul tenant : deux fragments violets separes
            par un "et le" noir hachaient la lecture. */}
        <span className="text-wisteria-text">L’humain et le bon sens</span>{" "}
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
    </section>
  );
}
