import { useState, useEffect } from "react";
import img from "../assets/image (1).png";

export default function YouSee() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const features = [
    { title: "AI-Powered Object Recognition" },
    { title: "Real-Time Audio Descriptions" },
    { title: "No App Needed Works on Any Phone" },
    { title: "Voice-Friendly Interface" },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 mt-0 mb-0" id="about">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What is YouSee?
        </h1>

        {!isMobile ? (
          <div className="flex gap-8 items-center">
            <div className="w-1/2">
              <div className="mb-6">
                <p className="leading-relaxed">
                  YouSee is a vision-to-audio assistive tool that converts your
                  camera's live feed into spoken words. Whether it's navigating
                  busy streets, identifying people, or reading signs.
                </p>
                <p className="mt-4 leading-relaxed">
                  YouSee gives users the freedom to move, understand, and
                  explore independently.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white text-black rounded-lg p-4 h-24 flex items-center justify-center text-center"
                  >
                    <p>{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/2">
              <img
                src={img}
                alt="Person using YouSee app on smartphone"
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <p className="leading-relaxed">
                YouSee is a vision-to-audio assistive tool that converts your
                camera's live feed into spoken words. Whether it's navigating
                busy streets, identifying people, or reading signs.
              </p>
              <p className="mt-4 leading-relaxed">
                YouSee gives users the freedom to move, understand, and explore
                independently.
              </p>
            </div>

            <div className="w-full mb-4">
              <img
                src={img}
                alt="Person using YouSee app on smartphone"
                className="w-full rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg p-3 h-20 flex items-center justify-center text-center"
                >
                  <p className="text-sm">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
