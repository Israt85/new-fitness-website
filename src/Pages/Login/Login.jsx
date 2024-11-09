import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="w-full min-h-screen py-10 bg-black flex justify-center items-center">
      <div className="flex lg:flex-row justify-center w-full px-4">
        <div className="w-full max-w-lg lg:w-[480px] text-white rounded-2xl mx-auto border border-[#FFFF00] lg:mx-0 h-auto lg:h-[600px] p-8">
          <p className="text-center text-2xl font-bold mb-10">Login</p>
          <div className="flex mt-10 lg:mt-20 flex-col justify-center items-center gap-6">
            <input
              className="lg:w-96 w-full h-16 bg-transparent rounded-full border px-4 text-white placeholder-gray-400"
              type="email"
              placeholder="Email"
            />
            <input
              className="lg:w-96 w-full h-16 bg-transparent rounded-full border px-4 text-white placeholder-gray-400"
              type="password"
              placeholder="Password"
            />
            <p className="flex w-full lg:w-96 justify-end items-end text-sm cursor-pointer hover:underline">
              Forgot Password?
            </p>
            <Link to="/home">
              <button className="bg-white flex justify-center items-center w-full lg:w-80 h-16 rounded-full text-black font-semibold px-4 mt-4">
                Login
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M10 8l4 4-4 4"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
          <p className="flex justify-center lg:justify-end gap-2 mt-10 text-sm">
            Don’t Have An Account?
            <Link to="/" className="font-bold text-[#FFFF00] hover:underline">
              SignUp
            </Link>
          </p>
        </div>
        <div className="lg:ml-8 ">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6667 7.33334L7.33334 36.6667M36.6667 36.6667L7.33335 7.33334"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
    
    );
};

export default Login;