import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const NotFound = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <main className="relative min-h-screen text-foreground">
      <Seo
        title="Page introuvable — Klyon"
        description="La page demandée n'existe pas ou n'est plus disponible."
        path="/404"
        robots="noindex,nofollow"
      />
      <Nav />
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="container relative text-center max-w-xl mx-auto">
          <div className="font-mono text-xs text-primary mb-4">// ERREUR · 404</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gradient-primary mb-4">404</h1>
          <p className="text-muted-foreground text-lg mb-2">Cette page est introuvable.</p>
          {path && (
            <p className="text-xs font-mono text-muted-foreground/70 mb-8 break-all">
              {path}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-mono text-primary-foreground shadow-glow-soft"
            >
              Retour à l'accueil
            </Link>
            <Link
              to="/devis"
              className="inline-flex items-center justify-center rounded-full border border-border/50 px-6 py-3 text-sm font-mono text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
