import React, { useState, useRef } from "react";

const Contact = () => {
    const [contactData] = useState([
        {
            id: 1,
            platform: "LinkedIn",
            link: "https://www.linkedin.com/in/username",
        },
        {
            id: 2,
            platform: "Github",
            link: "https://github.com/yourusername",
        },
        {
            id: 3,
            platform: "Email",
            link: "mailto:your-email@example.com",
        },
    ]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex flex-col items-center mt-10 mx-5">
            <h1 className="font-bold text-3xl text-pink-500 mb-6">Contact</h1>

            {/* Contact Links Section */}
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-6xl w-full sm:w-2/3 mb-10">
                {contactData.map((contact) => (
                    <div key={contact.id} className="mb-6">
                        <h2 className="font-bold text-xl text-white">{contact.platform}</h2>
                        <a
                            href={contact.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:underline break-all"
                        >
                            {contact.link}
                        </a>
                    </div>
                ))}
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full sm:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
