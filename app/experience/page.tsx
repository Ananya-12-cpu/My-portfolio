"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import CountUp from "@/app/components/race/CountUp";
import { COMPANIES } from "@/app/data/portfolio";
import { JOBS } from "@/app/data/jobs";

function ExperiencePage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <StageShell id="experience">
      <StageHeading
        stage="03"
        title="Race"
        accent="Laps"
        sub="Frontend Developer with 3+ years building scalable, high-performance web applications across SaaS, healthcare, and travel."
      />

      {/* teams */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        {COMPANIES.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="panel panel-hover rounded-2xl p-5"
          >
            <p className="font-mono-ai flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500">
              Team {i + 1}
              {c.current && (
                <span className="rounded bg-green-400/15 px-2 py-0.5 text-green-300">● on track</span>
              )}
            </p>
            <h3 className="display mt-1 text-xl text-white">{c.name}</h3>
            <p className="text-sm text-pink-300">{c.role}</p>
            <p className="font-mono-ai mt-2 text-xs text-gray-400">{c.period}</p>
            <p className="font-mono-ai text-xs text-gray-500">{c.place}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-14 grid max-w-md grid-cols-2 gap-3">
        {[
          { label: "Years experience", v: 3, s: "+" },
          { label: "Industrial projects", v: JOBS.length, s: "" },
        ].map((s) => (
          <div key={s.label} className="panel rounded-xl px-3 py-3 text-center">
            <p className="display text-3xl text-sunset">
              <CountUp to={s.v} suffix={s.s} />
            </p>
            <p className="font-mono-ai text-[9px] uppercase tracking-wider text-gray-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* laps */}
      <div className="relative pl-12 sm:pl-16">
        {/* road with dashed centre line */}
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

        {JOBS.map((job, index) => {
          const isOpen = open === index;
          const lap = JOBS.length - index;
          return (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="relative mb-5"
            >
              {/* lap flag on the road */}
              <span
                aria-hidden
                className={`display absolute -left-[3.15rem] top-4 flex h-8 w-8 items-center justify-center rounded-md text-xs sm:-left-[3.9rem] sm:h-9 sm:w-9 ${
                  isOpen ? "bg-pink-500 text-white shadow-[0_0_18px_#ff2e93]" : "bg-[#241a3a] text-gray-400"
                }`}
              >
                {String(lap).padStart(2, "0")}
              </span>

              <div className={`panel panel-hover overflow-hidden rounded-2xl ${isOpen ? "border-pink-500/40" : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                >
                  <div>
                    <p className="font-mono-ai text-[10px] uppercase tracking-widest text-pink-300">
                      Lap {String(lap).padStart(2, "0")} · {job.period}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                      {job.title}
                      <span className="ml-2 text-sm font-normal text-gray-500">{job.subtitle}</span>
                    </h3>
                    <p className="font-mono-ai mt-0.5 text-xs text-gray-400">
                      {job.role} · {job.company}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="mt-2 shrink-0 text-pink-300"
                    aria-hidden
                  >
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
                      <div className="space-y-4 border-t border-white/5 px-5 pb-5 pt-4">
                        <ul className="space-y-2">
                          {job.highlights.map((h) => (
                            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-gray-300 sm:text-base">
                              <span className="mt-1.5 shrink-0 text-yellow-300">▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {job.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono-ai rounded-full border border-pink-400/25 bg-pink-400/5 px-3 py-1 text-xs text-pink-100"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </StageShell>
  );
}

export default ExperiencePage;
