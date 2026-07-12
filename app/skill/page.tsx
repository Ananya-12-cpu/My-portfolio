"use client";

import { motion } from "framer-motion";

import SkillCodeBlock from "@/app/components/SkillCodeBlock";

function SkillPage() {
  const skills = [
    { name: "React Js", level: 90 },
    { name: "Next Js", level: 95 },
    { name: "JavaScript", level: 88 },
    { name: "TypeScript", level: 70 },
    { name: "React Hook Form", level: 95 },
    { name: "Formik", level: 90 },

    { name: "Node Js", level: 60 },
    { name: "Express Js", level: 65 },
    { name: "Nest Js", level: 70 },
    { name: "MySql", level: 70 },

    { name: "Tanstack Query", level: 60 },
    { name: "Next Auth", level: 75 },
    { name: "Next Int (i18n)", level: 75 },
    { name: "Redux Toolkit", level: 70 },

    { name: "Bootstrap", level: 85 },
    { name: "Material UI", level: 85 },
    { name: "Radix UI", level: 85 },
    { name: "Tailwind css", level: 75 },
    { name: "Shadcn UI", level: 65 },
    { name: "Chakra UI", level: 85 },
  ];

  return (
    <div className="relative min-h-screen flex items-center bg-[#05060a] overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-50" />
      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mt-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              Technical Skills
            </span>
          </motion.h1>
        </div>

        <SkillCodeBlock />

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.08 }}
              className="glass-panel neon-border rounded-xl p-6 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold font-mono-ai text-gray-100">
                  {skill.name}
                </h3>
                <span className="text-sm font-mono-ai text-cyan-300">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: (index % 6) * 0.08 }}
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default SkillPage;
