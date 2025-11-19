import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaFire } from 'react-icons/fa';
import { div } from "motion/react-client";


const Home = () => {
  const fullText = "Creative Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-16 py-20 bg-slate-300 min-h-screen">

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl ml-4 sm:ml-10 md:ml-24 lg:ml-36 pb-3 font-extrabold bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-950 bg-clip-text text-transparent">
          Arun Vijay AP
        </h1>
        <div className="text-4xl md:text-6xl font-bold text-foreground h-20 flex items-center justify-center">
          <h1 className="border-r-2 border-primary animate-bounce pr-2 pb-2 magnetic bg-gradient-to-r bg-clip-text from-slate-700 via-slate-600 via-slate-500 via-blue-300 via-blue-500 to-blue-700 text-transparent">
            {displayText}
          </h1>
        </div>

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
    <div className="px-6 md:px-16 py-16 bg-slate-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-12 text-center drop-shadow-sm">
          What I Do?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-20">
          {[
            {
              title: "Full Stack Development",
              tech: [
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", label: "HTML" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", label: "CSS" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", label: "SASS" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", label: "JavaScript" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", label: "React" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg", label: "FastAPI" },
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
              gradient: "from-blue-500 to-cyan-500",
              iconColor: "text-cyan-500"
            },
            {
              title: "Java & Spring Boot Development",
              tech: [
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", label: "Java" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg", label: "Spring Boot" },
                { src: "https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/data_view.png", label: "JDBC" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/maven/maven-original.svg", label: "Maven" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hibernate/hibernate-original.svg", label: "Hibernate" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", label: "MySQL" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", label: "Docker" },
              ],
              points: [
                "Built scalable REST APIs and microservices using Spring Boot",
                "Integrated Hibernate/JPA for seamless ORM and database management",
                "Optimized backend performance through caching, connection pooling, and profiling"
              ],
              gradient: "from-orange-500 to-red-500",
              iconColor: "text-red-500"
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
              gradient: "from-purple-500 to-pink-500",
              iconColor: "text-pink-500"
            },
            {
              title: "Cloud Infra-Architecture",
              tech: [
                { src: "https://signin.aws.amazon.com/static/image/aws_logo_smile.png", label: "AWS" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg", label: "Jenkins" },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", label: "Docker" },
              ],
              points: [
                "Experience working on cloud platforms",
                "Hosting and maintaining websites on virtual machine instances along with integration of databases",
              ],
              gradient: "from-green-500 to-emerald-500",
              iconColor: "text-emerald-500"
            },
          ].map((section, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-md mx-auto border-2 border-white/20 hover:border-white/40 overflow-hidden"
            >

              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>

              <div className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>

              <div className="relative z-10">
                <h2 className={`text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r ${section.gradient} mb-8 group-hover:scale-105 transition-transform duration-300`}>
                  {section.title}
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8 p-4 bg-gray-50/50 rounded-2xl group-hover:bg-white/50 transition-colors duration-300">
                  {section.tech.map((tech, idx) => (
                    <div key={idx} className="relative group/tech">
                      <div className="p-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 hover:rotate-3">
                        <img
                          src={tech.src}
                          alt={tech.label}
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <span className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover/tech:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg border border-gray-700">
                        {tech.label}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-4 text-sm text-gray-700">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start group/point hover:bg-gray-50/50 p-2 rounded-lg transition-colors duration-200">
                      <FaFire className={`${section.iconColor} mt-1.5 mr-3 group-hover/point:scale-110 transition-transform duration-200 drop-shadow-sm`} />
                      <span className="leading-relaxed font-medium group-hover/point:text-gray-900 transition-colors duration-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${section.gradient} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CodingProfile = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 sm:py-16 md:py-20 bg-slate-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-8 sm:mb-10 md:mb-12 text-center drop-shadow-sm">
          Coding Profile
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-3xl mx-auto">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/aparunvijay/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row justify-between items-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl px-6 sm:px-8 py-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-white/20 hover:border-white/40 overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>

            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0 group-hover:scale-105 transition-transform duration-300">
              <div className="p-2 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-all duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                  alt="LeetCode"
                  className="h-8 sm:h-10 object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
                LeetCode
              </span>
            </div>

            <div className="relative z-10 text-base sm:text-lg font-bold text-center sm:text-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 group-hover:from-orange-700 group-hover:to-yellow-700 transition-all duration-300">
                300+ Problems Solved
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-10 rounded-bl-full"></div>
          </a>

          {/* GeeksforGeeks */}
          <a
            href="https://www.geeksforgeeks.org/user/aparunthejr6x/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row justify-between items-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl px-6 sm:px-8 py-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-white/20 hover:border-white/40 overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>

            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0 group-hover:scale-105 transition-transform duration-300">
              <div className="p-2 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-all duration-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                  alt="GeeksforGeeks"
                  className="h-8 sm:h-10 object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                GeeksforGeeks
              </span>
            </div>

            <div className="relative z-10 text-base sm:text-lg font-bold text-center sm:text-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-300">
                100+ Problems Solved
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 opacity-10 rounded-bl-full"></div>
          </a>

          {/* SkillRack */}
          <a
            href="http://www.skillrack.com/profile/407671/0872be4ce313fc357d3d645b8403e9b0b7937916"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row justify-between items-center bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl px-6 sm:px-8 py-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-white/20 hover:border-white/40 overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl"></div>

            {/* Animated border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>

            <div className="relative z-10 flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0 group-hover:scale-105 transition-transform duration-300">
              <div className="p-2 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-all duration-200">
                <img
                  src="https://ugc.production.linktr.ee/32b70a01-77b7-4804-85a1-e371da9ed2db_aUapl7nz-400x400.jpeg?io=true&size=thumbnail-stack-v1_0"
                  alt="SkillRack"
                  className="h-8 sm:h-10 object-contain rounded-lg"
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                SkillRack
              </span>
            </div>

            <div className="relative z-10 text-base sm:text-lg font-bold text-center sm:text-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300">
                1200+ Problems Solved
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
          </a>
        </div>
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
