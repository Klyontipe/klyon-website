import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const phrases = [
  { q: "Vous perdez du temps sur ChatGPT ?", a: "Je forme votre équipe." },
  { q: "Claude entre dans vos process sans méthode ?", a: "Je cadre l'usage." },
  { q: "Gemini vous aide, mais rien n'est structuré ?", a: "Je mets le cadre." },
  { q: "Grok vous intrigue, mais personne ne sait l'utiliser ?", a: "Je rends ça utile." },
  { q: "Votre standard vous fait perdre des appels ?", a: "Je l'automatise." },
  { q: "Vos équipes copient-colle toute la journée ?", a: "Je supprime la tâche." },
  { q: "Votre site est lent ou daté ?", a: "Je le refonds proprement." },
  { q: "Vos outils ne communiquent pas ?", a: "Je fais le lien." },
  { q: "Vous recevez trop de demandes répétitives ?", a: "Je crée l'assistant qu'il faut." },
  { q: "Votre infrastructure devient fragile ?", a: "Je la stabilise." },
  { q: "Votre association manque d'outils fiables ?", a: "Je construis la base." },
  { q: "Vous avez un besoin urgent côté IT ?", a: "Je prends le sujet." },
  { q: "Vous voulez gagner du temps sans recruter ?", a: "J'automatise le flux." },
  { q: "Votre téléphonie mérite mieux qu'un répondeur ?", a: "Je déploie la solution." },
  { q: "Votre saisie de PDF vous épuise ?", a: "J'automatise tout." },
  { q: "Une requête SQL met 30 secondes ?", a: "Je l'optimise à 0,2 s." },
];

const RotatingStatement = () => {
  const shuffledPhrases = useMemo(() => {
    const items = [...phrases];
    for (let j = items.length - 1; j > 0; j -= 1) {
      const k = Math.floor(Math.random() * (j + 1));
      [items[j], items[k]] = [items[k], items[j]];
    }
    return items;
  }, []);
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % shuffledPhrases.length), 3500);
    return () => clearInterval(t);
  }, [shuffledPhrases.length]);

  const item = shuffledPhrases[i];

  return (
    <div className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground space-y-2 min-h-[3.2rem] max-w-full overflow-hidden">
      <div className="flex flex-wrap items-start gap-x-2 gap-y-1 min-w-0">
        <span className="text-primary shrink-0">▸</span>
        <span className="text-primary/70 shrink-0">input</span>
        <span className="text-muted-foreground/60 shrink-0">::</span>
        <motion.span
          key={"q" + i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-foreground/80 min-w-0 break-words"
        >
          {item.q}
        </motion.span>
      </div>
      <div className="flex flex-wrap items-start gap-x-2 gap-y-1 min-w-0">
        <span className="text-secondary shrink-0">▸</span>
        <span className="text-secondary/80 shrink-0">klyon</span>
        <span className="text-muted-foreground/60 shrink-0">::</span>
        <motion.span
          key={"a" + i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gradient font-semibold min-w-0 break-words"
        >
          {item.a}
        </motion.span>
        <span className="inline-block w-2 h-4 bg-primary/80 animate-blink shrink-0" />
      </div>
    </div>
  );
};

export default RotatingStatement;
