"use client";

import Image from "next/image";

import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about.png"
              width={1440}
              height={300}
              alt="About Me"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Me
              </span>
            </h1>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                I am a self-taught Frontend Web Developer from India. About Four
                years ago is when I started my learning journey on how to make
                the web stunning and responsive. I have always been a curious
                individual, which is why I'd love to collaborate and do some
                real-world projects in order to flourish my skills.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 leading-relaxed"
              >
                My journey began with a strong curiosity about how the web
                works, and this curiosity grew into a love for coding. Over the
                years, I have honed my skills in JavaScript, React, Next.js,
                CSS, and other modern web technologies. I believe in writing
                clean, maintainable code and continuously improving my
                development process.
              </motion.p>
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
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

                "Node Js",
                "Express Js",
                "MySql",

                "Bootstrap",
                "Material UI",
                "Radix UI",
                "Tailwind css",
                "Shadcn UI",
                "Chakra UI",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
