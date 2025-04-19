import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Signup from "./components/Signup"; // Import the Signup component
import WebcamPage from "./components/WebcamCapture"; // Import the WebcamPage component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/webcam" element={<WebcamPage />} /> {/* Add this route for the signup page */}
      </Routes>
    </Router>
  );
};

export default App;
