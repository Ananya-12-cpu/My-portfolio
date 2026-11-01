"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SECTIONS } from "@/app/data/portfolio";
import { useActiveSection } from "./race/useActiveSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();
  const lap = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#0a0612]/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#start" className="display text-lg text-white">
          <span className="text-pink-400">A</span>nanya
          <span className="text-sunset ml-1">GP</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={`font-mono-ai group relative px-3 py-2 text-xs uppercase tracking-widest transition-colors ${
                active === s.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="mr-1.5 text-pink-400/80">0{i}</span>
              {s.short}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-gradient-to-r from-pink-500 to-orange-400 transition-transform duration-300 ${
                  active === s.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-200 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-4 pb-4 md:hidden">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`font-mono-ai block py-2.5 text-sm uppercase tracking-widest ${
                active === s.id ? "text-white" : "text-gray-400"
              }`}
            >
              <span className="mr-2 text-pink-400">0{i}</span>
              {s.label}
            </a>
          ))}
        </div>
      )}

      {/* lap progress as a kerb strip */}
      <motion.div aria-hidden style={{ scaleX: lap }} className="kerb absolute inset-x-0 bottom-0 h-1 origin-left" />
    </nav>
  );
};

export default Navbar;
