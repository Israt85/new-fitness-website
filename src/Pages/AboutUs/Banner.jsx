import React from 'react';
import bannerImg from '../../assets/aboutbanner.png'

const Banner = () => {
    return (
        <div className='min-h-screen -mt-20 py-32'>
            <div
  className="hero lg:w-[1100px] w-full rounded-3xl mx-auto h-96 lg:h-[800px]"
  style={{
    backgroundImage: `url(${bannerImg})`,
  }}>
  <div className="lg:w-[1100px] w-full lg:h-[800px] rounded-3xl bg-gradient-to-t from-[#3F3F3FD9] to-[#0000006C]"></div>
  <div className="flex justify-around">
    <div className='hidden xl:block lg:w-[600px]'>

    </div>
    <div className="w-full lg:w-[500px]">
      <h1 className="mb-5 text-7xl text-white font-teko text-center font-bold">About Us</h1>
      <p className="mb-5 text-white px-6 text-sm">
      At fitness training, we’re dedicated to helping everyone achieve their fitness goals, whether you're just starting out or an experienced athlete. Our app offers personalized workout plans, nutrition tracking, and a supportive community to keep you motivated. We believe in making fitness accessible, fun, and effective for everyone. Join us in transforming your health and wellness journey!
      </p>
      <div className='flex mx-8'>
      <button className="py-3 font-semibold rounded-full px-10 bg-[#FFFF00]">Get Started</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;