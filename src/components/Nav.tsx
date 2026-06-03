import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "Vue d'ensemble" },
  { href: "/developpement", label: "Développement" },
  { href: "/automatisations", label: "Automatisations" },
  { href: "/services-info", label: "Services informatiques" },
  { href: "/infrastructure", label: "Infrastructure" },
];

const mainLinks = [
  { href: "/ia", label: "IA" },
  { href: "/formations", label: "Formations" },
  { href: "/outils", label: "Outils" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/offres", label: "Offres" },
  { href: "/faq", label: "FAQ" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServiceOpen(false);
  }, [pathname]);

  const serviceActive = [
    "/services",
    "/developpement",
    "/automatisations",
    "/services-info",
    "/infrastructure",
  ].includes(pathname);

  return (
    <>
      <motion.div
        style={{ width }}
        className="fixed top-0 left-0 h-0.5 bg-gradient-primary z-[60] origin-left shadow-glow-soft"
      />
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 md:py-3" : "py-3 md:py-5"
        }`}
      >
        <div className="container">
          <div className={`flex items-center justify-between rounded-full px-3 sm:px-5 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong" : ""}`}>
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative w-9 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-soft">
                <span className="font-mono font-bold text-primary-foreground text-sm leading-none">&laquo;</span>
                <span className="absolute -inset-1 rounded-lg bg-primary/30 blur-md group-hover:bg-primary/50 transition-colors" />
              </div>
              <span className="font-display font-bold text-lg tracking-wide">KLYON</span>
              <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground border border-border/60 rounded px-1.5 py-px ml-1">v2.4.1</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 text-sm">
              <div
                className="relative"
                onMouseEnter={() => setServiceOpen(true)}
                onMouseLeave={() => setServiceOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServiceOpen((value) => !value)}
                  className={`font-mono transition-colors story-link inline-flex items-center gap-1 ${serviceActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {serviceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-4 w-64 rounded-2xl border border-border/40 glass-strong p-3"
                    >
                      <div className="flex flex-col gap-1">
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            to={link.href}
                            className={`rounded-xl px-3 py-2 text-sm transition-colors ${
                              pathname === link.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-mono transition-colors story-link ${pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                to="/devis"
                className="hidden sm:inline-flex text-[11px] sm:text-xs font-mono px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all whitespace-nowrap"
              >
                ▸ Devis
              </Link>
              <button
                onClick={() => setOpen((value) => !value)}
                className="lg:hidden w-9 h-9 rounded-full glass-strong border border-border/60 flex items-center justify-center text-foreground"
                aria-label="Menu"
              >
                {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl border border-border/40 p-4 max-h-[min(70vh,520px)] overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col gap-3 text-sm font-mono">
                <div className="text-primary">Services</div>
                <div className="ml-3 flex flex-col gap-2">
                  {serviceLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="text-muted-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </div>
                {mainLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                ))}
                <Link to="/devis" className="text-primary">▸ Devis</Link>
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
