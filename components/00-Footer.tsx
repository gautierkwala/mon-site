import Image from "next/image";

const LEGAL_LINKS = [
  "Mentions légales",
  "Politique de confidentialité",
  "CGV",
  "Blog",
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-alabaster">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/decor/motif-00-footer.webp)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-10 pt-10 md:px-[61px] md:pb-[40px] md:pt-[55px]">
        <div className="flex items-start justify-between">
          <Image src="/logos/logo-kwala.svg" alt="Kwala" width={168} height={45} />
          <Image
            src="/logos/the-place-to-biz.svg"
            alt="The place to biz"
            width={161}
            height={36}
          />
        </div>

        <hr className="mt-10 border-onyx/20 md:mt-[52px]" />

        <div className="mt-10 flex flex-col gap-10 md:mt-[34px] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-asap text-sm italic text-onyx">
              Finançable par les OPCO&nbsp;&nbsp;Aide aux financements
            </p>
            <Image
              src="/logos/qualiopi.png"
              alt="Qualiopi — processus certifié"
              width={147}
              height={64}
              className="mt-4"
            />
          </div>

          <div>
            <p className="font-asap text-sm italic text-onyx">Labels</p>
            <div className="mt-4 flex items-end gap-6">
              <Image
                src="/logos/reseau-entreprendre.png"
                alt="Réseau Entreprendre"
                width={91}
                height={64}
              />
              <Image
                src="/logos/la-french-tech.png"
                alt="La French Tech"
                width={57}
                height={80}
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <nav className="flex flex-col gap-1 text-left font-asap text-base italic text-onyx md:text-right">
              {LEGAL_LINKS.map((label) => (
                <a key={label} href="#">
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="https://www.linkedin.com/company/kwala-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kwala sur LinkedIn"
            >
              <Image src="/logos/linkedin-icon.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
