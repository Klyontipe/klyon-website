import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import ParticleField from "./ParticleField";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
};

const PageLayout = ({ eyebrow, title, subtitle, children }: Props) => (
  <main className="relative min-h-screen text-foreground overflow-hidden">
    <ParticleField />
    <Nav />
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16">
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div className="container relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> retour système
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="font-mono text-xs text-primary mb-3">{eyebrow}</div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-muted-foreground mt-4 md:mt-5 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
    <div className="relative">{children}</div>
    <Footer />
  </main>
);

export default PageLayout;
