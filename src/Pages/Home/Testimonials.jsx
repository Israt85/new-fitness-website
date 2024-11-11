import React from 'react';
import img1 from '../../assets/testimonials1.png'
import img2 from '../../assets/testimonials2.png'

const Testimonials = () => {
    return (
        <div className='w-full bg-white '>
            <div className='w-full relative mx-auto bg-gradient-to-t from-[#000000] to-[#800080] h-[550px]'>
                 <p className='text-5xl lg:text-7xl white font-extrabold text-white p-2  lg:p-10'>Customer Testimonials</p>
            </div>
           <div className=' '>
           <div className="flex flex-wrap lg:gap-0 gap-20 -mt-80 w-full  justify-evenly">
           <div className="relative flex flex-col items-center">
  <img className="w-40 h-40 md:w-60 md:h-60 rounded-full absolute -top-20" src={img1} alt="Sara D." />
  
  <div className="w-80 sm:w-[400px] md:w-[500px] mt-10 pt-24 md:pt-32 h-[500px] bg-black rounded-3xl">
    <p className="text-white text-xl md:text-2xl text-center pt-8">Sara D., Lost 20 lbs in 3 months</p>
    <p className="text-gray-400 text-base md:text-xl p-4 md:p-6">
      This website has kept me consistent and motivated! The workout plans are easy to follow, and the progress tracking is a huge help. The community challenges make it even more fun – I’ve met great people who keep me accountable.
    </p>

    {/* Ratings */}
    <div className="flex justify-end items-end p-4 md:p-10">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
      </div>
    </div>
  </div>
</div>
<div className="relative flex flex-col items-center">
  <img className="md:w-60 w-40 h-40 md:h-60 absolute -top-10 rounded-full md:-top-20" src={img2} alt="Ayra M." />
  
  <div className="w-80 sm:w-[400px] md:w-[500px] mt-10 pt-24 md:pt-32 h-auto lg:h-[500px] bg-black rounded-3xl">
    <p className="text-white text-2xl text-center pt-8">Ayra M., Marathon Runner</p>
    <p className="text-gray-400 text-xl p-6">
      The personalized workout plans kept me on track for my race and made training so much easier. The app tailored everything to my schedule and fitness level, which was a huge help. I also loved the progress tracking and reminders that kept me motivated along the way. Highly recommend!
    </p>
    
    {/* Ratings */}
    <div className="flex justify-end items-end p-10">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFFF00]" />
      </div>
    </div>
  </div>
</div>

</div>
           </div>

        </div>
    );
};

export default Testimonials;