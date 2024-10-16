import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaPhp,
  FaDocker, FaNodeJs,
  FaAndroid,
} from "react-icons/fa";
import {
  SiC, SiKotlin, SiTypescript, SiMongodb, SiSpring, SiMysql,
} from "react-icons/si";

const Skills = () => {
  const [skillsData] = useState([
    { id: 1, skill: "HTML", level: "31.12%", icon: <FaHtml5 color="#E34F26" size={30} /> },
    { id: 2, skill: "C", level: "23.37%", icon: <SiC color="#A8B9CC" size={30} /> },
    { id: 3, skill: "PHP", level: "11.85%", icon: <FaPhp color="#777BB4" size={30} /> },
    { id: 4, skill: "Java", level: "11.06%", icon: <FaJava color="#5382A1" size={30} /> },
    { id: 5, skill: "JavaScript", level: "9.01%", icon: <FaJs color="#F7DF1E" size={30} /> },
    { id: 6, skill: "TypeScript", level: "5.87%", icon: <SiTypescript color="#3178C6" size={30} /> },
    { id: 7, skill: "Kotlin", level: "0.52%", icon: <SiKotlin color="#7F52FF" size={30} /> },
    { id: 8, skill: "Python", level: "0.44%", icon: <FaPython color="#4B8BBE" size={30} /> },
  ]);

  const technologies = [
    { id: 1, icon: <SiC size={40} color="#A8B9CC" /> },
    { id: 2, icon: <FaPython size={40} color="#4B8BBE" /> },
    { id: 3, icon: <FaJava size={40} color="#E34F26" /> },
    { id: 4, icon: <FaJs size={40} color="#F7DF1E" /> },
    { id: 5, icon: <FaPhp size={40} color="#777BB4" /> },
    { id: 6, icon: <FaHtml5 size={40} color="#E34F26" /> },
    { id: 7, icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { id: 8, icon: <SiTypescript size={40} color="#3178C6" /> },
    { id: 9, icon: <FaNodeJs size={40} color="#3C873A" /> },
    { id: 10, icon: <SiSpring size={40} color="#6DB33F" /> },
    { id: 11, icon: <FaReact size={40} color="#61DBFB" /> },
    { id: 12, icon: <FaDocker size={40} color="#2496ED" /> },
    { id: 13, icon: <SiMysql size={40} color="#4479A1" /> },
    { id: 14, icon: <SiMongodb size={40} color="#47A248" /> },
    { id: 15, icon: <FaAndroid size={40} color="#3C873A" /> },

  ];

  return (
    <div className="flex flex-col items-center mt-10 px-4 sm:px-8">
      {/* Heading */}
      <h1 className="font-bold text-3xl text-pink-500 mb-8 text-center">
        Most Used Languages
      </h1>

      {/* Skills List */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full space-y-6">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <div className="shrink-0">{skill.icon}</div>
            <span className="flex-1 font-medium text-white text-center sm:text-left">
              {skill.skill}
            </span>
            <div className="w-full sm:w-1/2 bg-gray-700 h-2 rounded-full mx-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
            <span className="text-sm text-white">{skill.level}</span>
          </div>
        ))}
      </div>

      {/* Technologies Section */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-10">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="bg-gray-800 p-4 rounded-full flex items-center justify-center"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
