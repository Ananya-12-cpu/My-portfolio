"use client";

import { motion } from "framer-motion";
import IndustrialProjects from "../components/IndustrialProjects";

const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Industrial Projects", value: "6+" },
//   { label: "Active Users Impacted", value: "8k+" },
];


function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-[#05060a] overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-50" />

      <motion.div
        aria-hidden
        className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-purple-500/10 blur-[110px]"
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mt-2 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              Experience
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Frontend Developer with 3+ years building scalable,
            high-performance web applications across SaaS, healthcare, and
            travel domains.
          </motion.p>
        </div>

        {/* Current company + role card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel neon-border rounded-2xl px-6 py-5 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <div>
            <h2 className="text-xl font-semibold text-white flex items-center gap-2.5">
              Frontend Developer
              <span className="font-mono-ai text-[10px] uppercase tracking-widest text-cyan-200 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-2.5 py-1">
                Current
              </span>
            </h2>
            <p className="text-cyan-300 font-mono-ai text-sm mt-0.5">
              W3era Web Technology Pvt. Ltd.
            </p>
          </div>
          <div className="text-left sm:text-right font-mono-ai text-xs text-gray-400 space-y-1">
            <p>On site · Jaipur, Rajasthan - April 2026 – Present</p>
          </div>
        </motion.div>

        {/* Previous company + role card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-panel neon-border rounded-2xl px-6 py-5 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <div>
            <h2 className="text-xl font-semibold text-white">
              Frontend Developer
            </h2>
            <p className="text-cyan-300 font-mono-ai text-sm mt-0.5">
              Rasacode Technologies Pvt. Ltd.
            </p>
          </div>
          <div className="text-left sm:text-right font-mono-ai text-xs text-gray-400 space-y-1">
            <p>On-site · Uttarpara, WB — Oct 2023 – Nov 2025</p>
            <p>Remote — Dec 2025 – April 2026</p>
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 gap-3 mb-12 max-w-xl mx-auto">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -3, scale: 1.03 }}
              className="glass-panel neon-border rounded-xl px-2 py-4 text-center"
            >
              <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {stat.value}
              </p>
              <p className="text-[10px] font-mono-ai text-gray-400 uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      
      
      </div>
    </div>
  );
}

export default ExperiencePage;
