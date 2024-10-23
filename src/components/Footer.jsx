import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const [about, setAbout] = useState()
    // I'm a full-stack developer passionate about building web and mobile applications that make a difference.
    const [contactData, setContactData] = useState([
        //     {
        //         id: 1,
        //         platform: "LinkedIn",
        //         link: "https://www.linkedin.com/in/soumyodeep-das/",
        //     },
        //     {
        //         id: 2,
        //         platform: "Github",
        //         link: "https://github.com/Soumyodeep-Das",
        //     },
        //     {
        //         id: 3,
        //         platform: "Email",
        //         link: "soumyodeep***@gmail.com",
        //     },
    ]);

    useEffect(() => {
        fetch("http://localhost:5000/api/footer/")
            .then((response) => response.json())
            .then((data) => {
                setContactData(data[0].contactData);
                setAbout(data[0].about);
            });
    }, []);


    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-400">
                        {about}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#projects" className="hover:underline">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="hover:underline">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Contact</h2>
                    <p className="text-gray-400">Feel free to reach out!</p>
                    <ul className="space-y-2">
                        {contactData.map((contact) => (
                            <li key={contact._id}>
                                <a href={contact.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:underline">
                                    {contact.platform === "LinkedIn" && <FaLinkedin />}
                                    {contact.platform === "Github" && <FaGithub />}
                                    {contact.platform === "Email" && <FaEnvelope />}
                                    {contact.platform === "X" && <FaTwitter />}
                                    <span>{contact.platform}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                    <div className="flex space-x-4">
                        {contactData.map((contact) => (
                            <a key={contact._id} href={contact.link} target="_blank" rel="noreferrer" className={`hover:text-${contact.platform === "LinkedIn" ? "blue" : contact.platform === "Github" ? "gray" : contact.platform === "Email" ? "red" : "blue"}-400`}>
                                {contact.platform === "LinkedIn" && <FaLinkedin size={24} />}
                                {contact.platform === "Github" && <FaGithub size={24} />}
                                {contact.platform === "Email" && <FaEnvelope size={24} />}
                                {contact.platform === "X" && <FaTwitter size={24} />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-4 text-center">
                <p className="text-gray-500">
                    &copy; 2024 My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
