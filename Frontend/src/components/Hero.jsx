import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";
import { useSelector } from "react-redux";
import image2 from "../assets/Group 21 (1).png";

const Hero = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user)

  const handle = () => {
    if(user){
      navigate("/webcam");
    }
    else{
      navigate("/signup")
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mb-2">
        <img
          src={image}
          alt="Person using phone for audio descriptions"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-full max-w-lg flex justify-between items-start mb-4">
        <div className="text-white">
          <h2 className="text-xl font-medium mb-1">
            Get real-time audio
            <br />
            descriptions of your
            <br />
            surroundings.
          </h2>
          <p className="text-sm text-gray-300">100% Feasible and Free</p>
        </div>

        <div className="w-48 h-[15%] mt-4 ">
          <img
            src={image2}
            alt="Wave illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <button
          className="bg-cyan-400 text-black font-medium px-8 py-2 rounded-md mb-4"
          onClick={handle}
        >
          Start Describing
        </button>
        <a href="#work" className="text-cyan-400 text-sm">
          How it Works
        </a>
      </div>
    </div>
  );
};

export default Hero;
