import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projectsData, setProjectData] = useState([
    // {
    //   id: 1,
    //   title: "RaktSeva",
    //   description:
    //     "A centralised platform to find nearby blood donors and blood banks.",
    //   techStack: "HTML, CSS, JavaScript, Java SpringBoot, MySQL",
    //   github: "https://github.com/Soumyodeep-Das/RaktSeva",
    //   live: "https://github.com/Soumyodeep-Das/RaktSeva",
    // },
    // {
    //   id: 2,
    //   title: "Contact Manager",
    //   description: "A web application to store and manage all your contacts.",
    //   techStack: "HTML, CSS, JavaScript, Java SpringBoot, MySQL",
    //   github: "https://github.com/Soumyodeep-Das/Contact-Manager",
    //   live: "https://github.com/Soumyodeep-Das/Contact-Manager",
    // },
    // {
    //   id: 3,
    //   title: "Emotion Seeker",
    //   description:
    //     "AI project that predicts user emotion based on real-time video.",
    //   techStack: "Google Colab, Python, MobileNet",
    //   github: "https://github.com/Soumyodeep-Das/Emotion-Seeker",
    //   live: "https://github.com/Soumyodeep-Das/Emotion-Seeker",
    // },
    // {
    //   id: 4,
    //   title: "Weather App",
    //   description: "A simple weather app that shows current weather.",
    //   techStack: "ReactJS, OpenWeatherMap API",
    //   github: "https://github.com/Soumyodeep-Das/Weather-Forecast-App-ReactJS",
    //   live: "https://soumyodeep-das.github.io/Weather-Forecast-App-ReactJS/",
    // },
    // {
    //   id: 5,
    //   title: "Ticket Booking System",
    //   description: "Train Ticket Booking website.",
    //   techStack: "HTML, CSS, JavaScript, PHP, MySQL",
    //   github: "https://github.com/Soumyodeep-Das/TicketBooking",
    //   live: "https://github.com/Soumyodeep-Das/TicketBooking",
    // },
    // {
    //   id: 6,
    //   title: "Tic Tac Toe",
    //   description: "Tic Tac Toe game built using React.js.",
    //   techStack: "JavaScript, ReactJS",
    //   github: "https://github.com/Soumyodeep-Das/React-TicTacToe",
    //   live: "https://soumyodeep-das.github.io/React-TicTacToe/",
    // },
    // {
    //   id: 7,
    //   title: "URL Shortener",
    //   description:
    //     "A URL shortener web application with JWT Auth using Node.js.",
    //   techStack: "JavaScript, Node.js, Express, MongoDB",
    //   github: "https://github.com/Soumyodeep-Das/URL-Shortner-JWT-Auth-NodeJs",
    //   live: "https://github.com/Soumyodeep-Das/URL-Shortner-JWT-Auth-NodeJs",
    // },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/project/")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mx-5">
      <h1 className="font-bold text-3xl text-pink-500 mb-6 text-center">
        Projects
      </h1>

      <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg max-w-5xl w-full">
        {/* Scrollable Grid Container */}
        <div className="max-h-[400px] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project._id}
                className="p-4 sm:p-6 bg-gray-800 rounded-lg"
              >
                <h2 className="font-bold text-xl text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-pink-400">
                    Tech Stack:
                  </span>{" "}
                  {project.techStack}
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
