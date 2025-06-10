import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaFire } from 'react-icons/fa';
import { div } from "motion/react-client";


const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-16 py-20 bg-green-50 min-h-screen">

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold text-blue-900">
          Arun Vijay AP
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          A driven creator focused on crafting scalable, sustainable solutions that blend technology and impact to make a real difference.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/Arun-Vijay-AP" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-black hover:text-gray-700 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/arun-vijay-ap/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-blue-700 hover:text-blue-800 hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:arunvijaypalanisamy@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-8 h-8 text-red-600 hover:text-red-700 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/bgimage.png"
          alt="Person Illustration"
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="px-6 md:px-16 py-16 bg-green-50">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
        What I Do?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-20">
        {/** Reusable Card Component */}
        {[
          {
            title: "Full Stack Development",
            tech: [
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", label: "HTML" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", label: "CSS" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", label: "SASS" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", label: "JavaScript" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", label: "React" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", label: "Node.js" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg", label: "NPM" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg", label: "Express" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg", label: "Flask" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg", label: "Flutter" },
            ],
            points: [
              "Developed responsive and dynamic web interfaces using React",
              "Developing web applications using MERN",
              "Engineered robust backend services using Node.js, Express, and Flask for scalable web applications.",
            ],
          },
          {
            title: "UI/UX Design",
            tech: [
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", label: "Figma" },
              { src: "https://w7.pngwing.com/pngs/213/165/png-transparent-adobe-logo-logos-xd-logos-and-brands-icon.png", label: "Adobe XD" },
            ],
            points: [
              "Crafted visually compelling user interfaces tailored for both mobile and web platforms.",
              "Designed and customized brand logos from the ground up to align with client identity and vision.",
              "Mapped and implemented user journey flows to enhance usability and streamline application functionality.",
            ],
          },
          {
            title: "Cloud Infra-Architecture",
            tech: [
              { src: "https://miro.medium.com/v2/resize:fit:1400/1*neG4D9C8UcJvNn6bverfIA.png", label: "AWS" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg", label: "Jenkins" },
              { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", label: "Docker" },
            ],
            points: [
              "Experience working on cloud platforms",
              "Hosting and maintaining websites on virtual machine instances along with integration of databases",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="p-6 bg-green-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md mx-auto"
          >
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
              {section.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {section.tech.map((tech, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={tech.src}
                    alt={tech.label}
                    className="h-8 hover:scale-110 transition-transform duration-200"
                  />
                  <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>

            <ul className="space-y-3 text-sm text-blue-900">
              {section.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <FaFire className="text-orange-500 mt-1 mr-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const CodingProfile = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 sm:py-16 md:py-20 bg-green-50">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 sm:mb-10 md:mb-12 text-center">
        Coding Profile
      </h2>

      <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-3xl mx-auto">
        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/aparunvijay/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row justify-between items-center bg-green-50 rounded-2xl shadow-md px-4 sm:px-6 py-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="h-8 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-blue-900">LeetCode</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-blue-800 text-center sm:text-right">
            200+ Problems Solved
          </span>
        </a>

        {/* GeeksforGeeks */}
        <a
          href="https://www.geeksforgeeks.org/user/aparunthejr6x/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row justify-between items-center bg-green-50 rounded-2xl shadow-md px-4 sm:px-6 py-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
              alt="GeeksforGeeks"
              className="h-8 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-blue-900">GeeksforGeeks</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-blue-800 text-center sm:text-right">
            50+ Problems Solved
          </span>
        </a>

        {/* SkillRack */}
        <a
          href="http://www.skillrack.com/profile/407671/0872be4ce313fc357d3d645b8403e9b0b7937916"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row justify-between items-center bg-green-50 rounded-2xl shadow-md px-4 sm:px-6 py-4 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0">
            <img
              src="https://ugc.production.linktr.ee/32b70a01-77b7-4804-85a1-e371da9ed2db_aUapl7nz-400x400.jpeg?io=true&size=thumbnail-stack-v1_0"
              alt="SkillRack"
              className="h-8 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-semibold text-blue-900">SkillRack</span>
          </div>
          <span className="text-base sm:text-lg font-bold text-blue-800 text-center sm:text-right">
            1200+ Problems Solved
          </span>
        </a>
      </div>
    </div>
  );
};



const HomePage = () => {
  return (
    <>
      <Home />
      <Skills />
      <CodingProfile />
    </>
  );
};

export default HomePage;
