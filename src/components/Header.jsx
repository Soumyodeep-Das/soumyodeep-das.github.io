import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [logo] = useState("Soumyodeep Das");
  const [navLinks] = useState([
    { name: "Home", link: "#home", id: 1 },
    { name: "About", link: "#about", id: 2 },
    // { name: "Skills", link: "#skills", id: 3 },
    { name: "Projects", link: "#projects", id: 4 },
    { name: "Resume", link: "#resume", id: 5 },
    { name: "Contact", link: "#contact", id: 6 },
  ]);
  const [actionButton] = useState({
    name: "Hire Me",
    link: "#contact",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-container flex justify-between items-center px-5 py-4 bg-slate-200 shadow-md">
        <div className="logo">
          <h1 className="text-xl font-bold text-gray-800">{logo}</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((navLink) => (
            <a
              href={navLink.link} // updated to link to section IDs
              key={navLink.id}
              className="text-lg font-semibold text-gray-700 hover:text-amber-600 transition"
            >
              {navLink.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-400 transition"
            href={actionButton.link}
          >
            {actionButton.name}
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center bg-slate-100 py-4 space-y-4 md:hidden">
          {navLinks.map((navLink) => (
            <a
              href={navLink.link} // updated to link to section IDs
              key={navLink.id}
              className="text-lg font-semibold text-gray-700 hover:text-amber-600 transition"
            >
              {navLink.name}
            </a>
          ))}
          <a
            className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-400 transition"
            href={actionButton.link}
          >
            {actionButton.name}
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
