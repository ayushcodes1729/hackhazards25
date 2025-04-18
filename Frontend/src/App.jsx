import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkPg from './components/WorkPg';
import WebcamCapture from './components/WebcamCapture';
import Lastpg from './components/Lastpg';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/Mainlayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes using MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<WorkPg />} />
          <Route path="/more" element={<Lastpg />} />
          <Route path="/webcam" element={<WebcamCapture />}/>
        </Route>

       
      </Routes>
    </Router>
  );
};

export default App;