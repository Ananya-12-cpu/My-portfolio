"use client";

import Image from "next/image";
import IndustrialProjects from "../components/IndustrialProjects";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const projects = [
  {
    title: "My Components",
    image: "/images/myComponent.JPG",
    description:
      "A component-driven demo project using Next.js + Tailwind + Framer Motion",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/My-Components",
    featured: true,
  },
  {
    title: "E-commerce",
    image: "/images/my-ecommerce.jpg",
    description:
      "A component-driven demo project using Next.js + Tailwind + Framer Motion",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/my-ecommerce.git",
  },
  {
    title: "Rent-RBAC",
    image: "/images/rent.png",
    description: "A component-driven demo project using Next.js + Tailwind",
    tech: ["Next.js", "Tailwind", "Tanstack Query", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/Rent_property.git",
  },
  {
    title: "Express API",
    image: "/images/Api.JPG",
    description:
      "A functional swagger site with User authentication with Role and Todo and File upload",
    tech: ["Express.js", "TypeScript", "MySQL"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/ElitePropertyAdmin2026.git",
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LiveIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

function WorkPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="relative min-h-screen bg-[#05060a] overflow-hidden ">
      <div className="absolute inset-0 grid-fade opacity-50" />
 
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[110px]"
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-16">
           
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mt-2 mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
             Personal Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Personal projects I&apos;ve built on my own to explore ideas and
            sharpen my skills. From UI experiments to full stack websites.
          </motion.p>
        </div>

        {/* <ProjectsCodeBlock /> */}

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-[9px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-purple-500/30 to-transparent" />

            {projects.map((project, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
                  className="relative mb-6"
                >
                  {/* timeline dot */}
                  <span className="absolute -left-8 sm:-left-10 top-6 w-[18px] h-[18px] rounded-full bg-[#05060a] border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                  </span>

                  <div className="glass-panel neon-border rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_50px_-16px_rgba(34,211,238,0.4)]">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white flex flex-wrap items-baseline gap-2">
                          {project.title}
                          {project.featured && (
                            <span className="font-mono-ai text-[10px] uppercase tracking-widest text-purple-200 bg-purple-500/10 border border-purple-400/30 rounded-full px-2.5 py-1">
                              Featured
                            </span>
                          )}
                        </h3>
                        <p className="font-mono-ai text-xs text-cyan-300 mt-1">
                          {project.tech.join(" · ")}
                        </p>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 mt-1 text-cyan-300"
                        aria-hidden
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-4 space-y-4 border-t border-white/5">
                            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs font-mono-ai text-cyan-200 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 rounded-full hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors duration-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-3 pt-1">
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-panel neon-border rounded-full px-4 py-2 text-sm font-mono-ai text-white flex items-center gap-2 hover:text-cyan-300 transition-colors"
                              >
                                <GithubIcon />
                                Code
                              </a>
                              {project.live !== "#" && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="glass-panel neon-border rounded-full px-4 py-2 text-sm font-mono-ai text-white flex items-center gap-2 hover:text-purple-300 transition-colors"
                                >
                                  <LiveIcon />
                                  Live
                                </a>
                              )}
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
        </div>

        {/* Industrial projects */}
        <div className="max-w-5xl mx-auto mt-24">
          <IndustrialProjects />
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
