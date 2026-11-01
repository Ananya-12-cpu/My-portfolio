"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type LapItem = {
  key: string;
  /** number shown on the road flag and in the eyebrow, e.g. "07" */
  flag: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  meta?: string;
  badge?: string;
  body: ReactNode;
};

/** Expandable list laid out along an animated road; one item open at a time. */
export default function LapList({ items }: { items: LapItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative pl-12 sm:pl-16">
      <div aria-hidden className="absolute bottom-0 left-3 top-0 w-5 rounded-full bg-[#1d1630] sm:left-5">
        <div
          className="absolute inset-y-2 left-1/2 w-0.5 -translate-x-1/2"
          style={{
            backgroundImage: "repeating-linear-gradient(180deg,#f5efff 0 12px,transparent 12px 24px)",
            animation: "road-dash 1.2s linear infinite",
            backgroundSize: "2px 24px",
          }}
        />
      </div>

      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="relative mb-5"
          >
            <span
              aria-hidden
              className={`display absolute -left-[3.15rem] top-4 flex h-8 w-8 items-center justify-center rounded-md text-xs sm:-left-[3.9rem] sm:h-9 sm:w-9 ${
                isOpen ? "bg-pink-500 text-white shadow-[0_0_18px_#ff2e93]" : "bg-[#241a3a] text-gray-400"
              }`}
            >
              {item.flag}
            </span>

            <div className={`panel panel-hover overflow-hidden rounded-2xl ${isOpen ? "border-pink-500/40" : ""}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
              >
                <div>
                  <p className="font-mono-ai flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-pink-300">
                    {item.eyebrow}
                    {item.badge && (
                      <span className="rounded bg-yellow-300 px-1.5 py-0.5 font-bold text-black">{item.badge}</span>
                    )}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {item.title}
                    {item.subtitle && <span className="ml-2 text-sm font-normal text-gray-500">{item.subtitle}</span>}
                  </h3>
                  {item.meta && <p className="font-mono-ai mt-0.5 text-xs text-gray-400">{item.meta}</p>}
                </div>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="mt-2 shrink-0 text-pink-300" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 border-t border-white/5 px-5 pb-5 pt-4">{item.body}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
