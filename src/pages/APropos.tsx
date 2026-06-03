import { MapPin, ShieldCheck, TimerReset, UserRound } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import { PageCTA, Section } from "@/components/PageBlocks";

const APropos = () => (
  <>
    <Seo
      title="À propos de Klyon — Lorenzo Fortini"
      description="Klyon, c'est une approche directe, technique et suivie: un interlocuteur unique pour résoudre des besoins concrets en IA, développement, support et infrastructure."
      path="/a-propos"
    />
    <PageLayout
      eyebrow="// KLYON · À PROPOS"
      title={<>Une structure <span className="text-gradient-primary">incarnée</span></>}
      subtitle="Klyon avance avec une logique simple: prendre des besoins concrets, les cadrer proprement, puis livrer une réponse technique claire, durable et suivie."
    >
      <Section eyebrow="// présentation" title={<>Ce qu'est <span className="text-gradient-primary">Klyon</span></>}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div className="glass-strong rounded-3xl border border-border/40 overflow-hidden min-h-[420px]">
            <img src="/photopro.jpg" alt="Lorenzo Fortini" className="h-full w-full object-cover" />
          </div>
          <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8">
            <div className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Lorenzo Fortini
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Klyon ne se résume pas à une liste de compétences. Lorenzo Fortini accompagne des besoins réels — IA, développement, automatisation, support ou infrastructure — avec un niveau d'implication qui reste lisible et suivi.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Formé en informatique et actif depuis plusieurs années sur des missions variées (entreprises, associations, particuliers), Lorenzo a construit Klyon autour d'une idée simple : un service premium, un interlocuteur unique, un travail sérieux derrière chaque livrable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Basé à Allauch, Klyon intervient dans le Sud, à distance partout en France, et peut se déplacer selon la mission. L'approche reste volontairement claire: un cadre propre, un interlocuteur unique, et des solutions pensées pour tenir dans la durée.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="// méthode" title={<>La manière de <span className="text-gradient-primary">travailler</span></>}>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            {
              icon: UserRound,
              title: "Interlocuteur unique",
              desc: "Le cadrage, la réalisation et le suivi ne sont pas éclatés entre plusieurs couches.",
            },
            {
              icon: TimerReset,
              title: "Réponse rapide",
              desc: "L'objectif est d'éclaircir le besoin vite, puis de proposer la bonne voie sans détour.",
            },
            {
              icon: ShieldCheck,
              title: "Vision complète",
              desc: "Développement, IA, infra, support: les sujets peuvent se parler entre eux au lieu d'être cloisonnés.",
            },
            {
              icon: MapPin,
              title: "Terrain + distance",
              desc: "Ancrage local dans le Sud, mais organisation pensée pour fonctionner aussi à distance.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-strong rounded-2xl border border-border/40 p-6">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-3">{item.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <PageCTA title="Un besoin à cadrer proprement ?" desc="Le plus simple reste de partir du besoin réel: Klyon aide ensuite à le traduire en plan d'action ou en offre adaptée." />
    </PageLayout>
  </>
);

export default APropos;
