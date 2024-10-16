import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-400">
                        I'm a full-stack developer passionate about building web and mobile applications that make a difference.
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
                        <li>
                            <a href="mailto:your-email@example.com" className="flex items-center space-x-2 hover:underline">
                                <FaEnvelope /> <span>your-email@example.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:underline">
                                <FaLinkedin /> <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center space-x-2 hover:underline">
                                <FaGithub /> <span>GitHub</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="hover:text-blue-400">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                            <FaGithub size={24} />
                        </a>
                        <a href="mailto:your-email@example.com" className="hover:text-red-400">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 border-t border-gray-800 pt-4 text-center">
                <p className="text-gray-500">
                    &copy; 2024 My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
