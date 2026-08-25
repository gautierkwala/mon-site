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
import { Footer } from "@/components/00-Footer";

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
      </main>
      <Footer />
    </>
  );
}
