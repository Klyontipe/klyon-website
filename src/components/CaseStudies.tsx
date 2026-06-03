import { motion } from "framer-motion";
import { FileText, Cpu, Database, ArrowRight, CheckCircle2, ShoppingBag, Zap } from "lucide-react";

type Case = {
  tag: string;
  title: string;
  steps: { icon: typeof FileText; label: string }[];
  metric: { value: string; label: string };
};

const cases: Case[] = [
  {
    tag: "SHOPIFY → CRM",
    title: "Intégration Shopify avec CRM sur-mesure (Python / Flask / Webhooks)",
    steps: [
      { icon: ShoppingBag, label: "Commande Shopify" },
      { icon: Zap, label: "Webhook JSON" },
      { icon: Database, label: "CRM mis à jour" },
    ],
    metric: { value: "Live", label: "synchro automatique" },
  },
  {
    tag: "PDF → FACTURATION",
    title: "AutoProposal — génération auto de propositions commerciales & factures (Python)",
    steps: [
      { icon: FileText, label: "Brief PDF" },
      { icon: Cpu, label: "Génération auto" },
      { icon: FileText, label: "Propale livrée" },
    ],
    metric: { value: "+80%", label: "gain de temps · -95% erreurs" },
  },
  {
    tag: "POSTGRESQL · OPTIM",
    title: "Indexation + vues matérialisées · de 30s à 0.2s",
    steps: [
      { icon: Database, label: "Audit SQL" },
      { icon: Cpu, label: "Indexation" },
      { icon: Zap, label: "Réponse 0.2s" },
    ],
    metric: { value: "−99.3%", label: "temps de requête" },
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-primary mb-3">// 03 · CASE FLOWS</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Des résultats <span className="text-gradient-primary">mesurables</span>.<br />
            Pas des slides.
          </h2>
          <p className="text-muted-foreground mt-4">
            32+ projets livrés · 6 secteurs couverts · 5/5 avis Google.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-3">
                  <div className="font-mono text-[10px] text-primary mb-2">{c.tag}</div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{c.title}</h3>
                </div>

                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 md:gap-4 overflow-x-auto">
                    {c.steps.map((s, si) => {
                      const Icon = s.icon;
                      return (
                        <div key={si} className="flex items-center gap-2 md:gap-4 shrink-0">
                          <motion.div
                            initial={{ opacity: 0.3 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: si * 0.3 }}
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center border border-primary/20 group-hover:border-primary/60 group-hover:shadow-glow-soft transition-all">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-[10px] font-mono text-muted-foreground whitespace-nowrap">{s.label}</span>
                          </motion.div>
                          {si < c.steps.length - 1 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: si * 0.3 + 0.15, duration: 0.5 }}
                              className="origin-left"
                            >
                              <ArrowRight className="w-4 h-4 text-primary/60" />
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary leading-none">
                    {c.metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1 md:justify-end">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                    {c.metric.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
