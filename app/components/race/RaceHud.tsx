"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { SECTIONS } from "@/app/data/portfolio";
import { useActiveSection } from "./useActiveSection";

/** Scroll-driven HUD: speedometer (scroll = throttle) and a vertical mini-map of the track. */
export default function RaceHud() {
  const active = useActiveSection();
  const { scrollY, scrollYProgress } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 70, damping: 18 });
  const kmh = useTransform(smooth, (v) => Math.min(320, Math.round(Math.abs(v) / 10)));
  const needle = useTransform(kmh, [0, 320], [-120, 120]);
  const gear = useTransform(kmh, (v) => Math.min(6, 1 + Math.floor(v / 55)));
  const carTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const on = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const idx = SECTIONS.findIndex((s) => s.id === active);

  return (
    <>
      {/* speedometer */}
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: pastHero ? 1 : 0, y: pastHero ? 0 : 20 }}
        className="pointer-events-none fixed bottom-4 left-3 z-40 hidden sm:block"
      >
        <div className="panel relative h-24 w-40 overflow-hidden rounded-b-lg rounded-t-full">
          <svg viewBox="0 0 160 96" className="absolute inset-0">
            <defs>
              <linearGradient id="sp" x1="0" x2="1">
                <stop offset="0" stopColor="#22e4ff" />
                <stop offset="0.6" stopColor="#ff9f1c" />
                <stop offset="1" stopColor="#ff2e4d" />
              </linearGradient>
            </defs>
            <path d="M16 84 A64 64 0 0 1 144 84" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" strokeLinecap="round" />
            <path d="M16 84 A64 64 0 0 1 144 84" fill="none" stroke="url(#sp)" strokeWidth="8" strokeLinecap="round" strokeDasharray="4 6" />
          </svg>
          <motion.div
            style={{ rotate: needle }}
            className="absolute bottom-3 left-1/2 h-14 w-0.5 origin-bottom -translate-x-1/2 bg-pink-400 shadow-[0_0_8px_#ff2e93]"
          />
          <div className="absolute bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white" />
          <p className="display absolute inset-x-0 bottom-5 text-center text-lg text-white">
            <motion.span>{kmh}</motion.span>
          </p>
        </div>
        <p className="font-mono-ai mt-1 text-center text-[9px] uppercase tracking-widest text-gray-400">
          gear <motion.span className="text-pink-300">{gear}</motion.span> · scroll = throttle
        </p>
      </motion.div>

      {/* mini-map */}
      <div
        aria-hidden
        className="pointer-events-none fixed right-3 top-1/2 z-40 hidden h-[52vh] -translate-y-1/2 md:block lg:right-5"
      >
        <div className="relative h-full w-1.5 rounded-full bg-white/10">
          <motion.div
            style={{ height: carTop }}
            className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-pink-500 to-orange-400"
          />
          <motion.span
            style={{ top: carTop }}
            className="absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-md bg-pink-500 shadow-[0_0_18px_#ff2e93] ring-2 ring-white"
          />
          {SECTIONS.map((s, i) => (
            <span
              key={s.id}
              style={{ top: `${(i / (SECTIONS.length - 1)) * 100}%` }}
              className="absolute right-0 flex -translate-y-1/2 items-center gap-2"
            >
              <span
                className={`font-mono-ai whitespace-nowrap rounded bg-black/60 px-1.5 py-0.5 text-[9px] uppercase tracking-widest transition-opacity ${
                  idx === i ? "text-yellow-300 opacity-100" : "text-gray-500 opacity-0 lg:opacity-60"
                }`}
              >
                {s.short}
              </span>
              <span
                className={`h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                  i <= idx ? "border-yellow-300 bg-yellow-300" : "border-white/30 bg-[#0a0612]"
                } ${i === SECTIONS.length - 1 ? "rounded-sm" : ""}`}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
