import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Section = ({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title?: ReactNode; children: ReactNode }) => (
  <section id={id} className="relative py-20">
    <div className="container">
      {(eyebrow || title) && (
        <div className="max-w-2xl mb-12">
          {eyebrow && <div className="font-mono text-xs text-primary mb-3">{eyebrow}</div>}
          {title && <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>}
        </div>
      )}
      {children}
    </div>
  </section>
);

export const FeatureGrid = ({ items }: { items: { icon?: LucideIcon; title: string; desc: string; bullets?: string[] }[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
    {items.map((it, i) => {
      const Icon = it.icon;
      return (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group glass-strong rounded-2xl p-6 border border-border/40 hover:border-primary/40 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] text-primary">0{i + 1}</span>
            {Icon && (
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
            )}
          </div>
          <h3 className="font-display font-semibold text-lg mb-2">{it.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          {it.bullets && (
            <ul className="mt-4 space-y-1.5">
              {it.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      );
    })}
  </div>
);

export const Tabs = ({ tabs }: { tabs: { label: string; content: ReactNode }[] }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border/40 pb-3">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`text-xs font-mono px-4 py-2 rounded-full border transition-all ${
              active === i
                ? "bg-primary text-primary-foreground border-primary shadow-glow-soft"
                : "border-border/60 text-muted-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {tabs[active].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Steps = ({ items }: { items: { title: string; desc: string }[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((s, i) => (
      <motion.div
        key={s.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="relative glass-strong rounded-2xl p-5 border border-border/40"
      >
        <div className="text-3xl font-display font-bold text-gradient-primary mb-2">0{i + 1}</div>
        <h4 className="font-semibold mb-1.5">{s.title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
      </motion.div>
    ))}
  </div>
);

export const StatGrid = ({ items }: { items: { value: string; label: string; desc: string }[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
    {items.map((s, i) => (
      <motion.div
        key={s.label}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="glass-strong rounded-2xl p-5 border border-primary/20 text-center"
      >
        <div className="font-mono text-[10px] text-muted-foreground mb-2">0{i + 1}</div>
        <div className="text-4xl font-display font-bold text-gradient-primary mb-2">{s.value}</div>
        <div className="font-semibold text-sm mb-1">{s.label}</div>
        <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
      </motion.div>
    ))}
  </div>
);

export const Faq = ({ items }: { items: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2 max-w-3xl">
      {items.map((it, i) => (
        <div key={it.q} className="glass-strong rounded-xl border border-border/40 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-primary/5 transition-colors"
          >
            <span className="font-medium text-sm">{it.q}</span>
            <ChevronDown className={`w-4 h-4 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export const TagCloud = ({ groups }: { groups: { title: string; tags: string[] }[] }) => (
  <div className="grid md:grid-cols-3 gap-5">
    {groups.map((g) => (
      <div key={g.title} className="glass-strong rounded-2xl p-5 border border-border/40">
        <div className="font-mono text-xs text-primary mb-3">{g.title}</div>
        <div className="flex flex-wrap gap-2">
          {g.tags.map((t) => (
            <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-foreground/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const BeforeAfter = ({
  title,
  before,
  after,
  source,
}: {
  title: string;
  before: { label: string; items: string[] };
  after: { label: string; items: string[] };
  source?: string;
}) => (
  <div className="glass-strong rounded-3xl border border-border/40 p-6 md:p-8">
    <h3 className="font-display text-xl md:text-2xl font-semibold mb-6">{title}</h3>
    <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch">
      <div className="rounded-2xl border border-border/50 bg-background/20 p-4 sm:p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">{before.label}</div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {before.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-muted-foreground/60 shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:hidden items-center justify-center text-xl text-primary font-mono py-1">↓</div>
      <div className="hidden md:flex items-center justify-center text-2xl text-primary font-mono">→</div>
      <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">{after.label}</div>
        <ul className="space-y-2 text-sm text-foreground/90">
          {after.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {source && (
      <p className="mt-5 text-xs font-mono text-muted-foreground border-t border-border/40 pt-4">{source}</p>
    )}
  </div>
);

export const PageCTA = ({ title, desc }: { title: string; desc: string }) => (
  <section className="relative py-20 md:py-24">
    <div className="container">
      <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-14 border border-primary/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="relative">
          <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-7">{desc}</p>
          <Link
            to="/devis"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-mono text-sm shadow-glow-soft hover:scale-105 transition-transform"
          >
            ▸ Discuter d'un projet
          </Link>
        </div>
      </div>
    </div>
  </section>
);
