import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#191919] h-[73px] px-6 w-full">
      <div className="flex items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-[#486663] to-[#00D4FF] bg-clip-text text-transparent">
          YOUSEE
        </div>
        <div className="w-[2px] h-8 bg-gray-400 ml-2"></div>
        <div className="text-[#FFFFFF] ml-2">
          <span className="block">Your eyes,</span>
          <span className="block">reimagined.</span>
        </div>
      </div>

      <ul className="hidden md:flex space-x-8 text-[#B2B2B2]">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About us</li>
        <li className="hover:text-white cursor-pointer">Contact us</li>
        <li className="hover:text-white cursor-pointer">FAQs</li>
        <li className="hover:text-white cursor-pointer">More</li>
      </ul>

      <button className="hidden md:block bg-gradient-to-r from-[#00FFE6] to-[#00D4FF] text-black font-medium px-6 py-2 rounded-lg">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
