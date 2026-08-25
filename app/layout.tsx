import type { Metadata } from "next";
import { Asap, DM_Sans } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://kwala.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TODO : titre à définir — Kwala",
  description:
    "TODO : description SEO à rédiger (150-160 caractères, reprend la proposition de valeur Kwala).",
  openGraph: {
    title: "TODO : titre Open Graph",
    description: "TODO : description Open Graph",
    url: SITE_URL,
    siteName: "Kwala",
    images: [
      {
        url: "/TODO-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TODO : texte alternatif image Open Graph",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TODO : titre Twitter",
    description: "TODO : description Twitter",
    images: ["/TODO-og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kwala",
  url: SITE_URL,
  sameAs: ["https://www.linkedin.com/company/kwala-app"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "TODO",
    postalCode: "TODO",
    addressLocality: "TODO",
    addressCountry: "FR",
  },
  telephone: "TODO",
  taxID: "TODO (SIRET)",
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
        {children}
      </body>
    </html>
  );
}
