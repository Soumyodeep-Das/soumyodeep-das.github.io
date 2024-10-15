import React, { useState } from "react";

const Education = () => {
    const [educationData, setEducationData] = useState([
        {
            id: 1,
            degree: "Masters of Computer Application (MCA)",
            field: "Computer Application",
            years: "2024-2026",
            institution: "Jadavpur University, Kolkata"
        },
        {
            id: 2,
            degree: "Bachelor of Science (B.Sc.) with Honours",
            field: "Computer Science",
            years: "2021-2024",
            institution: "Vivekananda College, Thakurpukur"
        },
        {
            id: 3,
            degree: "Higher Secondary",
            field: "Science (PCMB)",
            years: "2019-2021",
            institution: "Khariberia Vivekananda Vidyapith, Budge Budge"
        },
    ]);

    return (
        <>
            <div className="flex flex-col items-center mt-10 mx-5">
                <h1 className="font-bold text-3xl text-pink-500 mb-6">Education</h1>
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-6xl w-2/3">
                    {educationData.map((education) => (
                        <div key={education.id} className="mb-6">
                            <h2 className="font-bold text-xl text-white">{education.degree}</h2>
                            <h3 className="text-gray-400 mb-2">{education.field}</h3>
                            <p className="text-gray-300">{education.years}</p>
                            <p className="text-gray-300 mt-2">{education.institution}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Education;