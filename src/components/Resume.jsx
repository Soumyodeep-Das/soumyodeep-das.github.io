import React, { useState, useEffect } from "react";
import resumeThumbnail from "../assets/resume-preview.png";
import { fetchResumeData } from "../apis/PortFolioApis";

const Resume = () => {
  const [resumeData, setResumeData] = useState([]);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await fetchResumeData();
        if (data.length > 0) {
          setResumeData(data[0]);
        } else {
          console.error("No resume data found");
        }
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-80 bg-gray-100 px-4 py-4">
      <div className="resume-card p-6 sm:p-8 max-w-sm w-full bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-lg sm:text-xl font-medium text-black text-center">
          {resumeData?.title}
        </h2>

        <img
          src={resumeThumbnail}
          alt="Resume Thumbnail"
          className="w-auto h-2/5 rounded-md object-cover"
        />

        <a href={resumeData?.downloadLink} download target="_blank">
          <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300">
            {resumeData?.buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
