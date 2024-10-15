import React, { useState } from "react";
import image from "../assets/second-img.jpg"
import shape from "../assets/graph.png"
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const About = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleEducationTab = () => {
        console.log("Education Tab Clicked");
        // Logic to show the Education component
        setActiveTab('education');
    }
    const handleSkillsTab = () => {
        console.log("Skills Tab Clicked");
        // Logic to show the Skills component
        setActiveTab('skills');
    }
    const handleExperienceTab = () => {
        console.log("Experience Tab Clicked");
        // Logic to show the Experience component
        setActiveTab('experience');
    }
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center mt-10 space-y-10 md:space-y-0 md:space-x-10">
                {/* main container */}
                <div className="w-full md:w-1/2 flex justify-center">
                    {/* image container */}
                    <div className="w-80 h-80 overflow-hidden relative">
                        <img
                            src={image}
                            alt="Main Image"
                            className="w-full h-full object-cover"
                            style={{
                                WebkitMaskImage: `url(${shape})`,
                                WebkitMaskSize: 'cover',
                                maskImage: `url(${shape})`,
                                maskSize: 'cover'
                            }}
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
                    {/* text container */}
                    <h1 className="font-bold text-2xl mb-4">About Me</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima quia excepturi deserunt cum maxime quo ad accusantium iure, eligendi, consequatur eum fuga molestias unde libero voluptates dolorem ipsam pariatur!</p>
                </div>
            </div>
            <div className="flex justify-between mx-10 text-center space-x-2">
                <div className="border w-full py-2 cursor-pointer hover:font-bold" onClick={handleEducationTab}>
                    {/* Education */}
                    <h2>Education</h2>
                </div>
                <div className="border w-full py-2 cursor-pointer hover:font-bold" onClick={handleSkillsTab}>
                    {/* Skills */}
                    <h2>Skills</h2>
                </div>
                <div className="border w-full py-2 cursor-pointer hover:font-bold" onClick={handleExperienceTab}>
                    {/* Experience */}
                    <h2>Experience</h2>
                </div>
            </div>
            {/* Render Components Based on Active Tab */}
            <div className="p-4">
                {activeTab === 'home' && <div></div>}
                {activeTab === 'education' && <Education />}
                {activeTab === 'skills' && <Skills />}
                {activeTab === 'experience' && <Experience />}
            </div>
        </>
    );
}

export default About;