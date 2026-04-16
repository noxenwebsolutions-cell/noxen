import { Audience } from "@/components/landing/Audience";
import { Credibility } from "@/components/landing/Credibility";
import { ExampleSites } from "@/components/landing/ExampleSites";
import { RealProjects } from "@/components/landing/RealProjects";
import { FinalCta } from "@/components/landing/FinalCta";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { Process } from "@/components/landing/Process";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Credibility />
        <ExampleSites />
        <RealProjects />
        <Audience />
        <Process />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
