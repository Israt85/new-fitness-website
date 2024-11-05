import React from 'react';
import img1 from '../assets/work1.png'
import img2 from '../assets/work2.png'
import img3 from '../assets/work3.png'

const Works = () => {
    return (
        <div className='w-full h-[800px] bg-black'>
            <h2 className='text-7xl text-white text-center pt-20 font-extrabold'>See How Our Website Works</h2>
              <p className='text-center text-xl text-gray-400 py-6'>Explore our easy-to-use tools designed to help you stay on track.</p>
              <div className='flex flex-wrap justify-center gap-20 my-20'>
                <div className='w-72 rounded-3xl bg-white h-80'>
                <div className='relative'>
                <img className='w-72 h-40' src={img1} alt="" />
                <svg className='absolute top-0' width="380" height="214" viewBox="0 0 380 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48.3125" height="22" transform="translate(0 8)" fill="#FFFF00"/>
</svg>

                </div>
                <p className='text-xl px-2 py-4 font-bold'>Workout Log</p>
                <p className='text-sm px-2'>Easily track your sets, reps, and exercises, customize routines, and monitor your progress to stay on top of your fitness goals.</p>

                </div>
                <div className='w-72 rounded-3xl bg-white h-80'>
                <div className='relative'>
                <img className='w-72 h-40' src={img2} alt="" />
                <svg className='absolute top-0' width="380" height="214" viewBox="0 0 380 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48.3125" height="22" transform="translate(0 8)" fill="#FFFF00"/>
</svg>

                </div>
                <p className='text-xl px-2 py-4 font-bold'>Nutrition Tracker</p>
                <p className='text-sm px-2'>Log your meals, track calories, and monitor your macronutrients to stay on top of your nutrition and reach your fitness goals.</p>

                </div>
                <div className='w-72 rounded-3xl bg-white h-80'>
                <div className='relative'>
                <img className='w-72 h-40' src={img3} alt="" />
                <svg className='absolute top-0' width="380" height="214" viewBox="0 0 380 214" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48.3125" height="22" transform="translate(0 8)" fill="#FFFF00"/>
</svg>

                </div>
                <p className='text-xl px-2 py-4 font-bold'>Community Challenges</p>
                <p className='text-sm px-2'>Join fun fitness challenges, compete with friends, and stay motivated with a supportive community</p>

                </div>
              </div>
        </div>
    );
};

export default Works;