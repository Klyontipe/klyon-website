import { motion } from "framer-motion";
import { Compass, Layers3, MapPinned, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Un réflexe simple",
    desc: "Quand il y a un problème, Klyon entre en jeu. Bug, besoin métier, automatisation, site, support ou infrastructure: l'objectif reste toujours le même, débloquer vite et livrer proprement.",
  },
  {
    icon: Layers3,
    title: "Un prestataire large, pas bloqué dans une case",
    desc: "IA, développement, maintenance, téléphonie, support technique, hébergement, accompagnement d'association ou d'entreprise: Klyon couvre plusieurs sujets pour éviter les allers-retours inutiles.",
  },
  {
    icon: MapPinned,
    title: "Basé dans le Sud, disponible partout",
    desc: "Originaire d'Allauch, Klyon travaille naturellement dans le Sud, mais les missions peuvent se faire à distance partout en France, avec déplacement possible selon le besoin.",
  },
  {
    icon: Compass,
    title: "Une logique orientée solution",
    desc: "Pas de sur-promesse, pas de blabla technique inutile. L'idée est simple: comprendre vite, proposer la bonne approche, puis prendre en charge le sujet jusqu'à ce qu'il soit réellement résolu.",
  },
];

const WhyKlyon = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-primary mb-3">// 04A · POURQUOI KLYON</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Un prestataire qui prend en charge <span className="text-gradient-primary">les vrais problèmes</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Klyon n'est pas là pour vendre une case précise. L'idée est d'intervenir là où il faut, sur le bon sujet, au bon niveau, pour que le problème cesse réellement d'en être un.
          </p>
        </div>

        <div className="grid xl:grid-cols-12 gap-5 items-start">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-4 glass-strong rounded-3xl border border-border/40 p-5 md:p-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background/20">
              <img
                src="/photopro.jpg"
                alt="Portrait de Lorenzo Fortini"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/55 to-transparent p-4 md:p-5">
                <div className="font-display text-xl font-semibold">Lorenzo Fortini</div>
                <div className="text-xs font-mono text-primary mt-1">KLYON · IA · dev · support · infra</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Un seul interlocuteur pour cadrer, corriger, automatiser, déployer et maintenir. Un service premium, pas une usine : quand le sujet est concret, Klyon prend le relais jusqu'à ce qu'il soit réglé.
            </p>
          </motion.aside>

          <div className="xl:col-span-8 grid md:grid-cols-2 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-strong rounded-3xl border border-border/40 p-6 md:p-7"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKlyon;
