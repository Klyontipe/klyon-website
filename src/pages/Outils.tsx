import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { PageCTA, Section } from "@/components/PageBlocks";

const Outils = () => (
  <>
    <Seo
      title="Outils et technologies maîtrisés — Klyon"
      description="Tous les outils et technologies manipulés par Klyon, classés par thèmes: IA, développement, automatisation, Microsoft et infrastructure."
      path="/outils"
    />
      <PageLayout
      eyebrow="// STACK · KLYON"
      title={<>Outils & <span className="text-gradient-primary">technologies</span></>}
      subtitle="Une vue claire des environnements, modèles, frameworks et plateformes déjà utilisés. L'idée: permettre à un visiteur de savoir rapidement si Klyon touche déjà son écosystème."
    >
      <Section eyebrow="// catalogue" title={<>Outils <span className="text-gradient-primary">répertoriés</span></>}>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {[
            {
              title: "IA & assistants",
              desc: "Les modèles conversationnels, assistants et APIs déjà utilisés pour la formation, l'intégration ou les usages métier concrets.",
              tags: ["ChatGPT", "Claude", "Gemini", "Grok", "Perplexity", "Copilot", "GPT Builder", "OpenAI API"],
              tint: "from-sky-500/20 to-cyan-500/10",
            },
            {
              title: "Automatisation",
              desc: "Les outils utilisés quand il faut relier des apps, déclencher des actions, traiter des données ou supprimer de la ressaisie.",
              tags: ["n8n", "Zapier", "Make", "Airtable", "Webhooks", "Telegram", "Slack"],
              tint: "from-violet-500/20 to-fuchsia-500/10",
            },
            {
              title: "Développement",
              desc: "Les briques utilisées pour construire des interfaces web, des backends, des bases de données et des outils métier sur mesure.",
              tags: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Python", "Flask", "PostgreSQL"],
              tint: "from-emerald-500/20 to-teal-500/10",
            },
            {
              title: "Écosystème Microsoft",
              desc: "Les outils mobilisés pour les usages collaboratifs, documentaires, Power Platform et les environnements M365 plus larges.",
              tags: ["Microsoft 365", "Teams", "SharePoint", "Power Automate", "Power Apps", "Power BI", "Copilot"],
              tint: "from-blue-500/20 to-indigo-500/10",
            },
            {
              title: "Infrastructure",
              desc: "Les technologies utilisées pour les serveurs, la téléphonie, les réseaux, le stockage et les bases techniques plus internes.",
              tags: ["Debian", "FreePBX", "Asterisk", "PJSIP", "OVH SIP", "DNS", "SSL/TLS", "Monitoring", "ffmpeg"],
              tint: "from-amber-500/20 to-orange-500/10",
            },
            {
              title: "Méthode & livraison",
              desc: "Les briques plus transversales qui servent à versionner, livrer, intégrer ou faire circuler les données proprement.",
              tags: ["Git", "GitHub", "Docker", "API REST", "SQL", "JSON", "Cloud-native", "Intégration continue"],
              tint: "from-rose-500/20 to-pink-500/10",
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

      <Section eyebrow="// lecture" title={<>Comment <span className="text-gradient-primary">interpréter</span> cette page ?</>}>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              title: "Outils déjà touchés",
              desc: "Ce n'est pas une liste décorative: l'objectif est de montrer les familles d'outils réellement approchées ou exploitées.",
            },
            {
              title: "Par thématique",
              desc: "Le classement aide un visiteur à se repérer plus vite selon son besoin: IA, dev, Microsoft, automatisation ou infrastructure.",
            },
            {
              title: "Porte d'entrée SEO",
              desc: "Cette page permet aussi de capter des recherches précises autour d'un outil ou d'une stack connue.",
            },
          ].map((item) => (
            <div key={item.title} className="glass-strong rounded-2xl border border-border/40 p-6">
              <h2 className="font-display text-2xl font-semibold mb-3">{item.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <PageCTA title="Vous cherchez une techno précise ?" desc="Si votre besoin tourne autour d'un outil, d'une stack ou d'un environnement précis, le plus simple reste de le signaler dans le devis." />
    </PageLayout>
  </>
);

export default Outils;
