// pages/index.js
"use client";
import { useRouter } from "next/navigation";
import {
  TbSquareRoundedArrowRight,
  TbSquareRoundedArrowLeft,
} from "react-icons/tb";
import { motion } from "framer-motion";

function SkillPage() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push("/about");
  };

  const goToNextPage = () => {
    router.push("/works");
  };

  const skills = [
    { name: "React Js", level: 90, color: "#61DAFB" },
    { name: "Next Js", level: 95, color: "#000000" },
    { name: "JavaScript", level: 88, color: "#F7DF1E" },
    { name: "TypeScript", level: 70, color: "#3178C6" },
    { name: "React Hook Form", level: 95, color: "#E34F26" },
    { name: "Formik", level: 90, color: "#1572B6" },

    { name: "Tanstack Query", level: 60, color: "#F7DF1E" },
    { name: "Next Auth", level: 75, color: "#61DAFB" },
    { name: "Next Int (i18n)", level: 75, color: "#000000" },
    { name: "Redux Toolkit", level: 70, color: "#7952B3" },

    { name: "Bootstrap", level: 85, color: "#3178C6" },
    { name: "Material UI", level: 85, color: "#61DAFB" },
    { name: "Radix UI", level: 85, color: "#3178C6" },
    { name: "Tailwind css", level: 75, color: "#7952B3" },
    { name: "Shadcn UI", level: 65, color: "#E34F26" },
    { name: "Chakra UI", level: 85, color: "#61DAFB" },
  ];

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
        >
          {/* Technical Skills */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Technical Skills
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-gray-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Other Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Responsive Design', 'UI/UX', 'API Integration', 'Problem Solving'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}

export default SkillPage;
