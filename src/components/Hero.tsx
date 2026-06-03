import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import HeroOrb from "./HeroOrb";
import MagneticButton from "./MagneticButton";
import RotatingStatement from "./RotatingStatement";
import { ArrowRight, Phone } from "lucide-react";

const headline = ["Votre", "informatique.", "Automatisée.", "Optimisée."];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pb-16 noise">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <ParticleField />

      {/* Floating ambient orbs */}
      <div className="absolute -top-20 -left-20 w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full bg-secondary/15 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Left col */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">SERVICE</span>
            <span className="text-primary">ACTIF</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="text-muted-foreground">v2.4.1</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display font-bold text-balance leading-[0.95] text-3xl md:text-5xl lg:text-6xl">
            {headline.map((word, wi) => (
              <span key={wi} className="inline-block mr-3 overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + wi * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    wi >= 2
                      ? "inline-block text-gradient-primary"
                      : "inline-block"
                  }
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
          >
            Klyon, c'est un <span className="text-foreground/90">service informatique premium</span> porté par Lorenzo Fortini — un interlocuteur unique, avec un vrai travail derrière : IA, développement sur mesure et support pro pour entreprises, associations et collectivités.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 items-stretch sm:items-center"
          >
            <MagneticButton href="#contact">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href="tel:+33766980342" variant="ghost">
              <Phone className="w-4 h-4" />
              07 66 98 03 42
            </MagneticButton>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-3 md:pt-4 max-w-xl"
          >
            {[
              ["32+", "projets livrés"],
              ["5 ans", "d'expérience"],
              ["5/5", "avis Google"],
              ["24h", "réponse moyenne"],
            ].map(([v, l]) => (
              <div key={l} className="glass rounded-xl p-3">
                <div className="font-display font-bold text-xl text-gradient-primary">{v}</div>
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-2 max-w-2xl"
          >
            <RotatingStatement />
          </motion.div>
        </div>

        {/* Right col: 3D + floating panels */}
        <div className="lg:col-span-5 relative h-[250px] sm:h-[360px] md:h-[520px] order-first lg:order-last">
          {/* Orb */}
          <div className="absolute inset-0">
            <HeroOrb />
          </div>

          {/* Floating panel 1 — IA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute top-3 left-0 glass rounded-xl p-2.5 md:p-3 w-40 sm:w-44 md:w-48 animate-float"
          >
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mb-2">
              <span>IA · CONTENT</span>
              <span className="text-primary">+70%</span>
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gradient">Assistants IA</div>
            <div className="mt-2 flex gap-1 h-6 items-end">
              {[40, 65, 30, 80, 55, 90, 70, 100, 85, 60].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating panel 2 — AutoProposal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="absolute bottom-3 right-0 glass rounded-xl p-2.5 md:p-3 w-44 sm:w-52 md:w-56 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="flex items-center gap-2 text-[10px] font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">autoproposal.run</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex justify-between"><span className="text-muted-foreground">parse_pdf</span><span className="text-primary">ok</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">generate</span><span className="text-primary">ok</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">push_crm</span><span className="text-secondary animate-pulse">…</span></div>
            </div>
          </motion.div>

          {/* Floating panel 3 — PostgreSQL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="hidden sm:flex absolute top-1/2 -right-2 md:right-4 -translate-y-1/2 glass rounded-full px-3 py-2 text-[10px] font-mono items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary glow-soft" />
            postgres <span className="text-primary">30s → 0.2s</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] font-mono text-muted-foreground"
      >
        <span>scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
