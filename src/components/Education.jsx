import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      title: "St. Joseph’s Institute of Technology, Chennai",
      duration: "2022 - 2026",
      degree: "B.Tech (Artificial Intelligence and Data Science)",
      points: ["CGPA: 8.60"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCmT18MthwZuSNhssTyKdMTYkEeIwZCofqw&s",
      gradient: "from-blue-500 to-indigo-500",
      iconColor: "text-indigo-500",
    },
    {
      title: "Sri Vignesh Vidyalaya Senior Secondary School, Trichy",
      duration: "Higher Secondary",
      degree: "Higher Secondary Schooling",
      points: [],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqOdsbVtbsmwrIm3pbK3c0vxDKLhMkpdvLQ&s",
      gradient: "from-pink-500 to-purple-500",
      iconColor: "text-pink-500",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-200 px-6 md:px-16 py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-purple-600 mb-12 pb-2 text-center drop-shadow-sm">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-lg mx-auto border-2 border-white/20 hover:border-white/40 overflow-hidden"
            >
              {/* Card background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
              ></div>

              {/* Animated border glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <img
                  src={edu.img}
                  alt={edu.title}
                  className="h-24 w-24 object-contain mb-6 rounded-xl shadow-md bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <h3
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.gradient} mb-2`}
                >
                  {edu.title}
                </h3>
                <span className="text-sm font-medium text-gray-600 mb-3">
                  {edu.duration}
                </span>
                <h4 className="text-base font-semibold text-gray-800 mb-4">
                  {edu.degree}
                </h4>

                {edu.points.length > 0 && (
                  <ul className="space-y-2 text-sm text-gray-700">
                    {edu.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center group/point hover:bg-gray-50/50 px-3 py-2 rounded-lg transition-colors duration-200"
                      >
                        <FaGraduationCap
                          className={`${edu.iconColor} mr-2 group-hover/point:scale-110 transition-transform duration-200 drop-shadow-sm`}
                        />
                        <span className="font-medium group-hover/point:text-gray-900 transition-colors duration-200">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-bl-full`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
