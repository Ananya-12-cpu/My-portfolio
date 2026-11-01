"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

/** Scroll progress bar, cursor spotlight (fine pointers only) and back-to-top button. */
export default function ScrollEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    const onScroll = () => setShowTop(window.scrollY > 600);

    if (fine) window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"
      />

      <motion.div
        aria-hidden
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[1] hidden h-[400px] w-[400px] rounded-full bg-cyan-400/[0.07] blur-[90px] md:block"
      />

      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={false}
        animate={{ opacity: showTop ? 1 : 0, y: showTop ? 0 : 20 }}
        style={{ pointerEvents: showTop ? "auto" : "none" }}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass-panel neon-border text-cyan-300 hover:text-white"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </>
  );
}
