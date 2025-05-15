import React from 'react';

const Education = () => {
  return (
    <div className="bg-green-50 min-h-screen px-8 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
        Education
      </h2>

      {/* St. Joseph’s Institute of Technology */}
      <div className="flex items-start bg-green-100 rounded-xl shadow-md p-6 mb-10 max-w-5xl mx-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCmT18MthwZuSNhssTyKdMTYkEeIwZCofqw&s"
          alt="St. Joseph's Logo"
          className="h-32 w-32 object-contain mr-8"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-semibold text-blue-900">
              St. Joseph’s Institute of Technology, Chennai
            </h3>
            <span className="text-md font-medium text-blue-800">2022 - 2026</span>
          </div>
          <h4 className="text-lg font-semibold text-blue-800 mb-2">
            B.Tech (Artificial Intelligence and Data Science)
          </h4>
          <ul className="list-none space-y-1 text-blue-900">
            <li>⚡ CGPA: 8.58</li>
          </ul>
        </div>
      </div>

      {/* Sri Vignesh Vidyalaya */}
      <div className="flex items-start bg-green-100 rounded-xl shadow-md p-6 max-w-5xl mx-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVqOdsbVtbsmwrIm3pbK3c0vxDKLhMkpdvLQ&s"
          alt="Sri Vignesh Vidyalaya Logo"
          className="h-32 w-32 object-contain mr-8"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-semibold text-blue-900">
              Sri Vignesh Vidyalaya Senior Secondary School, Trichy
            </h3>
            <span className="text-md font-medium text-blue-800">Higher Secondary</span>
          </div>
          <h4 className="text-lg font-semibold text-blue-800 mb-2">
            Higher Secondary Schooling
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Education;
