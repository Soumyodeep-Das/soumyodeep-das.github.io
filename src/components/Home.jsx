import React, { useState } from "react";
import webImage from "../assets/banner_wallpaper.svg";
import sdasImage from "../assets/480-bg-removed.png";

const Home = () => {
    const [profileLinks, setProfileLinks] = useState ([
        {
            id: 1,
            title: "Github",
            link: "https://github.com/Soumyodeep-Das",
            logo: "fa-brands text-4xl  fa-github",
        },
        {
            id: 2,
            title: "LinkedIn",
            link: "https://www.linkedin",
            logo: "fa-brands text-4xl  fa-linkedin-in",
        },
        {
            id: 3,
            title: "Twitter",
            link: "https://twitter.com/SoumyodeepDas",
            logo: "fa-brands text-4xl  fa-twitter",
        },
    ])
    return (
        <>
            <div style={{
                backgroundImage: `url(${webImage})`,
                backgroundSize: "cover",
            }} className="flex justify-center items-center text-white">
                <div className="w-full flex justify-center">
                    <div className="ml-10">
                        <h1 className="text-5xl font-bold mt-5">Hello, I'm Soumyodeep Das</h1>
                        <p className="text-2xl mt-5">I'm a Full Stack Developer</p>
                        <div className="flex items-center space-x-2 mt-3">
                            {
                                profileLinks.map((profileLink) => (
                                    <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" key={profileLink.id} href={profileLink.link}><i className={profileLink.logo}></i></a>
                                   
                                ))
                            } 
                        </div>
                        <a href="/contact" className="text-2xl mt-5 bg-amber-600 px-5 py-2 rounded-full hover:bg-amber-300 inline-block">Contact Me</a>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <img src={sdasImage} alt="Soumyodeep Das" className="w-72 rounded-full shadow-xl" style={{
                backgroundImage: `url(${webImage})`,
                backgroundSize: "cover",
            }}/>
                </div>
            </div>
        </>
    );
}

export default Home;