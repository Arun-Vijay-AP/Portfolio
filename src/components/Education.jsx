import React from 'react';

const Education = () => {
  return (
    <div className="bg-slate-300 min-h-screen px-4 sm:px-6 md:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12">
        Education
      </h2>

      {/* St. Joseph’s Institute of Technology */}
      <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md p-6 mb-10 max-w-5xl mx-auto border border-transparent hover:border-blue-500 hover:border-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCmT18MthwZuSNhssTyKdMTYkEeIwZCofqw&s"
          alt="St. Joseph's Logo"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900">
              St. Joseph’s Institute of Technology, Chennai
            </h3>
            <span className="text-sm sm:text-md font-medium text-blue-800">2022 - 2026</span>
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
            B.Tech (Artificial Intelligence and Data Science)
          </h4>
          <ul className="list-none space-y-1 text-blue-900 text-sm sm:text-base">
            <li>⚡ CGPA: 8.60</li>
          </ul>
        </div>
      </div>

      {/* Sri Vignesh Vidyalaya */}
      <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto border border-transparent hover:border-blue-500 hover:border-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqOdsbVtbsmwrIm3pbK3c0vxDKLhMkpdvLQ&s"
          alt="Sri Vignesh Vidyalaya Logo"
          className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-900">
              Sri Vignesh Vidyalaya Senior Secondary School, Trichy
            </h3>
            <span className="text-sm sm:text-md font-medium text-blue-800">Higher Secondary</span>
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
            Higher Secondary Schooling
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Education;