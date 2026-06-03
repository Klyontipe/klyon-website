import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lines = [
  "> KLYON://core.boot",
  "> loading modules ........... ok",
  "> linking ai · dev · support .. ok",
  "> calibrating automation ..... ok",
  "> KLYON SYSTEM INITIALIZED",
];

const BootIntro = ({ onDone }: { onDone: () => void }) => {
  const [step, setStep] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep((s) => s + 1), 320);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 700);
    }, 700);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 bg-gradient-radial" />

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100vh" }}
            transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow-soft"
          />

          {[
            "top-6 left-6 border-l-2 border-t-2",
            "top-6 right-6 border-r-2 border-t-2",
            "bottom-6 left-6 border-l-2 border-b-2",
            "bottom-6 right-6 border-r-2 border-b-2",
          ].map((c, i) => (
            <div key={i} className={`absolute w-10 h-10 border-primary/70 ${c}`} />
          ))}

          <div className="relative z-10 w-full max-w-xl px-6 font-mono text-sm">
            {lines.slice(0, step).map((l, i) => {
              const last = i === lines.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    last
                      ? "mt-4 text-2xl md:text-3xl font-display font-bold text-gradient-primary tracking-wider"
                      : "text-primary/80"
                  }
                >
                  {l}
                  {last && <span className="ml-1 inline-block w-3 h-6 bg-primary align-middle animate-blink" />}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootIntro;
