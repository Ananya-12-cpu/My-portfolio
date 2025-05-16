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

  const goToNextPage = () => {
    router.push("/contact");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={goToPreviousPage}
      >
        <TbSquareRoundedArrowLeft size={32} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 z-10"
        onClick={goToNextPage}
      >
        <TbSquareRoundedArrowRight size={32} />
      </button>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">My Work</h1>
          <p className="text-gray-600 text-lg">
            Here are some projects I've built to showcase my front-end development skills. From UI experiments to full websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap mt-3 gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Live
                  </a> */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 text-sm hover:underline"
                  >
                    GitHub
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
