import { useRef, useEffect, useState } from "react";
import img5 from "../assets/image 5.png";
import img6 from "../assets/image 6.png";

export default function WebcamCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => console.error("Failed to access webcam:", err));
  }, []);

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL("image/jpeg");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/describe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await res.json();
      setDescription(data.description || "No description received");
    } catch (err) {
      console.error("Error sending image to backend:", err);
      setDescription("Error getting description");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-black items-center justify-center min-h-52 space-y-6 relative">
      <img
        src={img5}
        alt="Image 1"
        className="absolute bottom-8 z-10 w-12 h-12 sm:w-20 sm:h-20 sm:bottom-6 bg-teal-600 rounded-full right-1/2 cursor-pointer"
        onClick={captureImage}
      />
      <img
        src={img6}
        alt="Image 2"
        className="absolute bottom-10 ml-4 z-10 w-6 h-6 sm:w-10 sm:h-10 sm:bottom-8 bg-white rounded-full left-1/2"
      />

      <div className="relative border-2 border-cyan-400 rounded-lg w-[70%] h-auto mt-10">
        <video
          ref={videoRef}
          autoPlay
          className="rounded-lg bg-black w-full h-90"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm">
          Click object's photo
        </p>
      </div>

      <p className="text-gray-400 text-lg mt-2">
        Place the object in front of the camera
      </p>

      {description && (
        <p className="text-white text-center mt-4 max-w-lg">{description}</p>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
