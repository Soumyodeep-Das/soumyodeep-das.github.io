import React from "react";

const Resume = () => {
  return (
    <div className="flex justify-center items-center min-h-80 bg-gray-100 px-4">
      <div className="resume-card p-6 sm:p-8 max-w-sm w-full bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-lg sm:text-xl font-medium text-black text-center">
          Download My Resume
        </h2>

        <img
          src="/path/to/your/resume-thumbnail.jpg"
          alt="Resume Thumbnail"
          className="w-full h-auto rounded-md object-cover"
        />

        <a href="/path/to/your/resume.pdf" download>
          <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300">
            Download
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
