import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, CheckCircle2, AlertCircle, Zap } from "lucide-react";

const useCounter = (target: number, duration = 2000) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
};

const logs = [
  { t: "09:21:04", lvl: "ok", msg: "shopify.order → crm · 12 commandes" },
  { t: "09:18:42", lvl: "ok", msg: "autoproposal · propale PDF générée" },
  { t: "09:15:11", lvl: "ok", msg: "postgres.query · 0.18s (idx ok)" },
  { t: "09:12:38", lvl: "ok", msg: "chatgpt.api · 96.4% confidence" },
  { t: "09:09:02", lvl: "warn", msg: "stock.alert · réappro fournisseur" },
  { t: "09:04:55", lvl: "ok", msg: "support.ticket · résolu en 2h" },
];

const SystemDashboard = () => {
  const projets = useCounter(32);
  const heures = useCounter(184);
  const docs = useCounter(12480);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container">
        <div className="max-w-2xl mb-12">
          <div className="font-mono text-xs text-primary mb-3">// 04 · LIVE INTERFACE</div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            L'interface qui <span className="text-gradient-primary">travaille pour vous</span>.
          </h2>
          <p className="text-muted-foreground mt-4">
            Aperçu du type de tableau de bord livré aux clients Klyon : Shopify ↔ CRM, AutoProposal, monitoring stock 24/7. Tout est calibré pour décider vite.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl overflow-hidden border border-primary/20 shadow-glow-soft scanline"
        >
          {/* Topbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/50 bg-surface-elevated/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted-foreground">klyon.dashboard / production</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              live
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-5 p-5">
            {/* KPIs */}
            <div className="md:col-span-4 grid gap-4">
              <KpiCard icon={Activity} label="Projets livrés" value={`${projets}+`} delta="32+ total" />
              <KpiCard icon={Zap} label="Heures économisées / mois" value={`${heures}h`} delta="par client" />
              <KpiCard icon={CheckCircle2} label="Documents traités" value={docs.toLocaleString("fr-FR")} delta="autoproposal" />
            </div>

            {/* Chart */}
            <div className="md:col-span-5 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs text-muted-foreground font-mono">throughput · 24h</div>
                  <div className="text-2xl font-display font-bold text-gradient">98.7k ops</div>
                </div>
                <div className="text-xs text-primary font-mono">▲ stable</div>
              </div>
              <Chart />
              <div className="mt-4 flex justify-between text-[10px] font-mono text-muted-foreground">
                {["00", "04", "08", "12", "16", "20", "24"].map((h) => <span key={h}>{h}h</span>)}
              </div>
            </div>

            {/* Logs */}
            <div className="md:col-span-3 glass rounded-2xl p-4 overflow-hidden">
              <div className="text-xs font-mono text-muted-foreground mb-3 flex items-center justify-between">
                <span>system.logs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
              <div className="space-y-2.5 font-mono text-[10px]">
                {logs.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-2"
                  >
                    {l.lvl === "ok" ? (
                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                    ) : (
                      <AlertCircle className="w-3 h-3 mt-0.5 text-accent shrink-0" />
                    )}
                    <div className="min-w-0">
                      <span className="text-muted-foreground/70">{l.t}</span>
                      <div className="text-foreground/80 truncate">{l.msg}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Flow */}
            <div className="md:col-span-12 glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-mono text-muted-foreground">automation.flow / pipeline.invoices</div>
                <div className="text-[10px] font-mono text-primary">running</div>
              </div>
              <FlowDiagram />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const KpiCard = ({ icon: Icon, label, value, delta }: { icon: typeof Activity; label: string; value: string; delta: string }) => (
  <div className="glass rounded-2xl p-4 group hover:border-primary/40 transition-colors">
    <div className="flex items-center justify-between">
      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{label}</div>
      <Icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
    </div>
    <div className="mt-2 text-3xl font-display font-bold text-gradient">{value}</div>
    <div className="mt-1 text-xs text-primary font-mono">{delta} vs N-1</div>
  </div>
);

const Chart = () => {
  // Sparkline polyline
  const points = [40, 55, 35, 60, 48, 70, 58, 82, 64, 88, 75, 95];
  const max = Math.max(...points);
  const w = 100;
  const h = 100;
  const path = points
    .map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / max) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${path} ${w},${h}`} fill="url(#cg)" />
      <polyline points={path} fill="none" stroke="hsl(210 100% 65%)" strokeWidth="1.2" />
    </svg>
  );
};

const FlowDiagram = () => {
  const nodes = ["receive", "ocr", "classify", "validate", "push.erp", "notify"];
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2">
      {nodes.map((n, i) => (
        <div key={n} className="flex items-center gap-3 shrink-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="px-3 py-2 rounded-lg glass border border-primary/30 font-mono text-xs flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {n}
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="relative w-6 md:w-10 h-px bg-gradient-to-r from-primary/60 to-secondary/60">
              <motion.div
                animate={{ x: [0, 30] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                className="absolute -top-0.5 w-1.5 h-1.5 rounded-full bg-primary shadow-glow-soft"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SystemDashboard;
