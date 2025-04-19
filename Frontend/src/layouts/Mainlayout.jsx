// pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkPg from "../components/WorkPg";
import Lastpg from "../components/Lastpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import the Navbar component


const Mainlayout = () => {
  return (
    <div>
       <Navbar /> 
      <Hero />

      {/* Add ids to enable anchor linking */}
      <div id="about">
        <About />
      </div>

      <div id="work">
        <WorkPg />
      </div>

      <div id="audience">
        <Lastpg />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Mainlayout;
