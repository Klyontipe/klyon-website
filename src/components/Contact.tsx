import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Send, Mail, Phone, Check, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const subjects = [
  "Intelligence Artificielle",
  "Développement Web",
  "Réparation Informatique",
  "Formation",
  "Autre",
];

const serviceId = "service_lb38ewo";
const templateId = "template_2af96ws";
const publicKey = "ZJMuCYNkzxGhqore6";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState(subjects[0]);
  const [contactOpen, setContactOpen] = useState(false);

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
NOUVEAU MESSAGE KLYON
━━━━━━━━━━━━━━━━━━━━

Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Entreprise / projet : ${company || "Non renseigné"}
Service : ${subject}

━━━━━━━━━━━━━━━━━━━━
MESSAGE
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
          service_type: subject,
          message: fullMessage,
          to_email: "klyonme@gmail.com",
        },
        publicKey
      );
      setSent(true);
      form.reset();
      setSubject(subjects[0]);
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("EmailJS contact send failed", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-primary mb-3">// 06 · TRANSMISSION</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Décrivez votre <span className="text-gradient-primary">projet</span>.<br />
              Lorenzo s'occupe du reste.
            </h2>
            <p className="text-muted-foreground mt-4">
              Réponse sous 24h en moyenne. Diagnostic offert. Lun–Samedi, 8h–20h.
            </p>

            <div className="mt-8 space-y-3">
              <a href="tel:+33766980342" className="flex items-center gap-3 glass rounded-xl p-3 hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-4 h-4 text-primary" /></div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">appel direct</div>
                  <div className="font-medium group-hover:text-primary transition-colors">07 66 98 03 42</div>
                </div>
              </a>
              <a href="mailto:klyonme@gmail.com" className="flex items-center gap-3 glass rounded-xl p-3 hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">email</div>
                  <div className="font-medium group-hover:text-primary transition-colors">klyonme@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/zl3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass rounded-xl p-3 hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><Linkedin className="w-4 h-4 text-primary" /></div>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">linkedin</div>
                  <div className="font-medium group-hover:text-primary transition-colors">Lorenzo Fortini</div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-6 md:p-8 space-y-5 relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/15 blur-3xl rounded-full pointer-events-none" />

              <div className="grid sm:grid-cols-2 gap-5 relative">
                <Field label="nom" name="name" required maxLength={100} />
                <Field label="email" name="email" type="email" required maxLength={255} />
                <Field label="téléphone" name="phone" type="tel" maxLength={30} />
              </div>
              <Field label="entreprise / projet" name="company" maxLength={150} />

              <label className="block">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">sujet</span>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSubject(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                        subject === s
                          ? "border-primary bg-primary/15 text-primary shadow-glow-soft"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </label>

              <FieldArea label="votre projet" name="message" required maxLength={1500} />

              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  réponse sous 24 h ouvrées
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="magnetic-cta inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow-soft hover:shadow-glow-primary transition-all"
                >
                  {sent ? (
                    <>
                      <Check className="w-4 h-4" /> Transmis
                    </>
                  ) : sending ? (
                    <>
                      <Send className="w-4 h-4" /> Envoi...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Envoyer
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
        {contactOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="glass-strong w-[260px] rounded-2xl border border-primary/30 p-4 shadow-glow-soft"
          >
            <div className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">
              Contact rapide
            </div>
            <div className="space-y-3">
              <a
                href="tel:+33766980342"
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/20 px-3 py-3 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>07 66 98 03 42</span>
              </a>
              <a
                href="mailto:klyonme@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/20 px-3 py-3 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>klyonme@gmail.com</span>
              </a>
            </div>
          </motion.div>
        )}

        <button
          type="button"
          onClick={() => setContactOpen((value) => !value)}
          aria-label="Afficher les coordonnées de contact"
          className="relative w-14 h-14 rounded-full glass-strong flex items-center justify-center border border-primary/40 shadow-glow-soft hover:shadow-glow-primary hover:scale-110 transition-all group"
        >
          <Phone className="w-6 h-6 text-primary group-hover:text-primary-glow" />
        </button>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) => (
  <label className="block group">
    <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
    <input
      name={name}
      type={type}
      required={required}
      maxLength={maxLength}
      className="w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all placeholder:text-muted-foreground/50"
      placeholder={`Votre ${label}`}
    />
  </label>
);

const FieldArea = ({ label, name, required, maxLength }: { label: string; name: string; required?: boolean; maxLength?: number }) => (
  <label className="block">
    <span className="block text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
    <textarea
      name={name}
      required={required}
      maxLength={maxLength}
      rows={5}
      className="w-full bg-input/40 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all resize-none placeholder:text-muted-foreground/50"
      placeholder="Décrivez votre besoin, vos contraintes et votre délai…"
    />
  </label>
);

export default Contact;
