import React from "react";
import img2 from "../assets/image (2).png";
import img3 from "../assets/image (3).png";
import img4 from "../assets/image (4).png";
import img5 from "../assets/image (5).png";

const Lastpg = () => {
  const features = [
    {
      title: "Elderly Users with Vision Decline",
      image: img2,
    },
    {
      title: "Blind or Fully Visually Impaired Users",
      image: img3,
    },
    {
      title: "Low-Vision Working Adults",
      image: img4,
    },
    {
      title: "Visually Impaired Youth/Students",
      image: img5,
    },
  ];

  return (
    <section id="audience" className="bg-black text-white flex flex-col justify-center items-center p-4 ">
      <h1 className="text-3xl font-bold text-wrap">Made For Those</h1>
      <h1 className="text-3xl font-bold text-wrap">Who See Differently</h1>
      <h2 className="mt-8 text-wrap text-lg max-w-2xl">
        Whether you're blind, partially sighted, or experiencing temporary vision loss, YouSee helps you confidently navigate and engage with the world around you.
      </h2>
      <div className="grid grid-cols-1 mb-20 sm:grid-cols-2 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="text-white rounded-xl p-4 relative">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute w-40 ml-2 inset-0 flex items-center ">
              <h3 className="text-xl font-medium pl-6">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lastpg;
