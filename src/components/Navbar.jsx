import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = "< Arun Vijay AP />";

  return (
    <nav className="flex items-center justify-between bg-green-50 py-6 px-10">
      {/* Left side - Logo */}
      <Link to="/">
        <div className="text-2xl font-bold font-serif text-blue-900 font-signature ml-20">
          {user}
        </div>
      </Link>

      {/* Right side - Navigation Links */}
      <div className="flex space-x-10 mr-32">
        <Link to="/" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Home</Link>
        <Link to="/education" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Education</Link>
        <Link to="/project" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Project</Link>
        <Link to="/contact" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
