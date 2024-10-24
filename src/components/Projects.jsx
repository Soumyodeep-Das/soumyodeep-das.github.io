import React, { useState, useEffect } from "react";
import { fetchProjectsData } from "../apis/PortFolioApis";

const Projects = () => {
  const [projectsData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await fetchProjectsData();
        if (data.length > 0) {
          setProjectData(data);
        } else {
          console.error("No project data found");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6 text-center">
        Projects
      </h1>

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl w-full">
        {/* Scrollable Grid Container */}
        <div className="max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project._id}
                className="p-4 sm:p-6 bg-gray-800 rounded-lg"
              >
                <h2 className="font-bold text-xl text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-pink-400">
                    Tech Stack:
                  </span>{" "}
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
      </div>
    </div>
  );
};

export default Projects;
