import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  href?: string;
};

const MagneticButton = ({ children, className = "", variant = "primary", onClick, href }: Props) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 select-none";
  const styles =
    variant === "primary"
      ? "magnetic-cta bg-gradient-primary text-primary-foreground shadow-glow-soft hover:shadow-glow-primary"
      : "glass text-foreground hover:border-primary/50 hover:text-primary";

  const content = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`${base} ${styles} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </motion.button>
  );
};

export default MagneticButton;
