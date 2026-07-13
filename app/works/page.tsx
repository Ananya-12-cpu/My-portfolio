"use client";

import Image from "next/image";

import { motion } from "framer-motion";


const projects = [
  {
    title: "My Components",
    image: "/images/myComponent.JPG",
    description:
      "A component-driven demo project using Next Js. + Tailwind + Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/My-Components",
    featured: true,
  },
  {
    title: "E-commerce",
    image: "/images/my-ecommerce.JPG",
    description:
      "A component-driven demo project using Next Js. + Tailwind + Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/my-ecommerce.git",
  },
  {
    title: "Rent-RBAC",
    image: "/images/rent.png",
    description: "A component-driven demo project using Next Js. + Tailwind",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/Rent_property.git",
  },
  {
    title: "Express API",
    image: "/images/Api.JPG",
    description:
      "A functional swagger site with User authentication with Role and Todo and File upload",
    tech: ["Express.js", "JavaScript", "MySql"],
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
             Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Here are some projects I&apos;ve built to showcase my
            development skills. From UI experiments to Full stack websites.
          </motion.p>
        </div>

        {/* <ProjectsCodeBlock /> */}

        {/* Bento-style showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/40 via-white/5 to-purple-500/40 p-[1.5px] shadow-[0_0_50px_-20px_rgba(34,211,238,0.35)] transition-shadow duration-300 hover:shadow-[0_0_60px_-14px_rgba(34,211,238,0.5)] ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative h-full rounded-[calc(1rem-1.5px)] bg-[#0a0c14] overflow-hidden">
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "h-64 sm:h-80" : "h-48 sm:h-56"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-[#0a0c14]/40 to-transparent" />

                  {/* number badge */}
                  <span className="absolute top-4 left-4 font-mono-ai text-[10px] text-cyan-300 bg-[#05060a]/70 backdrop-blur-sm border border-cyan-400/20 rounded-full px-2.5 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {project.featured && (
                    <span className="absolute top-4 right-4 font-mono-ai text-[10px] uppercase tracking-widest text-purple-200 bg-purple-500/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-2.5 py-1">
                      Featured
                    </span>
                  )}

                  {/* hover overlay actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#05060a]/50 backdrop-blur-[2px]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="glass-panel neon-border rounded-full px-4 py-2 text-sm font-mono-ai text-white flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:text-cyan-300"
                    >
                      <GithubIcon />
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="glass-panel neon-border rounded-full px-4 py-2 text-sm font-mono-ai text-white flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:text-purple-300"
                      >
                        <LiveIcon />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    {project.title}
                    <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
