"use client";

import Image from "next/image";

const projects = [
  {
    title: "My Components",
    image: "/images/myComponent.jpg",
    description:
      "A component-driven demo project using Next Js. + Tailwind + Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/My-Components",
  },
  {
    title: "E-commerce",
    image: "/images/ecommerce.jpg",
    description:
      "A component-driven demo project using Next Js. + Tailwind + Framer Motion",
    tech: ["React", "Tailwind", "Framer Motion", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/ecommerce",
  },
  {
    title: "Rent-RBAC",
    image: "/images/rent.png",
    description:
      "A component-driven demo project using Next Js. + Tailwind",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Redux toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/Rent_property.git",
  },
  {
    title: "Express API",
    image: "/images/api.jpg",
    description: "A functional swagger site with User authentication with Role and Todo and File upload",
    tech: ["Express.js", "JavaScript", "MySql"],
    live: "#",
    github: "#",
  },
];

function WorkPage() {
  return (<>

    <div className="relative min-h-screen flex items-center bg-[#05060a] overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-50" />
      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-16">

        <div className="text-center mb-16">
           
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              My Work
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Here are some projects I've built to showcase my front-end
            development skills. From UI experiments to full websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-panel neon-border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono-ai text-cyan-200 border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 rounded-full"
                    >
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
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>);
}

export default WorkPage;
