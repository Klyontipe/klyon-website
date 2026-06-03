import { ArrowRight, Code2, Server, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { PageCTA, Section, StatGrid, Steps } from "@/components/PageBlocks";
import { klyonProcessSteps } from "@/data/klyonProcess";

const serviceCards = [
  {
    icon: Code2,
    title: "Développement",
    desc: "Sites web, apps, backends, outils métier et intégrations sur mesure.",
    href: "/developpement",
  },
  {
    icon: Zap,
    title: "Automatisations",
    desc: "n8n, Zapier, Make, scripts Python et workflows métier connectés.",
    href: "/automatisations",
  },
  {
    icon: Wrench,
    title: "Services informatiques",
    desc: "Support, montage, installation systèmes, logiciels et accompagnement utilisateur.",
    href: "/services-info",
  },
  {
    icon: Server,
    title: "Infrastructure",
    desc: "NAS, sauvegarde, synchronisation, DNS, serveurs et téléphonie technique.",
    href: "/infrastructure",
  },
];

const Services = () => (
  <>
    <Seo
      title="Services numériques et informatiques — Klyon"
      description="Développement, automatisations, services informatiques et infrastructure: Klyon regroupe ses services dans une offre claire et structurée."
      path="/services"
    />
    <PageLayout
      eyebrow="// NAV · SERVICES"
      title={<>Un socle de <span className="text-gradient-primary">services clairs</span></>}
      subtitle="Développement, automatisations, services informatiques et infrastructure. Chaque pôle mène vers une page dédiée avec son périmètre, ses outils et ses cas d'usage."
    >
      <Section eyebrow="// panorama" title={<>Ce que Klyon <span className="text-gradient-primary">propose</span></>}>
        <div className="grid md:grid-cols-2 gap-5">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.href}
                className="group glass-strong rounded-3xl border border-border/40 p-6 md:p-7 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-60 group-hover:translate-x-1 transition-transform" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-3">{card.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="// fonctionnement" title={<>Une approche <span className="text-gradient-primary">transversale</span></>}>
        <StatGrid
          items={[
            { value: "1", label: "Interlocuteur", desc: "Un seul point d'entrée pour cadrer, produire et suivre." },
            { value: "4", label: "Pôles visibles", desc: "Des services regroupés proprement, sans jargon inutile." },
            { value: "Sud", label: "Ancrage local", desc: "Basé dans le Sud, travail à distance partout en France." },
            { value: "24h", label: "Réponse", desc: "Retour rapide pour cadrer le besoin et proposer la bonne voie." },
          ]}
        />
      </Section>

      <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
        <Steps items={[...klyonProcessSteps]} />
      </Section>

      <PageCTA title="Quel service vous correspond ?" desc="Chaque pôle a sa page, mais le devis permet aussi de partir d'un besoin simple et de cadrer le reste ensuite." />
    </PageLayout>
  </>
);

export default Services;
