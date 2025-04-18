import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const routesWithNavbar = ["/", "/about", "/faq", "/more", "/webcam"]; 
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
          <NavLink to="/" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            FAQs
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" className="text-[#B2B2B2] hover:text-white cursor-pointer">
            How it works
          </NavLink>
        </li>
      </ul>

      <NavLink to="/signin" className="hidden md:block bg-gradient-to-r from-[#00FFE6] to-[#00D4FF] text-black font-medium px-6 py-2 rounded-lg">
        Sign in
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
              <NavLink to="/signin" className="block">Login/Signup</NavLink>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <NavLink to="/" className="block">Home</NavLink>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <NavLink to="/about" className="block">About us</NavLink>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <NavLink to="/faq" className="block">FAQs</NavLink>
            </li>
            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
              <NavLink to="/more" className="block">How it works</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;