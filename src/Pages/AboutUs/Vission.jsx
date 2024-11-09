import React from 'react';
import vissionImg from '../../assets/vission.png'

const Vission = () => {
    return (
        <div>
            <div className="w-full lg:w-[1200px] mt-10 h-auto">
            <div className='flex flex-col gap-10 lg:flex-row-reverse items-center justify-center'>
                <div className='w-full p-2 lg:w-[500px] pb-6 text-white'>
                   <p className='text-5xl lg:text-7xl font-teko font-bold'>Our Vision</p>
                   <p className='w-full lg:w-[600px]'>To be the foremost fitness platform that inspires and empowers individuals to lead healthier lives by providing a comprehensive, personalized experience. We envision a world where everyone, regardless of their fitness level, has access to the tools, knowledge, and community support they need to reach their health and wellness goals. Through innovation, continuous improvement, and integration with modern technologies, we aim to create a platform that not only tracks progress but motivates, educates, and fosters meaningful connections within a global fitness community. Our vision is to make fitness a sustainable, enjoyable, and life-changing journey for all.</p>
                </div>
                <div className=''>
                       <img className='w-[300px] pb-20 h-[500px]' src={vissionImg} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Vission;