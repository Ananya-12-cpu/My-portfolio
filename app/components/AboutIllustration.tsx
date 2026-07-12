"use client";

import { motion } from "framer-motion";

const CODE_LINES = [
  { width: 74, delay: 0, indent: 0 },
  { width: 48, delay: 0.15, indent: 14 },
  { width: 60, delay: 0.3, indent: 14 },
  { width: 36, delay: 0.45, indent: 0 },
  { width: 66, delay: 0.6, indent: 14 },
  { width: 42, delay: 0.75, indent: 0 },
];

const ORBIT_NODES = [
  { radius: 118, size: 7, duration: 14, delay: 0, color: "#22d3ee" },
  { radius: 96, size: 5, duration: 10, delay: 1, color: "#a855f7", reverse: true },
  { radius: 138, size: 4, duration: 18, delay: 2, color: "#6366f1" },
];

function AboutIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-auto"
      role="img"
      aria-label="Animated illustration of a code editor with orbiting tech nodes"
    >
      <defs>
        <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft core glow */}
      <circle cx="200" cy="200" r="150" fill="url(#coreGlow)" />

      {/* orbiting tech nodes */}
      {ORBIT_NODES.map((node, i) => (
        <motion.g
          key={i}
          style={{ originX: "200px", originY: "200px" }}
          animate={{ rotate: node.reverse ? -360 : 360 }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "linear",
            delay: node.delay,
          }}
        >
          <circle
            cx={200 + node.radius}
            cy={200}
            r={node.size}
            fill={node.color}
            opacity={0.85}
          />
        </motion.g>
      ))}

      {/* dashed orbit rings */}
      {ORBIT_NODES.map((node, i) => (
        <circle
          key={`ring-${i}`}
          cx={200}
          cy={200}
          r={node.radius}
          fill="none"
          stroke="rgba(148, 163, 184, 0.15)"
          strokeDasharray="2 6"
        />
      ))}

      {/* editor window */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <rect
          x="90"
          y="120"
          width="220"
          height="160"
          rx="14"
          fill="url(#screenGlow)"
          stroke="rgba(34, 211, 238, 0.4)"
          strokeWidth="1.5"
        />
        {/* title bar */}
        <rect
          x="90"
          y="120"
          width="220"
          height="24"
          rx="14"
          fill="rgba(15, 18, 28, 0.8)"
        />
        <circle cx="104" cy="132" r="3.5" fill="#f87171" />
        <circle cx="116" cy="132" r="3.5" fill="#fbbf24" />
        <circle cx="128" cy="132" r="3.5" fill="#34d399" />

        {/* animated code lines */}
        {CODE_LINES.map((line, i) => (
          <motion.rect
            key={i}
            x={110 + line.indent}
            y={162 + i * 17}
            height="6"
            rx="3"
            fill={i % 2 === 0 ? "#22d3ee" : "#a855f7"}
            opacity={0.75}
            initial={{ width: 0 }}
            animate={{ width: line.width }}
            transition={{
              duration: 0.5,
              delay: line.delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2.5,
            }}
          />
        ))}

        {/* blinking cursor */}
        <motion.rect
          x={110 + CODE_LINES[CODE_LINES.length - 1].indent + 46}
          y={162 + (CODE_LINES.length - 1) * 17}
          width="2"
          height="7"
          fill="#e6f1ff"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.g>
    </svg>
  );
}

export default AboutIllustration;
