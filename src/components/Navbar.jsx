import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const user = "< Arun Vijay AP />";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-200 shadow-md w-full text-xl top-0 z-50">
      <div className="flex items-center justify-between py-4 px-6 md:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-900 font-playwrite">
          {user}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Home</Link>
          <Link to="/education" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Education</Link>
          <Link to="/project" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Project</Link>
          <Link to="/contact" className="text-blue-900 font-medium hover:font-bold hover:bg-blue-200 px-3 py-2 rounded-md transition-all duration-300">Contact</Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-blue-900 text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-green-50 space-y-4 pb-4">
          <Link to="/" className="text-blue-900 font-medium" onClick={toggleMenu}>Home</Link>
          <Link to="/education" className="text-blue-900 font-medium" onClick={toggleMenu}>Education</Link>
          <Link to="/project" className="text-blue-900 font-medium" onClick={toggleMenu}>Project</Link>
          <Link to="/contact" className="text-blue-900 font-medium" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
