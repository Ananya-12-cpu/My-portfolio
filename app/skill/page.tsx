"use client";

import { motion } from "framer-motion";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import { GARAGE, TOOLS } from "@/app/data/portfolio";

const SEGMENTS = 10;
const PART_COLORS = ["#ff2e93", "#22e4ff", "#ffd23f", "#a78bfa"];
const TYRES = [
  { name: "CSR", tone: "bg-red-500", note: "soft" },
  { name: "SSR", tone: "bg-yellow-400", note: "medium" },
  { name: "SSG", tone: "bg-white", note: "hard" },
  { name: "ISR", tone: "bg-green-400", note: "intermediate" },
];

function SkillPage() {
  return (
    <StageShell id="skill">
      <StageHeading
        stage="02"
        title="The"
        accent="Garage"
        sub="Every skill is an upgrade on the car. Bars show how far each part is tuned."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {GARAGE.map((part, pi) => {
          const color = PART_COLORS[pi % PART_COLORS.length];
          return (
            <motion.div
              key={part.part}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (pi % 2) * 0.1 }}
              className="panel panel-hover rounded-2xl p-6"
              style={{ borderTop: `3px solid ${color}` }}
            >
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="display text-2xl text-white">{part.part}</h3>
                <span className="font-mono-ai text-[10px] uppercase tracking-widest text-gray-500">
                  {part.blurb}
                </span>
              </div>

              <ul className="space-y-3.5">
                {part.skills.map((skill, si) => {
                  const filled = Math.round((skill.level / 100) * SEGMENTS);
                  return (
                    <li key={skill.name} className="group">
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-mono-ai text-sm text-gray-200 transition-colors group-hover:text-white">
                          {skill.name}
                        </span>
                        <span className="font-mono-ai text-xs" style={{ color }}>
                          LV {filled}/{SEGMENTS}
                        </span>
                      </div>
                      <div
                        className="flex gap-1"
                        role="img"
                        aria-label={`${skill.name}: level ${filled} of ${SEGMENTS}`}
                      >
                        {Array.from({ length: SEGMENTS }, (_, n) => (
                          <motion.span
                            key={n}
                            initial={{ opacity: 0, scaleY: 0.3 }}
                            whileInView={{ opacity: 1, scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + si * 0.08 + n * 0.04 }}
                            className="skew-card h-2.5 flex-1 rounded-[2px]"
                            style={{
                              background: n < filled ? color : "rgba(255,255,255,0.08)",
                              boxShadow: n < filled ? `0 0 10px ${color}66` : undefined,
                            }}
                          />
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* tyres = rendering strategies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="panel mt-6 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h3 className="display text-2xl text-white">Tyre choice</h3>
          <p className="font-mono-ai text-[10px] uppercase tracking-widest text-gray-500">
            Rendering strategies, picked per track
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {TYRES.map((t) => (
            <motion.div key={t.name} whileHover={{ rotate: 20, scale: 1.1 }} className="flex items-center gap-2">
              <span className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#14101f] ${t.tone} ring-2 ring-white/20`}>
                <span className="h-3 w-3 rounded-full bg-[#14101f]" />
              </span>
              <span className="font-mono-ai text-xs text-gray-200">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* pit tools */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        <span className="font-mono-ai mr-2 text-[10px] uppercase tracking-widest text-gray-500">Pit tools</span>
        {TOOLS.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -3 }}
            className="font-mono-ai rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 hover:border-pink-400/60 hover:text-white"
          >
            {t}
          </motion.span>
        ))}
      </div>
    </StageShell>
  );
}

export default SkillPage;
