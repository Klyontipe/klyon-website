import { Cpu, MonitorSmartphone, FileCheck2, Headphones, HardDrive } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section, FeatureGrid, PageCTA, StatGrid, BeforeAfter, Steps } from "@/components/PageBlocks";
import { beforeAfterFlows } from "@/data/beforeAfterFlows";
import { klyonProcessSteps } from "@/data/klyonProcess";

const ServicesInfo = () => (
  <>
    <Seo
      title="Services informatiques et maintenance — Klyon"
      description="Support informatique, montage PC, installation systèmes et logiciels, maintenance et accompagnement technique avec Klyon."
      path="/services-info"
    />
    <PageLayout
      eyebrow="// MODULE · SUPPORT"
      title={<>Services <span className="text-gradient-primary">Informatiques</span></>}
      subtitle="Montage PC, installation OS & logiciels, support technique et accompagnement. Délais adaptés selon la disponibilité des pièces."
    >
    <Section eyebrow="// avant · après" title={<>Un poste <span className="text-gradient-primary">prêt à l'emploi</span></>}>
      <BeforeAfter {...beforeAfterFlows.servicesInfo} />
    </Section>

    <Section eyebrow="// services" title={<>Ce que Klyon <span className="text-gradient-primary">propose</span></>}>
      <FeatureGrid
        items={[
          {
            icon: Cpu,
            title: "Montage PC sur mesure",
            desc: "Conception et assemblage de PC adaptés à vos besoins : gaming, bureautique, création, serveurs.",
            bullets: ["Sélection des composants optimaux", "Assemblage professionnel", "Tests et optimisation", "Garantie sur le montage"],
          },
          {
            icon: MonitorSmartphone,
            title: "Installation systèmes d'exploitation",
            desc: "Windows, Linux ou macOS selon vos préférences et besoins.",
            bullets: ["Installation propre", "Configuration optimale", "Mise à jour des drivers", "Optimisation des performances"],
          },
          {
            icon: FileCheck2,
            title: "Installation suites Office",
            desc: "Microsoft 365, LibreOffice ou autres suites bureautiques.",
            bullets: ["Installation complète", "Configuration des comptes", "Synchronisation cloud", "Formation rapide à l'utilisation"],
          },
          {
            icon: HardDrive,
            title: "Installation logiciels",
            desc: "Tous types de logiciels selon vos besoins pro ou perso.",
            bullets: ["Logiciels métier spécifiques", "Outils de productivité", "Logiciels créatifs", "Configuration et paramétrage"],
          },
          {
            icon: Headphones,
            title: "Support technique",
            desc: "Accompagnement après installation pour garantir le bon fonctionnement.",
            bullets: ["Support téléphonique", "Assistance à distance", "Résolution de problèmes", "Conseils et optimisation"],
          },
        ]}
      />
    </Section>

    <Section eyebrow="// garanties" title={<>Pourquoi <span className="text-gradient-primary">Klyon</span> ?</>}>
      <StatGrid
        items={[
          { value: "24-48h", label: "Service Express", desc: "Si pièces en stock, réparations simples livrées en 24-48h." },
          { value: "6 mois", label: "Garantie réparations", desc: "Toutes les réparations sont garanties 6 mois minimum." },
          { value: "6 mois", label: "Garantie montage", desc: "Sur les interventions de montage et assemblage." },
          { value: "Inclus", label: "Suivi Office", desc: "Accompagnement après installation des suites bureautiques." },
        ]}
      />
    </Section>

    <Section eyebrow="// délais" title={<>Délais <span className="text-gradient-primary">indicatifs</span></>}>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
        {[
          ["Réparations simples", "24-48h (si pièces en stock)"],
          ["Pièces à commander", "3-7 jours selon fournisseur"],
          ["Upgrade PC", "1-3 jours"],
          ["Installation logiciels", "Immédiat"],
        ].map(([k, v]) => (
          <div key={k} className="glass-strong rounded-xl p-5 border border-border/40 flex items-center justify-between">
            <span className="font-medium text-sm">{k}</span>
            <span className="font-mono text-xs text-primary">{v}</span>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
      <Steps items={[...klyonProcessSteps]} />
    </Section>

      <PageCTA title="Une panne, un upgrade, un montage ?" desc="Diagnostic rapide et devis transparent." />
    </PageLayout>
  </>
);

export default ServicesInfo;
