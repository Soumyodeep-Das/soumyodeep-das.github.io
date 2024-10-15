import React, { useState } from "react";

const Experience = () => {
  const [experienceData] = useState([
    {
      id: 1,
      role: "Software Developer",
      company: "Google",
      date: "2019 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Facebook",
      date: "2017 - 2019",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
    },
    {
      id: 3,
      role: "Backend Developer",
      company: "Amazon",
      date: "2015 - 2017",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis nec lacinia.",
    },
  ]);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6">Experience</h1>
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-6xl w-2/3">
        {experienceData.map((experience) => (
          <div key={experience.id} className="mb-6">
            <h2 className="font-bold text-xl text-white">{experience.role}</h2>
            <h3 className="text-gray-400 mb-2">{experience.company}</h3>
            <p className="text-gray-300">{experience.date}</p>
            <p className="text-gray-300 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;