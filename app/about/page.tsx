"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const STATS = [
  { label: "Years Experience", value: "4+" },
  { label: "Technologies", value: "20+" },
  { label: "Projects Shipped", value: "10+" },
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
  return (
    <div className="relative min-h-screen flex items-center bg-[#05060a] overflow-hidden py-20">
      <div className="absolute inset-0 grid-fade opacity-60" />
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
            <div className="relative w-full max-w-sm rounded-[1.75rem] p-[2px] bg-gradient-to-br from-cyan-400/60 via-purple-500/40 to-transparent shadow-[0_0_60px_-18px_rgba(34,211,238,0.4)]">
              <div className="relative rounded-[calc(1.75rem-2px)] overflow-hidden">
                <Image
                  src="/images/about.png"
                  width={720}
                  height={720}
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#05060a]/90 backdrop-blur-sm border-t border-white/10 px-4 py-3">
                  <p className="font-mono-ai text-xs text-cyan-300">
                    &gt; building the web, thoughtfully_
                  </p>
                </div>
              </div>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel neon-border rounded-xl px-2 py-4 text-center"
                >
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono-ai text-gray-400 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
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
              <span className="font-mono-ai text-xs text-cyan-400 tracking-widest uppercase">
                // about_me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
                  Me
                </span>
              </h1>
              <p className="text-gray-500 font-mono-ai text-sm mt-2">
                Frontend Engineer · India
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
                I am a self-taught Frontend Web Developer from India. About
                four years ago is when I started my learning journey on how
                to make the web stunning and responsive. I have always been a
                curious individual, which is why I&apos;d love to collaborate
                and do some real-world projects in order to flourish my
                skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                My journey began with a strong curiosity about how the web
                works, and this curiosity grew into a love for coding. Today
                I pair that foundation with AI-assisted workflows — using
                modern tooling to prototype faster, write cleaner code, and
                ship more thoughtful products.
              </motion.p>
            </div>

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
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full text-sm font-mono-ai font-medium text-cyan-200 border border-cyan-400/20 bg-cyan-400/5 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors duration-300"
                      >
                        {skill}
                      </span>
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
