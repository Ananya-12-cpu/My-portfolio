"use client";

import { motion } from "framer-motion";

type Token = { text: string; color?: string };

const PURPLE = "#a855f7";
const WHITE = "#e6f1ff";
const GRAY = "#9ca3af";
const KEY = "#22d3ee";
const STRING = "#34d399";

function keyValueString(key: string, value: string, indent: number, last = false): Token[] {
  const pad = " ".repeat(indent);
  return [
    { text: `${pad}${key}`, color: KEY },
    { text: ": ", color: GRAY },
    { text: `'${value}'`, color: STRING },
    { text: last ? "" : ",", color: GRAY },
  ];
}

function keyValueArray(key: string, indent: number, items: string[]): Token[] {
  const pad = " ".repeat(indent);
  const tokens: Token[] = [
    { text: `${pad}${key}`, color: KEY },
    { text: ": [", color: GRAY },
  ];
  items.forEach((item, i) => {
    tokens.push({ text: `'${item}'`, color: STRING });
    if (i < items.length - 1) tokens.push({ text: ", ", color: GRAY });
  });
  tokens.push({ text: "],", color: GRAY });
  return tokens;
}

const LINES: Token[][] = [
  [
    { text: "const", color: PURPLE },
    { text: " developer", color: WHITE },
    { text: " = {", color: GRAY },
  ],
  keyValueString("name", "Ananya Putatunda", 2),
  keyValueString("role", "Frontend Developer", 2),
  keyValueString("experience", "4.6+ years", 2),
  [
    { text: "  stack", color: KEY },
    { text: ": {", color: GRAY },
  ],
  keyValueArray("frontend", 4, [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Angular",
  ]),
  keyValueArray("stateManagement", 4, ["Redux Toolkit", "React Query"]),
  keyValueArray("rendering", 4, ["CSR", "SSR", "SSG", "ISR"]),
  keyValueArray("styling", 4, [
    "Tailwind CSS",
    "SCSS",
    "Bootstrap",
    "Chakra UI",
    "Material UI",
    "Styled Components",
  ]),
  keyValueArray("forms", 4, ["React Hook Form", "Formik"]),
  keyValueArray("auth", 4, ["JWT", "NextAuth", "RBAC"]),
  keyValueArray("backend", 4, ["Node.js", "Express.js", "NestJS"]),
  keyValueArray("databases", 4, ["MySQL", "MS SQL Server"]),
  keyValueArray("tools", 4, [
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "Figma",
    "CI/CD",
  ]),
  [{ text: "  },", color: GRAY }],
  keyValueString(
    "loves",
    "building scalable, high-performance web applications with a focus on user experience and accessibility.",
    2,
    true
  ),
  [{ text: "};", color: GRAY }],
];

function SkillCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mb-14 rounded-2xl overflow-hidden glass-panel neon-border"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono-ai text-xs text-gray-400">
          developer.ts
        </span>
      </div>

      <pre className="font-mono-ai text-[13px] leading-relaxed px-5 py-5 overflow-x-auto">
        <code>
          {LINES.map((line, lineIndex) => (
            <motion.div
              key={lineIndex}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: lineIndex * 0.09 }}
            >
              {line.map((token, tokenIndex) => (
                <span key={tokenIndex} style={{ color: token.color }}>
                  {token.text}
                </span>
              ))}
              {lineIndex === LINES.length - 1 && (
                <motion.span
                  aria-hidden
                  className="inline-block w-2 h-3.5 bg-cyan-300 ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}

export default SkillCodeBlock;
