import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Code2, Wrench, Server, Zap } from "lucide-react";

type Service = {
  id: string;
  label: string;
  icon: typeof Sparkles;
  desc: string;
  href: string;
  x: number;
  y: number;
  labelPosition?: "above" | "below";
  tooltipPosition?: "above" | "below";
};

const services: Service[] = [
  { id: "ai", label: "Intelligence Artificielle", icon: Sparkles, desc: "Assistants sur-mesure, prompt engineering, automatisation IA. Intégration des principaux modèles du marché.", href: "/ia", x: 18, y: 22 },
  { id: "dev", label: "Développement", icon: Code2, desc: "Sites web, backends, applications métier, interfaces et intégrations sur mesure.", href: "/developpement", x: 78, y: 18 },
  { id: "support", label: "Services Info", icon: Wrench, desc: "Montage PC, installation OS & logiciels, support technique, maintenance et accompagnement utilisateur.", href: "/services-info", x: 82, y: 62, tooltipPosition: "above" },
  { id: "automation", label: "Automatisations", icon: Zap, desc: "n8n, Zapier, Make et scripts Python pour supprimer les tâches répétitives et fiabiliser les flux.", href: "/automatisations", x: 50, y: 76, labelPosition: "above", tooltipPosition: "above" },
  { id: "infra", label: "Infrastructure", icon: Server, desc: "NAS, sauvegardes, synchronisation, DNS, services internes et téléphonie technique.", href: "/infrastructure", x: 18, y: 65, tooltipPosition: "above" },
];

const ServicesNetwork = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <div className="font-mono text-xs text-primary mb-3">// 02 · MODULES</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Un <span className="text-gradient-primary">réseau d'expertises</span><br />
            connectées entre elles.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            IA, développement, automatisation, support et infrastructure. Chaque pôle reste lisible seul, mais peut aussi se combiner avec les autres quand le besoin dépasse un simple sujet isolé.
          </p>
        </div>

        <div className="grid gap-4 md:hidden">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                to={s.href}
                className="glass-strong rounded-2xl border border-border/40 p-5 transition-all hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-primary mb-1">0{i + 1}</div>
                    <h3 className="font-display text-lg font-semibold mb-1">{s.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-3 text-[11px] font-mono text-primary">▸ Voir la page</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="relative hidden md:block h-[600px] lg:h-[560px] glass-strong rounded-3xl p-6 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(270 95% 65%)" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {services.map((s, i) =>
              services.slice(i + 1).map((t, j) => (
                <motion.line
                  key={`${s.id}-${t.id}`}
                  x1={`${s.x}%`}
                  y1={`${s.y}%`}
                  x2={`${t.x}%`}
                  y2={`${t.y}%`}
                  stroke="url(#line)"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: (i + j) * 0.05 }}
                />
              ))
            )}
          </svg>

          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 180, damping: 18 }}
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <Link to={s.href} className="block relative">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:bg-primary/60 transition-all duration-500" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full glass-strong flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 text-xs font-mono text-foreground/80 whitespace-nowrap ${
                      s.labelPosition === "above" ? "bottom-full mb-2" : "top-full mt-2"
                    }`}
                  >
                    {s.label}
                  </div>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-64 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 z-20 ${
                      s.tooltipPosition === "above"
                        ? "bottom-full mb-12 translate-y-2 group-hover:translate-y-0"
                        : "top-full mt-12 -translate-y-2 group-hover:translate-y-0"
                    }`}
                  >
                    <div className="glass-strong rounded-xl p-4 border border-primary/30 shadow-glow-soft">
                      <div className="font-display font-semibold text-sm mb-1 text-gradient">{s.label}</div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
                      <div className="text-[10px] font-mono text-primary">▸ Voir la page</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="text-[10px] font-mono text-muted-foreground/60 tracking-widest">KLYON.CORE</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNetwork;
