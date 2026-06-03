const phrases = [
  "INTELLIGENCE ARTIFICIELLE",
  "DÉVELOPPEMENT SUR-MESURE",
  "SUPPORT & MAINTENANCE",
  "AUTOMATISER · OPTIMISER · LIBÉRER",
  "VOTRE PROBLÈME · MA SOLUTION",
];

const Marquee = () => {
  const items = [...phrases, ...phrases];
  return (
    <div className="relative py-6 md:py-8 border-y border-border/50 bg-surface/40 overflow-hidden">
      <div className="flex w-max animate-ticker gap-12 whitespace-nowrap">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 font-display text-lg sm:text-2xl md:text-4xl font-bold">
            <span className="text-gradient">{p}</span>
            <span className="text-primary text-2xl md:text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
