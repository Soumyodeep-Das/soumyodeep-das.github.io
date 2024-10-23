import React, { useState, useEffect } from "react";
import image from "../assets/second-img.jpg"
import shape from "../assets/graph.png"
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import { fetchAboutData } from "../apis/PortFolioApis";

// I am a Full Time MCA student at Jadavpur University.\n Besides of that, I\'m also a Full Stack Web Dev and an Android App Dev. I love to contribute to Open Source projects and I am a huge fan of Linux and Open Source.\n With that I\'m also a Web3, Blockchain and DevOps enthusiast. Currently exploring technologies and trying to learn new things everyday.

const About = () => {
    const [activeTab, setActiveTab] = useState('home');
    // const [image, setImage] = useState('');
    // const [shape, setShape] = useState('');
    const [aboutText, setAboutText] = useState('');

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const data = await fetchAboutData();
                if (data.length > 0) {
                    setAboutText(data[0].aboutText); // Set aboutText from the first entry
                    // setImage(data[0].image);
                    // setShape(data[0].shape);
                } else {
                    console.error('No about data found');
                }
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        fetchAbout();
    }, []);

    const handleConditionalRendering = (tabName) => {
        if (activeTab === tabName) {
            setActiveTab('home');
        } else {
            setActiveTab(tabName);
        }
    }

    const handleEducationTab = () => {
        console.log("Education Tab Clicked");
        // Logic to show the Education component
        handleConditionalRendering('education');
    }
    const handleSkillsTab = () => {
        console.log("Skills Tab Clicked");
        // Logic to show the Skills component
        handleConditionalRendering('skills');
    }
    const handleExperienceTab = () => {
        console.log("Experience Tab Clicked");
        // Logic to show the Experience component
        handleConditionalRendering('experience');
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
                    <p className="text-center">{aboutText}</p>
                </div>
            </div>
            <div className="flex justify-between mx-10 text-center space-x-2">
                <div className="border w-full py-2 cursor-pointer hover:font-bold hover:bg-gray-200" onClick={handleEducationTab}>
                    {/* Education */}
                    <h2>Education</h2>
                </div>
                <div className="border w-full py-2 cursor-pointer hover:font-bold hover:bg-gray-200" onClick={handleSkillsTab}>
                    {/* Skills */}
                    <h2>Skills</h2>
                </div>
                <div className="border w-full py-2 cursor-pointer hover:font-bold hover:bg-gray-200" onClick={handleExperienceTab}>
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