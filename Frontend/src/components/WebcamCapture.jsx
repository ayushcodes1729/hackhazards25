import { useRef, useEffect, useState } from "react";
import img5 from "../assets/image 5.png";
import img6 from "../assets/image 6.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import Footer from "./Footer";

export default function WebcamCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .trim()
        .toLowerCase();
      if (transcript.includes("capture")) {
        captureImage();
      }
    };

    recognition.onerror = (e) =>
      console.error("Speech recognition error:", e);
    recognition.start();

    return () => recognition.stop();
  }, []);

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

  const handleLogout = async() =>{
    try {
      await axios.post(`${import.meta.env.BASE_URL}+logout`, {}, {
        withCredentials: true
      });
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
      const res = await fetch(`${import.meta.env.BASE_URL}+describe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: imageData }),
      });

      const data = await res.json();
      const desc = data.description || "No description received";
      setDescription(desc);

      const utterance = new SpeechSynthesisUtterance(desc);
      speechSynthesis.speak(utterance);
    } catch (err) {
      console.error("Error sending image to backend:", err);
      setDescription("Error getting description");
    } finally {
      setLoading(false);
    }
  };

  const fetchUser = async()=>{
    try {
      const res = await axios.get(`${import.meta.env.BASE_URL}+get/user`,{withCredentials: true})
      dispatch(addUser(res.data.user));
    } catch (error) {
      if(error.response?.status== 401){
        navigate("/signup")
      }
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchUser();
  }, [])

  if (!user) {
    return null
  }

  return (
    <>
      <nav className="flex justify-between items-center bg-[#191919] h-[73px] px-2 sm:px-6 w-full">
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

        <button
          className="bg-gradient-to-r from-[#00FFE6] to-[#00D4FF] text-black text-sm sm:text-base font-medium px-2 sm:px-6 py-2 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-gradient-to-br from-black to-gray-900 text-white relative space-y-8">
        {/* Video Container */}
        <div className="relative border-2 border-cyan-400 rounded-3xl w-full max-w-xl overflow-hidden backdrop-blur-md bg-white/10 shadow-lg">
          <video
            ref={videoRef}
            autoPlay
            className="rounded-3xl w-full aspect-video object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-cyan-200 font-medium text-sm pointer-events-none">
            Say or click "Capture" to take photo
          </p>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <img
            src={img5}
            alt="Capture"
            className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-600 hover:scale-110 transition-transform rounded-full p-2 cursor-pointer shadow-xl"
            onClick={captureImage}
          />
        </div>

        {/* Instructions */}
        <p className="text-cyan-200 font-light text-center">
          Listening for "<span className="font-semibold text-cyan-400">capture</span>"...
        </p>
        <p className="text-gray-300 text-sm text-center">
          Make sure the object is in front of your camera
        </p>

        {/* Description Output */}
        {description && (
          <div className="mt-4 max-w-lg px-4 py-3 rounded-xl bg-cyan-900/30 text-white text-center border border-cyan-600 shadow-md backdrop-blur-md">
            {description}
          </div>
        )}

        {loading && (
          <p className="text-sm text-cyan-300 animate-pulse">Analyzing image...</p>
        )}

        {/* Hidden canvas */}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
      <Footer/>
    </>
  );
}
