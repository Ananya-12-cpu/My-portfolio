"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbSquareRoundedArrowRight, TbSquareRoundedArrowLeft } from "react-icons/tb";

const projects = [
  {
    title: "My Components",
    image: "/images/myComponent.jpg",
    description: "A component-driven demo project using Next Js. + Tailwind + Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/My-Components",
  },
  // {
  //   title: "Calculator App",
  //   image: "/images/calculator.png",
  //   description: "A simple and responsive calculator app with basic operations and animations.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   live: "#",
  //   github: "#",
  // },
  // {
  //   title: "Fictional Tours Site",
  //   image: "/images/tours.png",
  //   description: "A fictional travel site (Work in Progress) with basic booking UI and responsive layout.",
  //   tech: ["Next.js", "CSS Modules", "TypeScript"],
  //   live: "#",
  //   github: "#",
  // },
];

function Work() {
  const router = useRouter();

  const goToPreviousPage = () => {
    router.push("/skill");
  };

 
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-16">
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-gray-700/50 transition-colors duration-300 z-10"
        onClick={goToPreviousPage}
      >
        <TbSquareRoundedArrowLeft size={32} className="text-white" />
      </button>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto border border-gray-700/30 rounded-3xl p-6 sm:p-8 backdrop-blur-sm bg-gray-900/20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">My Work</h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some projects I've built to showcase my front-end development skills. From UI experiments to full websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-700/50 text-gray-200 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
