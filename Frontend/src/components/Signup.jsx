import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Login forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/login', {
        email,
        password
      },{
        withCredentials: true
      })
      console.log(res);
      navigate("/webcam");
    } catch (error) {
      console.log("Error while logging in: ", error.message);
      setError(error.message);
    }
  };
  const handleSignup = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/signup',{
        name,
        email,
        password
      },{
        withCredentials: true
      });
      console.log(res);
      navigate("/webcam")
    } catch (error) {
      console.log("Error while signing up: ", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#191919] text-white flex flex-col items-center justify-center py-12">
      <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h1>

        <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-4">
          {isSignup &&
            (<div>
              <label className="block text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white"
                required
              />
            </div>)
          }
          <div>
            <label className="block text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white"
              required
            />
          </div>

          <div className="text-red-600">{error}</div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-teal-500 text-white font-medium px-6 py-2 rounded-md mt-6"
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>

            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-teal-500 hover:underline mt-6"
            >
              {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
