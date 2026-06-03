import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative border-t border-border/50 py-12 mt-10">
    <div className="container grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-soft">
            <span className="font-mono font-bold text-primary-foreground text-sm leading-none">&laquo;</span>
          </div>
          <span className="font-display font-bold text-lg">KLYON</span>
        </div>
        <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed">
          Service informatique premium par Lorenzo Fortini. Un interlocuteur unique, un travail sérieux : IA, développement sur mesure et support pro.
        </p>
        <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          système opérationnel · Lun–Sam · 8h–20h
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          Basé à Allauch · interventions dans le Sud, à distance partout en France et déplacement possible selon la mission.
        </div>
      </div>

      <div>
        <div className="text-xs font-mono text-primary mb-3 uppercase tracking-widest">Contact</div>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="tel:+33766980342" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5" /> 07 66 98 03 42
            </a>
          </li>
          <li>
            <a href="mailto:klyonme@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-3.5 h-3.5" /> klyonme@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zl3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-3.5 h-3.5" /> Lorenzo Fortini
            </a>
          </li>
          <li>
            <Link to="/devis" className="text-muted-foreground hover:text-primary transition-colors">
              Demander un devis
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <div className="text-xs font-mono text-primary mb-3 uppercase tracking-widest">Services</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Vue d'ensemble</Link></li>
          <li><Link to="/ia" className="text-muted-foreground hover:text-primary transition-colors">Intelligence Artificielle</Link></li>
          <li><Link to="/developpement" className="text-muted-foreground hover:text-primary transition-colors">Développement</Link></li>
          <li><Link to="/automatisations" className="text-muted-foreground hover:text-primary transition-colors">Automatisations</Link></li>
          <li><Link to="/formations" className="text-muted-foreground hover:text-primary transition-colors">Formations</Link></li>
          <li><Link to="/services-info" className="text-muted-foreground hover:text-primary transition-colors">Services informatiques</Link></li>
          <li><Link to="/infrastructure" className="text-muted-foreground hover:text-primary transition-colors">Infrastructure</Link></li>
          <li><Link to="/offres" className="text-muted-foreground hover:text-primary transition-colors">Offres & tarifs</Link></li>
          <li><Link to="/realisations" className="text-muted-foreground hover:text-primary transition-colors">Réalisations</Link></li>
          <li><Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À propos</Link></li>
        </ul>
      </div>
    </div>

    <div className="container mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] font-mono text-muted-foreground">
      <span>© {new Date().getFullYear()} Klyon · Lorenzo Fortini · Tous droits réservés</span>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
        <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
        <span>Sur site ou à distance</span>
      </div>
    </div>
  </footer>
);

export default Footer;
