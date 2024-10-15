import React, { useState } from "react";

const Projects = () => {
    const [projectsData] = useState([
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
            techStack: "React, Node.js, MongoDB",
            github: "",
            live: "",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
            techStack: "React, Node.js, MongoDB",
            github: "",
            live: "",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
            techStack: "React, Node.js, MongoDB",
            github: "",
            live: "",
        },
    ]);

    return (
        <div className="flex flex-col items-center mt-10 mx-5">
            <h1 className="font-bold text-3xl text-pink-500 mb-6">Projects</h1>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-6xl w-2/3">
                {projectsData.map((project) => (
                    <div key={project.id} className="mb-6">
                        <h2 className="font-bold text-xl text-white">{project.title}</h2>
                        <p className="text-gray-400 mb-2">{project.description}</p>
                        <p className="text-gray-300">{project.techStack}</p>
                        <div className="flex mt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-800 p-2 rounded-full"
                            >
                                Github
                            </a>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-800 p-2 rounded-full ml-2"
                            >
                                Live
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Projects;