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
import { FaExternalLinkAlt } from "react-icons/fa";

const projectData = [
  {
    img: "cropsense.png",
    name: "CropSense",
    description:
      "Smart farming system using real-time IoT sensor data with Arduino. Data visualization & analytics for agriculture.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiArduino />],
    github: "https://github.com/Arun-Vijay-AP/Crop-Sense-React",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    img: "HireEase.png",
    name: "HireEase",
    description:
      "AI-powered recruitment system with resume parsing & candidate shortlisting. Interactive dashboards for recruiters & candidates.",
    tech: [<SiPython />, <SiReact />, <SiFastapi />, <SiTailwindcss />],
    github: "https://github.com/Arun-Vijay-AP/HireEase",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    img: "feelsync.png",
    name: "FeelSync",
    description:
      "Mental health assistant chatbot for personalized support and sentiment analysis using SVM. Reddit API, Flask backend, React frontend.",
    tech: [<SiPython />, <SiReact />, <SiFlask />, <SiMongodb />],
    github: "https://github.com/Arun-Vijay-AP/FeelSync",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    img: "dehaze.png",
    name: "Dehazing",
    description:
      "Image dehazing using ML to enhance image clarity by reducing smoke effects. Useful in photography, surveillance, and monitoring.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: "https://github.com/Arun-Vijay-AP",
    gradient: "from-orange-400 to-red-500",
  },
  {
    img: "tourism.png",
    name: "Tourism Website",
    description:
      "Responsive travel platform with real-time city details and personalized trip recommendations using APIs.",
    tech: [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiPython />],
    github: "https://github.com/Arun-Vijay-AP/Tourism-Web",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    img: "whispeit.png",
    name: "WhispeIt",
    description:
      "Full-stack real-time chat app with auth, cloud uploads, online tracking. Built with Socket.io, React, Node.js.",
    tech: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiJavascript />,
      <SiTailwindcss />,
    ],
    github: "https://github.com/Arun-Vijay-AP/WhispeIt",
    gradient: "from-pink-500 to-yellow-500",
  },
];

const Project = () => {
  return (
    <div className="w-full min-h-screen bg-slate-300 px-6 md:px-16 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-16 text-center drop-shadow-sm">
          Projects
        </h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projectData.map((project, idx) => (
            <a
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-white/20 hover:border-white/40 overflow-hidden"
            >
              {/* Card background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Animated border glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
              ></div>

              <div className="relative z-10 flex flex-col space-y-4">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-52 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />

                <h3
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
                >
                  {project.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex justify-end">
                  <span className="flex items-center text-sm font-medium text-blue-800 group-hover:underline">
                    View on GitHub <FaExternalLinkAlt className="ml-2" />
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
