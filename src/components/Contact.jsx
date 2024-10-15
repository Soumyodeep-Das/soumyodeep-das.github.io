import React, { useState } from "react";

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
            link: ""
        },
        {
            id: 3,
            platform: "Email",
            link: "mailto:"
        },
    ]);

    return (
        <div className="flex flex-col items-center mt-10 mx-5">
            <h1 className="font-bold text-3xl text-pink-500 mb-6">Contact</h1>
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-6xl w-2/3">
                {contactData.map((contact) => (
                    <div key={contact.id} className="mb-6">
                        <h2 className="font-bold text-xl text-white">{contact.platform}</h2>
                        <a
                            href={contact.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300"
                        >
                            {contact.link}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );


}

export default Contact;