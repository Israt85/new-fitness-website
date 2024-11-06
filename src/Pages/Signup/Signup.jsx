import google from '../../assets/googlelogo.png'
import facebook from '../../assets/facebook.png'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="w-full  min-h-screen py-10 bg-black">
           <div className='flex justify-center'>
           <div className="w-[480px] border text-white rounded-2xl border-[#FFFF00] mx-auto h-[700px]">
                <p className="text-2xl font-bold py-10 px-12">Sign Up</p>
              <div className="flex flex-col justify-center items-center gap-6">
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Full Name" name="" id="" />
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Email" name="" id="" />
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Password" name="" id="" />
              <input className="w-96 h-16 bg-transparent rounded-full border" type="text" placeholder="     Confirm Password" name="" id="" />
             <Link to='home'> <button className="bg-white flex justify-center items-center w-80 h-16 rounded-full text-black">Sign Up

<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 12.5L20.5 17.5L15.5 22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button></Link>
              </div>
              <div className='flex items-center justify-center gap-6 my-8'>
                <div className="w-16 h-16 rounded-full bg-white">
                    <img className='p-2' src={google} alt="" />
                </div>
                <div className="w-16 h-16 rounded-full bg-white">
                    <img className='p-2' src={facebook} alt="" />
                </div>
              </div>
              <p className='flex justify-end gap-2 items-end mx-4'>Already Have An Account? 
              <Link className='font-bold' to='/login'>  Login </Link></p>
            </div>
            <div className='mr-10'>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.6667 7.33334L7.33334 36.6667M36.6667 36.6667L7.33335 7.33334" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>

            </div>
           </div>
        </div>
    );
};

export default Signup;