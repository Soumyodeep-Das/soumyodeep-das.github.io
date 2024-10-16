import React, { useState } from "react";

const Projects = () => {
  const [projectsData] = useState([
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
      techStack: "React, Node.js, MongoDB",
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
      techStack: "React, Node.js, MongoDB",
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
      techStack: "React, Node.js, MongoDB",
      github: "#",
      live: "#",
    },
  ]);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6 text-center">
        Projects
      </h1>

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full sm:w-3/4 lg:w-2/3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="mb-8 p-4 sm:p-6 bg-gray-800 rounded-lg"
          >
            <h2 className="font-bold text-xl sm:text-2xl text-white mb-2">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-4">
              {project.description}
            </p>

            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-pink-400">Tech Stack: </span>
              {project.techStack}
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
