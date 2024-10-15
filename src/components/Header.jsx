import React, { useState } from "react";

const Header = () => {
  const [logo, setLogo] = useState("Soumyodeep Das");
  const [navLinks, setNavLinks] = useState([
    { name: "Home", link: "/home", id: 1 },
    { name: "About", link: "/about", id: 2 },
    { name: "Skills", link: "/skills", id: 3 },
    { name: "Projects", link: "/projects", id: 4 },
    { name: "Resume", link: "/resume", id: 5 },
    { name: "Contact", link: "/contact", id: 6 },
  ]);
  const [actionButton, setActionButton] = useState({
    name: "Hire Me",
    link: "/hire",
  });
  return (
    <>
      <div className="header-container flex justify-between px-5 py-2 bg-slate-200">
        <div className="logo my-2">
          <h1 className="text-xl font-bold">{logo}</h1>
        </div>
        <div className="space-x-12 my-2">
          {
            navLinks.map((navLink) => {
              return (
                <a href={navLink.link} key={navLink.id} className="text-lg font-semibold  hover:text-amber-600">{navLink.name}</a>
              )
            })
          }
        </div>
        <div className="hire-btn pt-3">
          <a className="hire px-3 py-2 bg-orange-600 rounded-full hover:bg-orange-300" href={actionButton.link}>{actionButton.name}</a>
        </div>
      </div>
    </>
  );
}

export default Header;