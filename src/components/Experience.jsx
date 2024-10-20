import React, { useState, useEffect } from "react";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([
    // {
    //   id: 1,
    //   role: "FrostAngel",
    //   company: "FrostHacks",
    //   date: "Aug 2024 - Present",
    //   description:
    //     "Evangalist of FrostHacks, an in-person Hackathon organised by CNH at AOT.",
    // },
    // {
    //   id: 2,
    //   role: "KubeCaptain (POC)",
    //   company: "Cloud Native Hooghly (CNH)",
    //   date: "May 2024 - Present",
    //   description:
    //     "Campus Ambassador of CNH, a Cloud Native Community Group, a regional chapter of CNCF.",
    // },
    // {
    //   id: 3,
    //   role: "Advocate",
    //   company: "Huddle01",
    //   date: "Apr 2024 - Present",
    //   description:
    //     "Ambassador of Huddle01, a dRTC service provider Company.",
    // },
    // {
    //   id: 4,
    //   role: "Web Developer Intern",
    //   company: "Zudio Development",
    //   date: "Mar 2024 - May 2024",
    //   description:
    //     "Learned MERN Stack and developed some awesome projects with my team.",
    // }
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/experience/")
      .then((response) => response.json())
      .then((data) => {
        setExperienceData(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6 text-center">
        Experience
      </h1>

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full sm:w-3/4 lg:w-2/3">
        {experienceData.map((experience) => (
          <div
            key={experience.id}
            className="mb-8 p-4 sm:p-6 bg-gray-800 rounded-lg"
          >
            <h2 className="font-bold text-xl sm:text-2xl text-white mb-1">
              {experience.role}
            </h2>
            <h3 className="text-gray-400 text-lg mb-2">{experience.company}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{experience.date}</p>
            <p className="text-gray-300 mt-3 text-sm sm:text-base">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
