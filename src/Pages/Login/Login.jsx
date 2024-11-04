import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
               <div className="w-full min-h-screen py-10 bg-black">
            <div className="w-[480px] text-white rounded-2xl mx-auto border border-[#FFFF00] h-[600px]">
                <p className="text-2xl font-bold py-10 px-12">Login</p>
              <div className="flex mt-20 flex-col justify-center items-center gap-6">
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Email" name="" id="" />
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Password" name="" id="" />
              <p className='flex w-96 justify-end items-end'>Forgot Password?</p>
              <button className="bg-white flex justify-center items-center w-80 h-16 rounded-full text-black">Login

              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 12.5L20.5 17.5L15.5 22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </button>
              </div>
            
              <p className='flex justify-end gap-2 my-10 items-end mx-4'>Don’t Have An Account?
              
              <Link to='/'> SignUp</Link></p>
            </div>
        </div>
        </div>
    );
};

export default Login;