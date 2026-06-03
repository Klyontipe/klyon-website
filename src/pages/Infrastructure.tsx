import { BellRing, HardDrive, Network, PhoneCall, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { FeatureGrid, PageCTA, Section, StatGrid, TagCloud, BeforeAfter, Steps } from "@/components/PageBlocks";
import { beforeAfterFlows } from "@/data/beforeAfterFlows";
import { klyonProcessSteps } from "@/data/klyonProcess";

const Infrastructure = () => (
  <>
    <Seo
      title="Infrastructure, NAS et téléphonie — Klyon"
      description="NAS, sauvegardes, synchronisation, infrastructure interne, DNS et téléphonie: Klyon conçoit et maintient des bases techniques fiables."
      path="/infrastructure"
    />
    <PageLayout
      eyebrow="// MODULE · INFRA"
      title={<>Infrastructure <span className="text-gradient-primary">interne</span></>}
      subtitle="NAS, sauvegarde, synchronisation, réseau, téléphonie et services techniques internes. Des bases solides pour éviter les bricolages fragiles."
    >
      <Section eyebrow="// avant · après" title={<>Une base technique <span className="text-gradient-primary">fiable</span></>}>
        <BeforeAfter {...beforeAfterFlows.infrastructure} />
      </Section>

      <Section eyebrow="// outils" title={<>Technologies <span className="text-gradient-primary">maîtrisées</span></>}>
        <TagCloud
          groups={[
            { title: "Stockage & sauvegarde", tags: ["NAS", "RAID 1", "Synchronisation de postes", "Sauvegardes", "Restauration"] },
            { title: "Infra & réseau", tags: ["Debian", "DNS", "SSL/TLS", "Monitoring", "VPS", "IONOS"] },
            { title: "Téléphonie", tags: ["FreePBX", "Asterisk", "PJSIP", "OVH SIP", "Zoiper", "ntfy.sh"] },
          ]}
        />
      </Section>

      <Section eyebrow="// projets" title={<>Types de <span className="text-gradient-primary">missions</span></>}>
        <FeatureGrid
          items={[
            {
              icon: HardDrive,
              title: "NAS & synchronisation",
              desc: "Mise en place de stockage centralisé, redondance locale et synchronisation des postes de travail.",
              bullets: ["Installation NAS", "RAID 1", "Synchronisation de PC", "Tests de reprise"],
            },
            {
              icon: Network,
              title: "Infrastructure interne",
              desc: "Services techniques internes, DNS, accès, petites briques serveurs et environnement de travail fiable.",
              bullets: ["DNS et domaines", "Accès distants", "Services internes", "Surveillance de base"],
            },
            {
              icon: PhoneCall,
              title: "Téléphonie & serveur vocal",
              desc: "Standard vocal, routage horaire, messagerie et scénarios adaptés à votre organisation.",
              bullets: ["Trunk SIP", "Routage horaire", "Messagerie vocale", "Notifications"],
            },
          ]}
        />
      </Section>

      <Section eyebrow="// niveau" title={<>Priorités <span className="text-gradient-primary">techniques</span></>}>
        <StatGrid
          items={[
            { value: "Fiable", label: "Base technique", desc: "Pas seulement une installation, mais une mise en place exploitable dans le temps." },
            { value: "Testée", label: "Validation", desc: "Chaque brique critique est vérifiée avant remise ou mise en ligne." },
            { value: "Claire", label: "Documentation", desc: "Le cadrage reste compréhensible même pour une structure non technique." },
            { value: "Suivie", label: "Maintenance", desc: "Ces sujets peuvent ensuite basculer dans un accompagnement récurrent." },
          ]}
        />
      </Section>

      <Section eyebrow="// cas concret" title={<>Un exemple <span className="text-gradient-primary">déjà déployé</span></>}>
        <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <BellRing className="w-5 h-5 text-primary" />
            <div className="font-display text-2xl font-semibold">Serveur vocal automatisé Klyon</div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Déploiement d'un serveur vocal auto-hébergé avec FreePBX, Asterisk, trunk SIP OVH, routage horaire, messagerie et notification à la réception d'un message vocal.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-mono text-primary">
            <ShieldCheck className="w-3.5 h-3.5" />
            Déploiement concret, exploité en conditions réelles
          </div>
        </div>
      </Section>

      <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
        <Steps items={[...klyonProcessSteps]} />
      </Section>

      <PageCTA title="Besoin d'une base technique plus propre ?" desc="Infrastructure, NAS, sauvegardes ou téléphonie : Klyon cadre, installe et suit ce qui doit vraiment tenir." />
    </PageLayout>
  </>
);

export default Infrastructure;
