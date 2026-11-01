"use client";


import { motion } from "framer-motion";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import CountUp from "@/app/components/race/CountUp";
import { COMPANIES } from "@/app/data/portfolio";
import { JOBS } from "@/app/data/jobs";

function ExperiencePage() {

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

    </StageShell>
  );
}

export default ExperiencePage;
