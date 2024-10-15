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
            <div className="flex flex-col justify-center items-center mt-10 mx-5">
                <h1 className="font-bold text-2xl mb-4">Education</h1>
                <div className="flex flex-col justify-center items-center w-full space-y-4">
                    {educationData.map((edu, index) => (
                        <div key={index} className="w-full border p-5">
                            <h2 className="font-bold text-xl">{edu.degree}</h2>
                            {edu.field && <p>{edu.field}</p>}
                            <p>{edu.years}</p>
                            <p>{edu.institution}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Education;