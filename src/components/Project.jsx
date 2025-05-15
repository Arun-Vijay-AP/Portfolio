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
} from "react-icons/si";

const projectData = [
  {
    name: "CropSense",
    description:
      "Smart farming system using real-time IoT sensor data with Arduino. Data visualization & analytics for agriculture.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiArduino />],
    github: "https://github.com/Arun-Vijay-AP/Crop-Sense-React",
  },
  {
    name: "FeelSync",
    description:
      "Mental health assistant chatbot for personalized support and sentiment analysis using SVM. Reddit API, Flask backend, React frontend.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiMongodb />],
    github: "https://github.com/Arun-Vijay-AP/FeelSync",
  },
  {
    name: "Dehazing",
    description:
      "Image dehazing using ML to enhance image clarity by reducing smoke effects. Useful in photography, surveillance, and monitoring.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: "",
  },
  {
    name: "Tourism Website",
    description:
      "Responsive travel platform with real-time city details and personalized trip recommendations using APIs.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiPython />],
    github: "https://github.com/Arun-Vijay-AP/Tourism-Web",
  },
  {
    name: "WhispeIt",
    description:
      "Full-stack real-time chat app with auth, cloud uploads, online tracking. Built with Socket.io, React, Node.js.",
    tech: [<SiReact />, <SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiJavascript />, <SiTailwindcss />],
    github: "https://github.com/Arun-Vijay-AP/WhispeIt",
  },
];

const Project = () => {
  return (
    <div className="bg-green-50 py-16 px-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Projects</h2>

      {/* Header section with image on left and description on right */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-green-50 rounded-xl px-10 py-10 mb-16">
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/projectlogo.png"
            alt="Projects Illustration"
            className="w-80 h-80 object-contain"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            My projects span across domains using modern technology—from ML-based image processing and mental health
            chatbots to real-time IoT solutions and full-stack web apps.
          </p>
        </div>
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projectData.map((project, idx) => (
          <a
            key={idx}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-200 rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 block"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-1 flex items-center">
              📘 <span className="ml-2">{project.name}</span>
            </h3>
            <p className="text-blue-950 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-3 text-xl">
              {project.tech.map((tech, index) => (
                <span key={index} className="flex items-center space-x-1">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
