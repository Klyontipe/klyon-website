import { motion } from "framer-motion";
import { Building2, User, HeartHandshake, Landmark } from "lucide-react";

const targets = [
  { icon: Building2, title: "Entreprises & PME", desc: "IA, dev sur-mesure et support. Vous gagnez du temps, vos équipes respirent, vos process scalent." },
  { icon: User, title: "Particuliers", desc: "Réparation smartphones, upgrade PC, installation logiciels. Service express 24-48h, garantie 6 mois." },
  { icon: HeartHandshake, title: "Associations", desc: "Outils accessibles pour gérer membres, dons, événements. Accompagnement humain, tarifs adaptés." },
  { icon: Landmark, title: "Collectivités", desc: "Infrastructure, formation, intégration. Interventions sur site ou à distance." },
];

const ForWho = () => {
  return (
    <section className="relative py-28">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-primary mb-3">// 05 · CLIENTÈLE</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Pour ceux qui veulent que <span className="text-gradient-primary">leur outil bosse</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Sur site ou à distance · Lundi → Samedi, 8h–20h · Réponse sous 24h.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {targets.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl glass-strong flex items-center justify-center border border-primary/20 group-hover:border-primary group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-5">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t.desc}</p>
                  <div className="mt-5 h-px w-8 bg-gradient-to-r from-primary to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
