import type { Metadata } from "next";
import { Asap, DM_Sans } from "next/font/google";
import "./globals.css";
import { ADRESSE, SITE_URL, TELEPHONE } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next";

const asap = Asap({
  variable: "--font-asap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});



const TITLE = "Coaching commercial B2B à Lyon : dirigeants et équipes | Kwala";
const DESCRIPTION =
  "Coaching commercial B2B à Lyon. Kwala forme dirigeants et équipes à mieux vendre, avec une approche humaine et concrète. Échangez avec un coach.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Kwala",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kwala — The place to biz",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// Bloc validé — doc de passation section 7. "logo" pointe vers le fichier
// réel du dépôt (/logos/logo-kwala.svg) : le chemin du doc (/logos/kwala.svg)
// ne correspond à aucun asset existant.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kwala",
  description: "Coaching commercial B2B pour dirigeants et équipes à Lyon.",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/logo-kwala.svg`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: TELEPHONE,
  address: ADRESSE,
  areaServed: { "@type": "City", name: "Lyon" },
  // Profils tiers officiels. Ils aident les moteurs et les assistants a
  // rattacher entre elles les mentions de Kwala dispersees sur le web.
  // Volontairement PAS de bloc aggregateRating ici : Google interdit le
  // balisage d'avis portant sur soi-meme sur son propre site.
  sameAs: [
    "https://www.linkedin.com/company/kwala-app",
    "https://trustfolio.co/profil/kwala-sdJEBF2Ciw1",
  ],
  identifier: "903154896",
  priceRange: "$$",
};

// Google genere les liens de site ("sitelinks") automatiquement, on ne peut
// pas les declarer. Ce bloc WebSite ne fait qu'affermir le nom du site tel
// qu'il s'affiche dans les resultats ; les vrais leviers sont ailleurs :
// des URL distinctes et bien nommees, liees depuis la navigation.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kwala",
  alternateName: "Kwala — Coaching commercial B2B",
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: "Kwala", url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${asap.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-dm-sans text-onyx bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        {/* Mesure d'audience Vercel : sans cookie et sans identifiant
            persistant, donc sans banniere de consentement a afficher. Elle
            ne fonctionne que si l'option Web Analytics est activee sur le
            projet Vercel ; sans cela le script ne remonte rien. */}
        <Analytics />
      </body>
    </html>
  );
}
