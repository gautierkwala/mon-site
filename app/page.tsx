import type { Metadata } from "next";
import { Header } from "@/components/00-Header";
import { Hero } from "@/components/01-Hero";
import { Partenaires } from "@/components/02-Partenaires";
import { MieuxCloser } from "@/components/03-MieuxCloser";
import { Vision } from "@/components/04-Vision";
import { OnCoacheToutesLesCases } from "@/components/05-OnCoacheToutesLesCases";
import { NosOffres } from "@/components/06-NosOffres";
import { Resultats } from "@/components/07-Resultats";
import { CoachingEnLigne } from "@/components/08-CoachingEnLigne";
import { AvantLumpur } from "@/components/09-AvantLumpur";
import { Contact } from "@/components/10-Contact";
import { Questions } from "@/components/11-Questions";
import { Footer } from "@/components/00-Footer";

// Seule page qui n'avait pas d'URL canonique : sans elle, une adresse avec
// parametres de campagne (?utm_source=...) peut etre indexee comme un doublon.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partenaires />
        <MieuxCloser />
        <Vision />
        <OnCoacheToutesLesCases />
        <NosOffres />
        <Resultats />
        <CoachingEnLigne />
        <AvantLumpur />
        <Contact />
        <Questions />
      </main>
      <Footer />
    </>
  );
}
