"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import AboutIllustration from "@/app/components/AboutIllustration";
import { GlowButton, GhostButton } from "@/app/components/Buttons";

const STATS = [
  { label: "Years Experience", value: "4.6+" },
  { label: "Technologies", value: "20+" },
  { label: "Projects Shipped", value: "10+" },
];

const QUICK_FACTS = [
  {
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "p.ananya2025@gmail.com",
    href: "mailto:p.ananya2025@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "ananya-putatunda",
    href: "https://www.linkedin.com/in/ananya-putatunda-4a1618211/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.024-3.059-1.865-3.059-1.868 0-2.155 1.459-2.155 2.964v5.699h-3v-11h2.881v1.5h.041c.401-.761 1.381-1.563 2.842-1.563 3.039 0 3.6 2.001 3.6 4.601v6.462z" />
      </svg>
    ),
  },
  {
    label: "Current Role",
    value: "Frontend Developer · W3era",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 6h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z" />
      </svg>
    ),
  },
];

const SKILL_GROUPS = [
  {
    label: "Frontend & State",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "Formik",
      "Tanstack Query",
      "Next Auth",
      "Next Int (i18n)",
      "Redux Toolkit",
    ],
  },
  {
    label: "Backend & Data",
    skills: ["Node Js", "Express Js", "Nest Js", "MySql"],
  },
  {
    label: "UI & Styling",
    skills: [
      "Bootstrap",
      "Material UI",
      "Radix UI",
      "Tailwind css",
      "Shadcn UI",
      "Chakra UI",
    ],
  },
];

function AboutPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center bg-[#05060a] overflow-hidden py-20">
      <div className="absolute inset-0 grid-fade opacity-60" />

      {/* Ambient floating glow orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-purple-500/10 blur-[110px]"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ y: -6, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-full max-w-sm rounded-[1.75rem] p-[2px] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-transparent shadow-[0_0_60px_-18px_rgba(34,211,238,0.4)]"
            >
              <div className="relative rounded-[calc(1.75rem-2px)] overflow-hidden bg-[#05060a]">
                <div className="transition-transform duration-700 ease-out hover:scale-105">
                  <AboutIllustration />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-[#05060a]/90 backdrop-blur-sm border-t border-white/10 px-4 py-3">
                  <p className="font-mono-ai text-xs text-cyan-300">
                    &gt; building the web, thoughtfully
                    <motion.span
                      aria-hidden
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              {STATS.map((stat, statIndex) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + statIndex * 0.1 }}
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
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 font-mono-ai text-xs text-cyan-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                status: available for work
              </motion.span>

              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
                  Me
                </span>
              </h1>
              <p className="text-gray-500 font-mono-ai text-sm mt-2">
                Frontend Developer · Jaipur, India
              </p>
            </div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                Frontend Developer with 4.6 years of experience
                building scalable, high-performance web applications using
                React, Next.js, and TypeScript. I specialize in SSR, SSG, and
                ISR, with hands-on expertise across SaaS platforms,
                role-based access control, authentication, and REST API
                integration.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                My journey began with a strong curiosity about how the web
                works, and that curiosity grew into a career spanning
                healthcare, travel, and real-estate SaaS products. Today I
                pair that foundation with AI-assisted workflows — using
                modern tooling to prototype faster, write cleaner code, and
                ship more thoughtful products.
              </motion.p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_FACTS.map((fact, factIndex) => {
                const Wrapper = fact.href ? "a" : "div";
                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 + factIndex * 0.08 }}
                  >
                    <Wrapper
                      {...(fact.href
                        ? { href: fact.href, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="glass-panel neon-border rounded-xl px-4 py-3 flex items-center gap-3 transition-colors duration-300 hover:border-cyan-400/40"
                    >
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-300">
                        {fact.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-mono-ai text-gray-500 uppercase tracking-widest">
                          {fact.label}
                        </span>
                        <span className="block text-sm text-gray-200 truncate">
                          {fact.value}
                        </span>
                      </span>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <GlowButton text="Download Resume ↓" />
              </a>
              <GhostButton
                text="View Experience →"
                RenderFunction={() => router.push("/experience")}
              />
            </motion.div>

            {/* Skills, grouped */}
            <div className="space-y-5 pt-2">
              {SKILL_GROUPS.map((group, groupIndex) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + groupIndex * 0.1 }}
                >
                  <p className="font-mono-ai text-xs text-gray-500 uppercase tracking-widest mb-2.5">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05 * skillIndex,
                        }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="px-3.5 py-1.5 rounded-full text-sm font-mono-ai font-medium text-cyan-200 border border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
