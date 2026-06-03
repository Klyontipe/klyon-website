import { Zap, MessageCircle, Database } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { Section, FeatureGrid, Steps, PageCTA, StatGrid, BeforeAfter } from "@/components/PageBlocks";
import { beforeAfterFlows } from "@/data/beforeAfterFlows";
import { klyonProcessSteps } from "@/data/klyonProcess";

const Automatisations = () => (
  <>
    <Seo
      title="Automatisations métier — Klyon"
      description="Automatisations Zapier, N8N, Make et scripts Python sur mesure. Klyon met en place des workflows fiables pour réduire les tâches répétitives."
      path="/automatisations"
    />
    <PageLayout
      eyebrow="// MODULE · AUTOMATION"
      title={<>Automatisez vos <span className="text-gradient-primary">processus</span></>}
      subtitle="Zapier, N8N, Make, scripts Python sur mesure. Éliminez les tâches répétitives et libérez du temps à valeur ajoutée."
    >
    <Section eyebrow="// avant · après" title={<>Un flux concret <span className="text-gradient-primary">automatisé</span></>}>
      <BeforeAfter {...beforeAfterFlows.automatisations} />
    </Section>

    <Section eyebrow="// exemples" title={<>Cas d'usage <span className="text-gradient-primary">concrets</span></>}>
      <FeatureGrid
        items={[
          { icon: MessageCircle, title: "Prise de notes auto", desc: "Récap de réunion généré et envoyé par email automatiquement.", bullets: ["Zapier + N8N", "Transcription IA", "Envoi auto par email", "Archivage cloud"] },
          { icon: Zap, title: "Assistant Telegram", desc: "Mini-assistant Telegram répondant aux questions fréquentes.", bullets: ["Scripts Python", "API Telegram", "Réponses contextuelles", "Logs des échanges"] },
          { icon: Database, title: "Synchronisation de données", desc: "Synchro CRM ↔ tableur ↔ base de données sans intervention.", bullets: ["Zapier / N8N", "Airtable", "Scripts personnalisés", "Mapping automatique"] },
        ]}
      />
    </Section>

    <Section eyebrow="// résultats" title={<>Bénéfices <span className="text-gradient-primary">observés</span></>}>
      <StatGrid
        items={[
          { value: "−70%", label: "Temps gagné", desc: "Sur des tâches répétitives automatisées (missions similaires)." },
          { value: "3–6 mois", label: "ROI typique", desc: "Retour visible quand le flux remplace une ressaisie régulière." },
          { value: "−95%", label: "Erreurs de saisie", desc: "Mesuré sur le projet AutoProposal — voir réalisations." },
          { value: "+40%", label: "Productivité", desc: "Temps libéré pour des tâches à plus forte valeur." },
        ]}
      />
    </Section>

    <Section eyebrow="// méthode" title={<>Comment on <span className="text-gradient-primary">avance</span></>}>
      <Steps items={[...klyonProcessSteps]} />
    </Section>

      <PageCTA title="Prêt à automatiser un vrai sujet métier ?" desc="Le plus simple est de partir d'une tâche répétitive, d'un flux de données ou d'une ressaisie à supprimer, puis de cadrer l'automatisation utile." />
    </PageLayout>
  </>
);

export default Automatisations;
