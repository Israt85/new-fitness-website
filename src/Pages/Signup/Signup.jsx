import google from '../../assets/googlelogo.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
      <div className="w-full overflow-hidden min-h-screen py-10 bg-black flex justify-center items-center">
      <div className="flex lg:flex-row justify-center w-full px-4">
        <div className="lg:w-[480px] w-full max-w-lg border text-white rounded-2xl border-[#FFFF00] lg:mx-0 mx-4 h-auto lg:h-[700px] p-8">
          <p className="text-center text-2xl font-bold mb-10">Sign Up</p>
          <div className="flex flex-col justify-center items-center gap-6">
            <input
              className="lg:w-96 w-full h-16 bg-transparent rounded-full border px-4 text-white placeholder-gray-400"
              type="text"
              placeholder="Full Name"
            />
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
            <input
              className="lg:w-96 w-full h-16 bg-transparent rounded-full border px-4 text-white placeholder-gray-400"
              type="password"
              placeholder="Confirm Password"
            />
            <Link to="/">
              <button className="bg-white flex justify-center items-center w-full px-2 lg:w-80 h-16 rounded-full text-black font-semibold">
                Sign Up
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
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <img className="w-8 h-8" src={google} alt="Google" />
            </div>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <img className="w-8 h-8" src={facebook} alt="Facebook" />
            </div>
          </div>
          <p className="flex justify-center items-center gap-2 mt-4 text-sm">
            Already Have An Account?
            <Link className="font-bold text-[#FFFF00]" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className=" lg:ml-8 mt-6">
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

export default Signup;