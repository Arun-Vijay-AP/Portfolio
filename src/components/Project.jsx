import React from "react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFlask,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiArduino,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiFastapi,
} from "react-icons/si";

const projectData = [
  {
    img: "cropsense.png",
    name: "CropSense",
    description:
      "Smart farming system using real-time IoT sensor data with Arduino. Data visualization & analytics for agriculture.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiArduino />],
    github: "https://github.com/Arun-Vijay-AP/Crop-Sense-React",
  },
  {
    img: "HireEase.png",
    name: "HireEase",
    description:
      "AI-powered recruitment system with resume parsing & candidate shortlisting. Interactive dashboards for recruiters & candidates.",
    tech: [<SiPython />, <SiReact />, <SiFastapi />, <SiTailwindcss />],
    github: "https://github.com/Arun-Vijay-AP/HireEase",
  },
  {
    img: "feelsync.png",
    name: "FeelSync",
    description:
      "Mental health assistant chatbot for personalized support and sentiment analysis using SVM. Reddit API, Flask backend, React frontend.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiMongodb />],
    github: "https://github.com/Arun-Vijay-AP/FeelSync",
  },
  {
    img: "dehaze.png",
    name: "Dehazing",
    description:
      "Image dehazing using ML to enhance image clarity by reducing smoke effects. Useful in photography, surveillance, and monitoring.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: "https://github.com/Arun-Vijay-AP",
  },
  {
    img: "tourism.png",
    name: "Tourism Website",
    description:
      "Responsive travel platform with real-time city details and personalized trip recommendations using APIs.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiPython />],
    github: "https://github.com/Arun-Vijay-AP/Tourism-Web",
  },
  {
    img: "whispeit.png",
    name: "WhispeIt",
    description:
      "Full-stack real-time chat app with auth, cloud uploads, online tracking. Built with Socket.io, React, Node.js.",
    tech: [<SiReact />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiJavascript />, <SiTailwindcss />],
    github: "https://github.com/Arun-Vijay-AP/WhispeIt",
  },
];

const Project = () => {
  return (
    <div className="bg-slate-300 py-16 px-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Projects</h2>

      {/* Header section with image on left and description on right */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-slate-300 rounded-xl px-10 py-10 mb-16">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/projectlogo.png"
            alt="Projects Illustration"
            className="w-80 h-80 object-contain"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-900 text-lg leading-relaxed">
            My projects span across domains using modern technology—from ML-based image processing and mental health
            chatbots to real-time IoT solutions and full-stack web apps.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
        {projectData.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-transparent hover:border-blue-800 hover:border-4"
          >
            {/* Image section */}
            <div className="md:w-1/2">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-64 p-2 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content section */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-4 bg-gradient-to-tr from-blue-50 to-white">
              <h3 className="text-2xl font-bold text-blue-900 flex items-center ml-40 m-5">
                📘 <span className="ml-2">{project.name}</span>
              </h3>
              <p className="text-blue-950 text-base leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm font-medium">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm hover:bg-blue-200 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Project;
