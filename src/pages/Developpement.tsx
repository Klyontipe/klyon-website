import { Code2, Database, FileSearch, Server } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section, FeatureGrid, Steps, PageCTA, BeforeAfter } from "@/components/PageBlocks";
import { beforeAfterFlows } from "@/data/beforeAfterFlows";
import { klyonProcessSteps } from "@/data/klyonProcess";

const Developpement = () => (
  <>
    <Seo
      title="Développement sur mesure — Klyon"
      description="Sites web métier, backends, bases de données et interfaces sur mesure. Klyon développe des solutions utiles, fiables et orientées usage réel."
      path="/developpement"
    />
    <PageLayout
      eyebrow="// MODULE · DEV"
      title={<>Développement <span className="text-gradient-primary">sur mesure</span></>}
      subtitle="Sites web métier, backends, bases de données et interfaces internes. Des solutions sur mesure pensées pour un usage réel, pas pour une démo."
    >
    <Section eyebrow="// avant · après" title={<>Relier vos <span className="text-gradient-primary">outils</span></>}>
      <BeforeAfter {...beforeAfterFlows.developpement} />
    </Section>

    <Section eyebrow="// services" title={<>Types de <span className="text-gradient-primary">projets</span></>}>
      <FeatureGrid
        items={[
          { icon: Code2, title: "Sites web métier", desc: "Sites vitrines, espaces internes et interfaces métier construites autour de votre fonctionnement réel.", bullets: ["Design responsive", "Navigation claire", "Connexion à vos outils", "Interface pensée usage"] },
          { icon: Server, title: "Back-end & APIs", desc: "Logique serveur, échanges de données, traitements métiers et connexions entre plusieurs briques techniques.", bullets: ["APIs REST", "Logique métier", "Connexions ERP/CRM", "Sécurité & validation"] },
          { icon: Database, title: "Bases de données", desc: "Structuration, optimisation et exploitation de données pour tenir dans le temps sans bricolage fragile.", bullets: ["PostgreSQL & SQL", "Structuration propre", "Requêtes optimisées", "Fiabilité des flux"] },
          { icon: FileSearch, title: "Interfaces sur mesure", desc: "OCR de factures, resynchronisation de commandes, suivi d'activité et monitorings IT avec surveillance en temps réel.", bullets: ["Lecture de documents", "Synchronisation métier", "Dashboards internes", "Surveillance temps réel"] },
        ]}
      />
    </Section>

    <Section eyebrow="// concret" title={<>Ce que le <span className="text-gradient-primary">sur mesure</span> permet</>}>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            title: "Faire circuler l'information",
            desc: "Quand un site, un back-end et une base doivent travailler ensemble, l'enjeu n'est pas d'empiler des technos mais de faire tenir le flux sans ressaisie ni perte d'information.",
          },
          {
            title: "Créer une vraie interface de travail",
            desc: "Le développement sur mesure sert aussi à fabriquer des écrans utiles : OCR de factures, vues de contrôle, administration métier ou supervision interne.",
          },
          {
            title: "Suivre le temps réel",
            desc: "Surveillance d'infrastructure, retours de commandes, états de traitements ou tableaux de bord : les projets peuvent remonter l'information en direct là où elle est utile.",
          },
          {
            title: "Rester lisible dans la durée",
            desc: "L'objectif n'est pas seulement de livrer. Il faut qu'un outil reste compréhensible, exploitable et capable d'évoluer quand le besoin change.",
          },
        ].map((item) => (
          <div key={item.title} className="glass-strong rounded-2xl border border-border/40 p-6">
            <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
      <Steps items={[...klyonProcessSteps]} />
    </Section>

      <PageCTA title="Un site métier ou un outil interne à cadrer ?" desc="Klyon peut partir d'un besoin web simple, d'une interface métier ou d'un back-end plus technique, puis poser la bonne architecture autour." />
    </PageLayout>
  </>
);

export default Developpement;
