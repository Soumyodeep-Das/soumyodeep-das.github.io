import React, { useState, useEffect } from "react";
import { fetchExperienceData } from "../apis/PortFolioApis";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const data = await fetchExperienceData();
        if (data.length > 0) {
          setExperienceData(data);
        } else {
          console.error("No experience data found");
        }
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchExperience();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6 text-center">
        Experience
      </h1>

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-4xl w-full sm:w-3/4 lg:w-2/3">
        {experienceData.map((experience) => (
          <div
            key={experience._id}
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
