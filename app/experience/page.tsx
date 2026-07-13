"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATS = [
  { label: "Years Experience", value: "4.6+" },
  { label: "Projects Delivered", value: "6+" },
//   { label: "Active Users Impacted", value: "8k+" },
];

const PROJECTS = [
  {
    title: "Wranker.com",
    subtitle: "SEO & Marketing Platform",
    role: "Frontend Developer",
    company: "W3era Web Technology Pvt. Ltd.",
    period: "May 2026 – Present",
    tech: ["Next.js 15 (App Router)", "React", "SEO"],
    highlights: [
      "Built and maintained core UI using Next.js App Router (v15), improving routing performance and maintainability",
      "Implemented SEO best practices including metadata, structured data, sitemaps, and dynamic OG tags to improve organic visibility",
      "Developed reusable, responsive components for a fast, accessible user experience",
      "Collaborated with design and marketing teams to align UI with SEO and conversion goals",
      "Developed frontend interfaces for auditing and visualizing digital marketing campaign performance",
      "Built reusable dashboard and report components, streamlining audit workflows",
      "Integrated REST APIs for fetching and rendering audit data",
      "Delivered a responsive, cross-browser compatible UI for client-facing reports",
    ],
  },
  
  {
    title: "Wholesale Property Management Platform",
    subtitle: "UK Market · SaaS",
    role: "Full Stack Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "June 2025 – April 2026",
    tech: ["React", "Next.js", "NestJS", "TypeORM", "MS SQL Server", "JWT", "Swagger"],
    highlights: [
      "Developed scalable frontend modules for property listings, campaign management, and lead tracking, supporting users",
      "Designed backend APIs using NestJS, TypeORM, and RESTful architecture, reducing API response time by 35%",
      "Built RBAC with Super Admin, Admin, and User roles, improving system-level security by 60%",
      "Implemented JWT-based auth with access/refresh tokens, reducing unauthorized access risks by 50%",
      "Architected a multi-tenant SaaS system with organization-level data isolation",
      "Modeled relational schemas in MS SQL Server, improving data retrieval efficiency by 40%",
    ],
  },
  {
    title: "Swami Vivekananda University Website",
    subtitle: "Education",
    role: "Frontend Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "June 2025 – April 2026",
    tech: ["Angular", ".NET MVC", "REST APIs"],
    highlights: [
      "Developed dynamic, reusable UI components supporting monthly active users",
      "Integrated REST APIs with a .NET MVC backend for admissions, courses, and content updates",
      "Delivered responsive, WCAG-compliant UI, improving accessibility score to 90+",
      "Reduced initial load time by 35% using lazy loading and module-level code splitting",
    ],
  },
  {
    title: "DeelFlow AI",
    subtitle: "AI-Enhanced Real Estate Admin Panel",
    role: "Frontend Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "Jan 2025 – Dec 2025",
    tech: ["Next.js", "React", "Redux Toolkit", "React Query", "Tailwind CSS"],
    highlights: [
      "Built a scalable admin panel supporting real-time lead and campaign management for properties",
      "Reduced redundant API calls by 40% via Redux Toolkit and React Query",
      "Developed responsive, mobile-first UI, increasing user engagement by 30%",
      "Built complex dashboards with advanced filtering and analytics, improving decision speed by 35%",
    ],
  },
  {
    title: "Birth Care Management System",
    subtitle: "Netherlands · Healthcare",
    role: "Frontend Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "June 2023 – Dec 2024",
    tech: ["Next.js", "Redux Toolkit", "React Query", "NextAuth", "JWT", "Next-intl"],
    highlights: [
      "Built a scalable healthcare platform supporting, active users across multiple hospitals",
      "Implemented multilingual support with 100% localization coverage for Dutch and English",
      "Developed secure RBAC using NextAuth and JWT, reducing unauthorized access by 60%",
      "Improved Lighthouse performance score from 72 to 92+ via SSR and SSG",
      "Reduced redundant API calls by 35% using React Query caching",
    ],
  },
  {
    title: "Flight Ticket Booking System",
    subtitle: "B2B",
    role: "Frontend Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "Jan 2022 – Dec 2024",
    tech: ["React", "REST APIs", "State Management"],
    highlights: [
      "Designed booking workflows for one-way and round-trip flights, improving completion rate by 35%",
      "Built role-based agent dashboards supporting active agents",
      "Reduced booking response time by 40% via optimized state and API handling",
      "Reduced frontend bugs by 20% through structured component architecture and code reviews",
    ],
  },
  {
    title: "Admin Panel – Flight Ticketing System",
    subtitle: "Internal Tooling",
    role: "Frontend Developer",
    company: "Rasacode Technologies Pvt. Ltd.",
    period: "Jan 2022 – Dec 2024",
    tech: ["React", "RBAC", "Data Tables"],
    highlights: [
      "Developed a centralized admin dashboard with advanced RBAC, improving security by 50%",
      "Built user management for users, reducing manual admin effort by 40%",
      "Built booking logs and transaction tracking handling monthly transactions",
      "Improved dashboard performance by 30% through optimized API calls",
    ],
  },
];

function ExperiencePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Frontend Developer with 4.6 years building scalable,
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
            <p>On site · Jaipur, Rajasthan - May 2026 – Present</p>
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
            <p>On-site · Uttarpara, WB — Dec 2021 – Nov 2025</p>
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

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[9px] sm:left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-purple-500/30 to-transparent" />

          {PROJECTS.map((project, index) => {
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
                        <span className="text-gray-500 font-normal text-sm">
                          {project.subtitle}
                        </span>
                      </h3>
                      <p className="font-mono-ai text-xs text-cyan-300 mt-1">
                        {project.role} · {project.company} · {project.period}
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
                        <div className="px-6 pb-6 pt-1 space-y-4 border-t border-white/5">
                          <ul className="space-y-2 mt-4">
                            {project.highlights.map((point) => (
                              <li
                                key={point}
                                className="flex gap-2.5 text-sm sm:text-base text-gray-400 leading-relaxed"
                              >
                                <span className="text-cyan-400 mt-1.5 shrink-0">
                                  ▹
                                </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 pt-1">
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
