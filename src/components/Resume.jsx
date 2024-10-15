import React, { useState } from "react";

const Resume = () => {
    return (
        <>
            <div className="resume-card p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-medium text-black">Download My Resume</h2>
                <img src="/path/to/your/resume-thumbnail.jpg" alt="Resume Thumbnail" className="w-full h-auto rounded-md" />
                <a href="/path/to/your/resume.pdf" download>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                        Download
                    </button>
                </a>
            </div>
        </>
    )
}

export default Resume;