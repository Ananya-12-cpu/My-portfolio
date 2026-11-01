"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/** Section heading styled as a race stage banner. */
export function StageHeading({
  stage,
  title,
  accent,
  sub,
  center = true,
}: {
  stage: string;
  title: string;
  accent: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono-ai skew-card inline-block bg-pink-500 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-white"
      >
        <span className="unskew inline-block">Stage {stage}</span>
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="display mt-4 text-5xl text-white sm:text-6xl lg:text-7xl"
      >
        {title} <span className="text-sunset">{accent}</span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 max-w-2xl text-base text-gray-400 sm:text-lg ${center ? "mx-auto" : ""}`}
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

/** Full-width checkpoint arch between sections. */
export function CheckpointGate({ n, label }: { n: number; label: string }) {
  return (
    <div aria-hidden className="relative z-10 h-10 w-full overflow-hidden bg-[#0a0612]">
      <div className="checker absolute inset-x-0 top-0 h-3" />
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "0px 0px -10% 0px" }}
        className="absolute inset-x-0 top-3 flex items-center justify-center py-1"
      >
        <span className="font-mono-ai text-[10px] uppercase tracking-[0.35em] text-yellow-300">
          ⚑ Checkpoint {String(n).padStart(2, "0")} · {label}
          <span className="ml-2 text-pink-300">+ time bonus</span>
        </span>
      </motion.div>
    </div>
  );
}

export function StageShell({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`asphalt relative overflow-hidden py-24 sm:py-28 ${className}`}>
      <div aria-hidden className="kerb-v absolute inset-y-0 left-0 hidden w-2 opacity-60 lg:block" />
      <div aria-hidden className="kerb-v absolute inset-y-0 right-0 hidden w-2 opacity-60 lg:block" />
      <div aria-hidden className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-pink-500/10 blur-[110px]" />
      <div aria-hidden className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
