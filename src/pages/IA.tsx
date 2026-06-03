import { Bot, Brain, GraduationCap, Sparkles, Workflow } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section, FeatureGrid, Tabs, PageCTA, BeforeAfter, Steps } from "@/components/PageBlocks";
import { beforeAfterFlows } from "@/data/beforeAfterFlows";
import { klyonProcessSteps } from "@/data/klyonProcess";

const IA = () => (
  <>
    <Seo
      title="Intelligence artificielle pour entreprises — Klyon"
      description="Klyon conçoit des assistants IA, intègre ChatGPT, Claude, Gemini ou Copilot dans vos usages métier et forme vos équipes."
      path="/ia"
    />
    <PageLayout
      eyebrow="// MODULE · IA"
      title={<>Maîtrisez l'<span className="text-gradient-primary">Intelligence Artificielle</span></>}
      subtitle="Intégration ChatGPT, assistants sur mesure et automatisation. Transformez votre activité avec l'IA dès aujourd'hui."
    >
    <Section eyebrow="// écosystème" title={<>Des modèles <span className="text-gradient-primary">et usages variés</span></>}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {[
          {
            title: "Assistant généraliste & rédaction",
            desc: "ChatGPT, Claude, Gemini et Copilot pour la rédaction, la structuration, les réponses internes et les premiers assistants utiles aux équipes.",
            tags: ["ChatGPT", "Claude", "Gemini", "Copilot"],
            tint: "from-sky-500/20 to-cyan-500/10",
          },
          {
            title: "Recherche, analyse & cadrage",
            desc: "Perplexity, Grok et d'autres outils de recherche augmentée pour comparer, synthétiser et préparer des réponses ou des contenus mieux cadrés.",
            tags: ["Perplexity", "Grok", "Recherche augmentée"],
            tint: "from-fuchsia-500/20 to-violet-500/10",
          },
          {
            title: "Création & support de production",
            desc: "Midjourney, DALL·E ou outils similaires quand il faut produire des visuels, illustrer une idée ou accélérer une chaîne de contenu.",
            tags: ["Midjourney", "DALL·E", "Contenu visuel"],
            tint: "from-amber-500/20 to-orange-500/10",
          },
        ].map((group) => (
          <div key={group.title} className="glass-strong rounded-3xl border border-border/40 p-6 overflow-hidden relative">
            <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${group.tint} opacity-70`} />
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold mb-3">{group.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{group.desc}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full bg-background/40 border border-primary/20 text-foreground/85">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="// secteurs" title={<>L'IA au service de <span className="text-gradient-primary">tous les métiers</span></>}>
      <Tabs
        tabs={[
          { label: "Marketing", content: <MetierCard title="Marketing & Communication" desc="Génération de contenus, campagnes email personnalisées, analyse sentiment avis." gain="Gain de temps observé sur la création de contenu (missions similaires)" /> },
          { label: "Commerce", content: <MetierCard title="Commerce & Vente" desc="Chatbot support, recommandations produits, analyse prédictive." gain="Meilleure réactivité client sur les usages déployés" /> },
          { label: "RH", content: <MetierCard title="Ressources Humaines" desc="Tri automatique de CV, questions d'entretien, satisfaction employés." gain="Réduction du temps de pré-qualification" /> },
          { label: "Finance", content: <MetierCard title="Finance & Comptabilité" desc="Saisie comptable, détection d'anomalies, rapports auto." gain="Moins de temps sur les tâches répétitives" /> },
          { label: "Santé", content: <MetierCard title="Santé & Médical" desc="Aide à la structuration de dossiers, plannings, synthèses internes — hors diagnostic médical." gain="Organisation et synthèse accélérées" /> },
          { label: "Juridique", content: <MetierCard title="Juridique & Droit" desc="Analyse contrats, jurisprudence, docs légaux." gain="Recherches et synthèses nettement plus rapides" /> },
        ]}
      />
    </Section>

    <Section eyebrow="// services" title={<>4 services <span className="text-gradient-primary">IA</span></>}>
      <FeatureGrid
        items={[
          { icon: Bot, title: "Intégration ChatGPT", desc: "Config entreprise, API OpenAI personnalisée, automatisation service client.", bullets: ["API OpenAI sur mesure", "Automatisation support", "Formation des équipes", "Présentiel ou distanciel"] },
          { icon: Brain, title: "Assistants IA sur-mesure", desc: "GPT personnalisés avec vos données métier et workflows.", bullets: ["GPT spécialisés métier", "Prompt engineering avancé", "Intégration workflows", "Maintenance continue"] },
          { icon: Workflow, title: "Automatisation Intelligente", desc: "Audit de process, workflows multi-IA, gains mesurables.", bullets: ["Audit des processus", "Workflows multi-IA", "Gains mesurés sur mission", "Suivi des résultats"] },
          { icon: GraduationCap, title: "Formation & Accompagnement", desc: "ChatGPT, prompt engineering, bonnes pratiques.", bullets: ["Tous niveaux", "Présentiel/distanciel", "Attestation Klyon", "Support post-formation"] },
        ]}
      />
    </Section>

    <Section eyebrow="// expertise" title={<>L'IA, <span className="text-gradient-primary">en pratique</span></>}>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            title: "Cadrer l'usage",
            desc: "On part d'un besoin réel: support, contenu, recherche interne, qualification ou gain de temps sur des tâches déjà identifiées.",
          },
          {
            title: "Déployer proprement",
            desc: "Assistant simple, automatisation connectée ou intégration d'API: le bon niveau d'IA dépend de l'usage, pas de l'effet d'annonce.",
          },
          {
            title: "Former les équipes",
            desc: "L'enjeu n'est pas juste d'ouvrir ChatGPT. Il faut expliquer les bons réflexes, les limites, les prompts utiles et les cas d'usage rentables.",
          },
        ].map((item) => (
          <div key={item.title} className="glass-strong rounded-2xl border border-border/40 p-6">
            <h3 className="font-display text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="// avant · après" title={<>Ce que change un <span className="text-gradient-primary">cadrage IA</span></>}>
      <BeforeAfter {...beforeAfterFlows.ia} />
    </Section>

    <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
      <Steps items={[...klyonProcessSteps]} />
    </Section>

    <Section eyebrow="// confidentialité" title={<>Données & <span className="text-gradient-primary">RGPD</span></>}>
      <div className="glass-strong rounded-2xl border border-border/40 p-6 max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Les usages IA sont cadrés en tenant compte de la confidentialité : périmètre des données traitées, outils autorisés, règles internes et bonnes pratiques pour les informations sensibles. L'objectif est un déploiement utile, pas un bricolage qui expose vos données.
        </p>
      </div>
    </Section>

      <PageCTA title="Prêt à déployer l'IA chez vous ?" desc="Premier contact : audit gratuit de vos process et identification des opportunités concrètes." />
    </PageLayout>
  </>
);

const MetierCard = ({ title, desc, gain }: { title: string; desc: string; gain: string }) => (
  <div className="glass-strong rounded-2xl p-6 border border-primary/20">
    <h3 className="font-display font-semibold text-xl mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{desc}</p>
    <div className="inline-flex items-center gap-2 text-sm font-mono px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary">
      <Sparkles className="w-3.5 h-3.5" /> {gain}
    </div>
  </div>
);

export default IA;
