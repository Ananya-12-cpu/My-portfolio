"use client";

import { motion } from "framer-motion";

type Token = { text: string; color?: string; href?: string };

const PURPLE = "#a855f7";
const WHITE = "#e6f1ff";
const GRAY = "#9ca3af";
const KEY = "#22d3ee";
const STRING = "#34d399";

type ProjectSummary = { title: string; tech: string[]; github: string };

function projectObject(
  project: ProjectSummary,
  indent: number,
  last: boolean,
): Token[][] {
  const pad = " ".repeat(indent);
  const innerPad = " ".repeat(indent + 2);
  const lines: Token[][] = [[{ text: `${pad}{`, color: GRAY }]];

  lines.push([
    { text: `${innerPad}title`, color: KEY },
    { text: ": ", color: GRAY },
    { text: `'${project.title}'`, color: STRING },
    { text: ",", color: GRAY },
  ]);

  const techTokens: Token[] = [
    { text: `${innerPad}tech`, color: KEY },
    { text: ": [", color: GRAY },
  ];
  project.tech.forEach((t, i) => {
    techTokens.push({ text: `'${t}'`, color: STRING });
    if (i < project.tech.length - 1)
      techTokens.push({ text: ", ", color: GRAY });
  });
  techTokens.push({ text: "],", color: GRAY });
  lines.push(techTokens);

  lines.push(
    project.github === "#"
      ? [
          { text: `${innerPad}github`, color: KEY },
          { text: ": ", color: GRAY },
          { text: "null", color: PURPLE },
        ]
      : [
          { text: `${innerPad}github`, color: KEY },
          { text: ": ", color: GRAY },
          { text: `'${project.github}'`, color: STRING, href: project.github },
        ],
  );

  lines.push([{ text: `${pad}}${last ? "" : ","}`, color: GRAY }]);
  return lines;
}

const PROJECT_SUMMARIES: ProjectSummary[] = [
  {
    title: "My Components", 
    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Ananya-12-cpu/My-Components",
  },
  {
    title: "E-commerce", 
    tech: ["React", "Tailwind", "Framer Motion", "Redux toolkit"],

    github: "https://github.com/Ananya-12-cpu/my-ecommerce.git",
  },
  {
    title: "Rent-RBAC", 
    tech: ["Next.js", "Tailwind", "Framer Motion", "Redux toolkit"],

    github: "https://github.com/Ananya-12-cpu/Rent_property.git",
  },
  {
    title: "Express API", 
    tech: ["Express.js", "JavaScript", "MySql"],

    github: "https://github.com/Ananya-12-cpu/ElitePropertyAdmin2026.git",
  },
];

const LINES: Token[][] = [
  [
    { text: "const", color: PURPLE },
    { text: " projects", color: WHITE },
    { text: " = [", color: GRAY },
  ],
  ...PROJECT_SUMMARIES.flatMap((project, i) =>
    projectObject(project, 2, i === PROJECT_SUMMARIES.length - 1),
  ),
  [{ text: "];", color: GRAY }],
];

function ProjectsCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 rounded-2xl overflow-hidden glass-panel neon-border"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono-ai text-xs text-gray-400">
          projects.ts
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
              transition={{ duration: 0.35, delay: lineIndex * 0.06 }}
            >
              {line.map((token, tokenIndex) =>
                token.href ? (
                  <a
                    key={tokenIndex}
                    href={token.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: token.color }}
                    className="underline decoration-dotted underline-offset-2 hover:text-cyan-300 transition-colors duration-200"
                  >
                    {token.text}
                  </a>
                ) : (
                  <span key={tokenIndex} style={{ color: token.color }}>
                    {token.text}
                  </span>
                ),
              )}
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

export default ProjectsCodeBlock;
