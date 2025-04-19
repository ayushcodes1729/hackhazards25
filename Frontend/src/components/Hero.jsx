import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.png";

const Hero = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/webcam");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mb-8">
        <img
          src={image}
          alt="Person using phone for audio descriptions"
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="w-full max-w-lg flex justify-between items-start mb-8">
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

        <div className="w-48 h-16">
          <svg width="100%" height="100%" viewBox="0 0 192 64">
            {Array.from({ length: 20 }).map((_, i) => (
              <rect
                key={i}
                x={i * 10}
                y={32 - Math.abs(Math.sin(i * 0.5) * 25)}
                width="4"
                height={Math.abs(Math.sin(i * 0.5) * 50)}
                fill="#00D4FF"
                rx="1"
              />
            ))}
          </svg>
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
