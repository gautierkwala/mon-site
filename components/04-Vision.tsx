import Image from "next/image";

export function Vision() {
  return (
    <section id="vision" className="w-full px-6 py-16 md:px-[120px] md:py-[60px]">
      <p className="font-asap text-2xl italic text-onyx">Notre vision</p>
      <h2 className="mt-4 max-w-3xl font-asap text-3xl font-bold italic leading-tight text-onyx md:mt-[15px] md:text-[42.145px] md:leading-[1.15]">
        L’<span className="text-wisteria">humain</span> et le{" "}
        <span className="text-wisteria">bon sens</span> primeront toujours
        sur le{" "}
        <span className="relative inline-block whitespace-nowrap">
          digital.
          <span className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[170px] -translate-x-1/2 -translate-y-1/2 md:block">
            <Image
              src="/decor/kwala-circle-04.svg"
              alt=""
              width={160}
              height={72}
              className="h-auto w-full"
            />
          </span>
        </span>
      </h2>
    </section>
  );
}
