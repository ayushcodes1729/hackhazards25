import React, { useState } from "react";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between Signup and Login forms

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls for login/signup
  };

  return (
    <div className="min-h-screen bg-[#191919] text-white flex flex-col items-center justify-center py-12">
      <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          {isSignup ? "Sign Up" : "Log In"}
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white"
              required
            />
          </div>

          {isSignup && (
            <div>
              <label className="block text-sm" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 mt-2 bg-gray-800 rounded-md text-white"
                required
              />
            </div>
          )}

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
