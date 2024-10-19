import React, { useState, useEffect, useRef } from "react";
import webImage from "../assets/banner_wallpaper.svg";
import sdasImage from "../assets/480-bg-removed.png";
import Typed from "typed.js";

const Home = () => {

  const [homeTitle, setHomeTitle] = useState('') // Not present in the api
  const [typedStrings, setTypedStrings] = useState([])
  const [profileLinksState, setProfileLinksState] = useState([])

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/home/');
        const data = await response.json(); 
        if (data.length > 0) {
          setTypedStrings(data[0].typedStrings);
          const profileLinks = data[0].profileLinks.map((link) => ({
            id: link.id,
            title: link.title,
            link: link.link,
            logo: link.logo,
          }));
          setProfileLinksState(profileLinks);
        } else {
          console.error('No about data found');
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    };

    fetchHome();
  }, []);


  // Create Ref Element
  const devRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(devRef.current, {
      strings: typedStrings, // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 500,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, [typedStrings]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${webImage})`,
          backgroundSize: "cover",
        }}
        className="min-h-[70vh] flex flex-col md:flex-row justify-center items-center text-white bg-fixed px-5"
      >
        {/* Left Section: Text and Profile Links */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mt-10">
            Hello, I'm Soumyodeep Das
          </h1>
          <p className="text-xl md:text-2xl">
            I'm <span ref={devRef}></span>
          </p>

          {/* Profile Links */}
          <div className="flex space-x-4 mt-3">
            {profileLinksState.map((profileLink) => (
              <a
                className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 transition"
                key={profileLink.id}
                href={profileLink.link}
                target="_blank"
              >
                <i className={profileLink.logo}></i>
              </a>
            ))}
          </div>

          {/* Contact Me Button */}
          <a
            href="#"
            className="text-lg md:text-2xl mt-5 bg-amber-600 px-5 py-2 rounded-full hover:bg-amber-300 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={sdasImage}
            alt="Soumyodeep Das"
            className="w-64 md:w-72 rounded-full shadow-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
