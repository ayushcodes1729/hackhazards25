import React, { useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const routesWithNavbar = ["/"]; // Only render navbar on the home page
  if (!routesWithNavbar.includes(location.pathname)) {
    return null; 
  }

  return (
    <nav className="flex justify-between items-center bg-[#191919] h-[73px] px-6 w-full">
      <div className="flex items-center">
        <NavLink to="/" className="text-3xl font-bold bg-gradient-to-r from-[#486663] to-[#00D4FF] bg-clip-text text-transparent">
          YOUSEE
        </NavLink>
        <div className="w-[2px] h-8 bg-gray-400 ml-2"></div>
        <div className="text-[#FFFFFF] ml-2">
          <span className="block">Your eyes,</span>
          <span className="block">reimagined.</span>
        </div>
      </div>

      <ul className="hidden md:flex space-x-8 text-[#B2B2B2]">
        <li>
          <a href="#about" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            About us
          </a>
        </li>
        <li>
          <a href="#work" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            FAQs
          </a>
        </li>
        <li>
          <a href="#audience" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            More
          </a>
        </li>
        {/* Adding links to Hero and Contact sections */}
        <li>
          <a href="#hero" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            Hero Section
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            Contact Us
          </a>
        </li>
      </ul>

      <NavLink
        to="/signup" // Change this line to link to the signup page
        className="hidden md:block bg-gradient-to-r from-[#00FFE6] to-[#00D4FF] text-black font-medium px-6 py-2 rounded-lg"
      >
        Sign up
      </NavLink>

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[73px] right-6 bg-white text-black shadow-lg rounded-lg w-48 z-50">
          <ul className="flex flex-col space-y-2 p-4">
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <a href="#about" className="block">About us</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <a href="#work" className="block">FAQs</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <a href="#audience" className="block">More</a>
            </li>
            {/* Mobile links for Hero and Contact */}
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <a href="#hero" className="block">Hero Section</a>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <a href="#contact" className="block">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
