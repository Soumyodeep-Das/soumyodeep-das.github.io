import React, { useState } from "react";

const Education = () => {
  const [educationData] = useState([
    {
      id: 1,
      degree: "Masters of Computer Application (MCA)",
      field: "Computer Application",
      years: "2024-2026",
      institution: "Jadavpur University, Kolkata",
      cgpa: "Y",
      cgpaVal: "N/A",
    },
    {
      id: 2,
      degree: "Bachelor of Science (B.Sc.) with Honours",
      field: "Computer Science",
      years: "2021-2024",
      institution: "Vivekananda College, Thakurpukur",
      cgpa: "Y",
      cgpaVal: "8.3",
    },
    {
      id: 3,
      degree: "Higher Secondary",
      field: "Science (PCMB)",
      years: "2019-2021",
      institution: "Khariberia Vivekananda Vidyapith, Budge Budge",
      cgpa: "N",
      cgpaVal: "80%",
    },
  ]);

  return (
    <div className="flex flex-col items-center mt-10 px-4 sm:px-8">
      {/* Header */}
      <h1 className="font-bold text-3xl text-pink-500 mb-8 text-center">
        Education
      </h1>

      {/* Education Container */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full space-y-8">
        {educationData.map((education) => (
          <div key={education.id} className="border-b border-gray-700 pb-6 last:border-b-0">
            {/* Degree */}
            <h2 className="font-bold text-xl md:text-2xl text-white">
              {education.degree}
            </h2>
            {/* Field of Study */}
            <h3 className="text-gray-400 text-lg mb-2">
              {education.field}
            </h3>
            {/* cgpa or percentage */}
            <p className="text-gray-300">
              {education.cgpa == 'Y' ? `CGPA: ${education.cgpaVal}` : `Percentage: ${education.cgpaVal}`}
            </p>
            {/* Years */}
            <p className="text-gray-300">{education.years}</p>
            {/* Institution */}
            <p className="text-gray-300 mt-1">{education.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
