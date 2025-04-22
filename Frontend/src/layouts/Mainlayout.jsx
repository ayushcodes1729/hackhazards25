// pages/Home.jsx
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkPg from "../components/WorkPg";
import Lastpg from "../components/Lastpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Mainlayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async()=>{
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}get/user`,{withCredentials: true})
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
