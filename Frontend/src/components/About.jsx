import React from "react";
import image from "../assets/image.png";

const About = () => {
  return (
    <section className="h-screen w-screen bg-[#191919] text-[#FFFFFF] flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What is YouSee?</h2>

      <p className="text-justify text-sm md:text-base max-w-[80%] md:max-w-[60%] mb-6">
        YouSee is a vision-to-audio assistive tool that converts your camera's
        live feed into spoken words. Whether it's navigating busy streets,
        identifying people, or reading signs.
      </p>
      <p className="text-justify text-sm md:text-base max-w-[80%] md:max-w-[60%] mb-6">
        YouSee gives users the freedom to move, understand, and explore
        independently.
      </p>

      <img
        src={image}
        alt="YouSee in action"
        className="rounded-2xl max-w-[90%] sm:max-w-[60%] md:max-w-[50%] h-auto mb-6"
      />

      <div className="grid grid-cols-2 text-[#252525] gap-2 w-full max-w-[88%] md:max-w-[60%]">
        <div className="border border-[#00D4FF] bg-[#FFFFFF] rounded-lg p-4 text-justify">
          AI-Powered Object Recognition
        </div>
        <div className="border border-[#00D4FF] bg-[#FFFFFF] rounded-lg p-2 text-justify">
          Real-Time Audio Descriptions
        </div>
        <div className="border border-[#00D4FF] bg-[#FFFFFF] rounded-lg p-2 text-justify">
          No App Needed Works on Any Phone
        </div>
        <div className="border border-[#00D4FF] bg-[#FFFFFF] rounded-lg p-2 text-justify">
          Voice-Friendly Interface
        </div>
      </div>
    </section>
  );
};

export default About;
