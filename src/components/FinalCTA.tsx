import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="font-mono text-xs text-primary mb-6 tracking-widest">// DECISION POINT</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance">
            Votre problème.<br />
            <span className="text-gradient-primary animate-gradient-pan bg-[length:200%_auto]">Ma solution.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-6 md:mt-8 max-w-xl mx-auto">
            Un échange de 20 minutes avec Lorenzo. Diagnostic offert, sans engagement.
            Si Klyon peut vous faire gagner du temps, vous le saurez tout de suite.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center items-stretch sm:items-center">
            <MagneticButton href="#contact">
              Discuter de votre projet
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton href="tel:+33766980342" variant="ghost">
              <Phone className="w-4 h-4" />
              07 66 98 03 42
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
