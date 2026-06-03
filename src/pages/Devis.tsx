import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import emailjs from "emailjs-com";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";

const services = ["Intelligence Artificielle", "Développement", "Automatisations", "Formations", "Services Info", "Autre"];
const budgets = ["500-1k €", "1k-3k €", "3k-5k €", "5k+ €", "À discuter"];
const delays = ["Urgent (1-2 sem)", "Normal (1 mois)", "Flexible (2-3 mois)", "Long terme (3+ mois)"];
const serviceId = "service_lb38ewo";
const templateId = "template_2af96ws";
const publicKey = "ZJMuCYNkzxGhqore6";

const Pill = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3.5 py-2 rounded-full text-xs font-mono border transition-all ${
      active
        ? "border-primary bg-primary/15 text-primary shadow-glow-soft"
        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const Devis = () => {
  const [service, setService] = useState(services[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [delay, setDelay] = useState(delays[1]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const fullMessage = `
━━━━━━━━━━━━━━━━━━━━
DEMANDE DE DEVIS
━━━━━━━━━━━━━━━━━━━━

Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Entreprise : ${company || "Non renseignée"}
Service souhaité : ${service}
Budget estimé : ${budget}
Délai souhaité : ${delay}

━━━━━━━━━━━━━━━━━━━━
PROJET
━━━━━━━━━━━━━━━━━━━━
${message}
    `.trim();

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          from_phone: phone,
          company: company || "",
          service_type: service,
          budget,
          timeline: delay,
          message: fullMessage,
          to_name: "Lorenzo",
          to_email: "klyonme@gmail.com",
        },
        publicKey
      );
      setSent(true);
      form.reset();
      setService(services[0]);
      setBudget(budgets[0]);
      setDelay(delays[1]);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("EmailJS devis send failed", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo
        title="Demander un devis — Klyon"
        description="Demandez un devis Klyon pour un projet en IA, développement, automatisation, maintenance, formation ou support informatique."
        path="/devis"
      />
      <PageLayout
        eyebrow="// MODULE · ESTIMATION"
        title={<>Demander un <span className="text-gradient-primary">devis</span></>}
        subtitle="Décrivez votre projet en quelques champs. Réponse sous 24 h ouvrées avec une proposition adaptée à votre budget et vos délais."
      >
      <section className="relative pb-24">
        <div className="container max-w-3xl">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong rounded-3xl p-6 md:p-8 space-y-6 border border-border/40 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/15 blur-3xl rounded-full pointer-events-none" />

            <div className="grid sm:grid-cols-2 gap-5 relative">
              <Field label="nom" name="name" required />
              <Field label="email" name="email" type="email" required />
              <Field label="téléphone" name="phone" type="tel" />
              <Field label="entreprise" name="company" />
            </div>

            <Group label="service souhaité">
              {services.map((s) => (
                <Pill key={s} active={service === s} onClick={() => setService(s)}>{s}</Pill>
              ))}
            </Group>

            <Group label="budget estimé">
              {budgets.map((b) => (
                <Pill key={b} active={budget === b} onClick={() => setBudget(b)}>{b}</Pill>
              ))}
            </Group>

            <Group label="délai souhaité">
              {delays.map((d) => (
                <Pill key={d} active={delay === d} onClick={() => setDelay(d)}>{d}</Pill>
              ))}
            </Group>

            <label className="block">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">décrivez votre projet</span>
              <textarea
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Décrivez vos objectifs, contraintes, contexte et livrables attendus…"
                className="w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all resize-none placeholder:text-muted-foreground/50"
              />
            </label>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                réponse sous 24 h ouvrées · diagnostic offert
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow-soft hover:shadow-glow-primary transition-all"
              >
                {sent ? (<><Check className="w-4 h-4" /> Transmis</>) : sending ? (<><Send className="w-4 h-4" /> Envoi...</>) : (<><Send className="w-4 h-4" /> Envoyer la demande</>)}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
      </PageLayout>
    </>
  );
};

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <label className="block">
    <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
    <input
      name={name}
      type={type}
      required={required}
      maxLength={255}
      placeholder={`Votre ${label}`}
      className="w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all placeholder:text-muted-foreground/50"
    />
  </label>
);

const Group = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

export default Devis;
