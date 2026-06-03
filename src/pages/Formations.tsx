import { Sparkles, Layers, Settings } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section, Tabs, Steps, PageCTA, StatGrid, TagCloud } from "@/components/PageBlocks";
import { klyonProcessSteps } from "@/data/klyonProcess";

const FormationCard = ({ title, sub, desc, levels }: { title: string; sub: string; desc: string; levels: { name: string; bullets: string[] }[] }) => (
  <div className="space-y-6">
    <div className="glass-strong rounded-2xl p-6 border border-primary/20">
      <h3 className="font-display font-bold text-2xl mb-1">{title}</h3>
      <div className="text-sm text-primary font-mono mb-3">{sub}</div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 text-[11px] font-mono">
        <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">2 jours</span>
        <span className="px-2.5 py-1 rounded-full bg-muted/40 border border-border text-foreground/70">Entreprises & particuliers</span>
        <span className="px-2.5 py-1 rounded-full bg-muted/40 border border-border text-foreground/70">Hybride (présentiel + distanciel)</span>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      {levels.map((l) => (
        <div key={l.name} className="glass-strong rounded-2xl p-5 border border-border/40">
          <div className="font-mono text-[10px] text-primary mb-2">// {l.name}</div>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {l.bullets.map((b) => (
              <li key={b} className="flex gap-2"><span className="text-primary">▸</span><span>{b}</span></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Formations = () => (
  <>
    <Seo
      title="Formations sur mesure — Klyon"
      description="Formations sur mesure en IA, ChatGPT, Microsoft 365, SharePoint, Copilot et automatisation, en présentiel ou à distance."
      path="/formations"
    />
    <PageLayout
      eyebrow="// MODULE · LEARN"
      title={<>Formations <span className="text-gradient-primary">sur mesure</span></>}
      subtitle="IA, ChatGPT, Microsoft 365, SharePoint, Power Platform, Copilot. Tous niveaux, en présentiel ou à distance."
    >
    <Section eyebrow="// catalogue" title={<>Choisissez <span className="text-gradient-primary">votre parcours</span></>}>
      <Tabs
        tabs={[
          {
            label: "01 · IA & ChatGPT",
            content: (
              <FormationCard
                title="Formation IA & ChatGPT"
                sub="Maîtrisez les outils d'intelligence artificielle"
                desc="Apprenez à utiliser efficacement ChatGPT, Copilot et autres outils IA pour améliorer votre productivité et automatiser vos tâches."
                levels={[
                  { name: "Débutant", bullets: ["Introduction à l'IA et ChatGPT", "Création de comptes et premiers pas", "Rédaction de prompts efficaces", "Cas d'usage pratiques quotidiens"] },
                  { name: "Expérimenté", bullets: ["Prompt engineering avancé", "Intégration ChatGPT dans vos outils", "Automatisation avec Copilot", "Optimisation des workflows"] },
                  { name: "Expert", bullets: ["Fine-tuning et personnalisation", "Intégration API avancée", "Création d'assistants IA sur mesure", "Architecture de solutions IA"] },
                ]}
              />
            ),
          },
          {
            label: "02 · Microsoft 365",
            content: (
              <FormationCard
                title="Formation Microsoft 365"
                sub="SharePoint, Teams, Power Platform"
                desc="Maîtrisez l'écosystème Microsoft 365 pour optimiser la collaboration et la productivité de votre équipe."
                levels={[
                  { name: "Débutant", bullets: ["Prise en main de Microsoft 365", "Gestion des documents SharePoint", "Utilisation de Teams", "Organisation et collaboration"] },
                  { name: "Expérimenté", bullets: ["Administration SharePoint avancée", "Workflows Power Automate", "Applications Power Apps", "Gestion des permissions"] },
                  { name: "Expert", bullets: ["Architecture SharePoint complexe", "Développement Power Platform", "Intégrations avancées", "Migration et optimisation"] },
                ]}
              />
            ),
          },
          {
            label: "03 · Sur mesure",
            content: (
              <FormationCard
                title="Autres formations"
                sub="Sur mesure selon vos besoins"
                desc="Formations personnalisées adaptées à vos outils, processus et objectifs spécifiques."
                levels={[
                  { name: "Sur mesure", bullets: ["Analyse de vos besoins", "Programme personnalisé", "Formation adaptée à votre niveau", "Suivi post-formation"] },
                ]}
              />
            ),
          },
        ]}
      />
    </Section>

    <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
      <Steps items={[...klyonProcessSteps]} />
    </Section>

    <Section eyebrow="// programme" title={<>Format <span className="text-gradient-primary">type</span> sur 2 jours</>}>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
        {[
          ["Jour 1", "Cadrage, démonstrations, premiers exercices sur vos outils et cas d'usage réels."],
          ["Jour 2", "Mise en pratique, workflows concrets, bonnes pratiques et plan d'action post-formation."],
        ].map(([day, desc]) => (
          <div key={day} className="glass-strong rounded-2xl border border-border/40 p-5">
            <div className="font-mono text-xs text-primary mb-2">{day}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="// outils" title={<>Outils & <span className="text-gradient-primary">technologies</span></>}>
      <TagCloud
        groups={[
          { title: "Intelligence Artificielle", tags: ["ChatGPT (GPT-4)", "Microsoft Copilot", "Claude AI", "API OpenAI", "Assistants personnalisés"] },
          { title: "Microsoft 365", tags: ["SharePoint Online", "Teams", "Power Automate", "Power Apps", "Power BI"] },
          { title: "Automatisation", tags: ["Zapier", "N8N", "Make", "Scripts Python", "API REST"] },
        ]}
      />
    </Section>

    <Section eyebrow="// résultats" title={<>Ce que vous allez <span className="text-gradient-primary">acquérir</span></>}>
      <StatGrid
        items={[
          { value: "70%", label: "Gain de productivité", desc: "Temps gagné sur les tâches répétitives (retours formation)." },
          { value: "100%", label: "Sur mesure", desc: "Programme adapté au niveau et aux outils du groupe." },
          { value: "Auto.", label: "Autonomie renforcée", desc: "Capacité à utiliser les outils au quotidien." },
          { value: "✓", label: "Attestation", desc: "Attestation de formation délivrée par Klyon." },
        ]}
      />
    </Section>

      <PageCTA title="Prêt à développer vos compétences ?" desc="Premier contact : écoute de vos besoins et proposition adaptée." />
    </PageLayout>
  </>
);

export default Formations;
