import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServicesNetwork from "@/components/ServicesNetwork";
import Seo from "@/components/Seo";
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import WhyKlyon from "@/components/WhyKlyon";
import OfferPacks from "@/components/OfferPacks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Steps } from "@/components/PageBlocks";
import { klyonProcessSteps } from "@/data/klyonProcess";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="relative min-h-screen text-foreground">
      <Seo
        title="Klyon — Service informatique premium · IA, Dev & Support"
        description="Klyon, prestation informatique premium par Lorenzo Fortini. Un interlocuteur unique pour l'IA, le développement sur mesure, la maintenance, le support et l'automatisation."
        path="/"
      />
      <Nav />
      <Hero />
      <Marquee />
      <ServicesNetwork />
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs text-primary mb-3">// 03 · MÉTHODE</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Comment on <span className="text-gradient-primary">travaille</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Quatre étapes, toujours les mêmes : cadrer, valider, construire, suivre. Un interlocuteur unique du début à la fin.
            </p>
          </div>
          <Steps items={[...klyonProcessSteps]} />
        </div>
      </section>
      <OfferPacks />
      <WhyKlyon />
      <TrustSignals />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
