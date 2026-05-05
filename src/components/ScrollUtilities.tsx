import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-secondary z-[60] origin-left border-b-2 border-foreground"
      style={{ scaleX }}
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary brutal-border brutal-shadow brutal-hover brutal-press rounded-[var(--radius)] flex items-center justify-center font-display animate-fade-in"
    >
      ↑
    </button>
  );
}
