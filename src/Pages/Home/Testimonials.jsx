import React from 'react';
import img1 from '../../assets/testimonials1.png'
import img2 from '../../assets/testimonials2.png'

const Testimonials = () => {
    return (
        <div className='w-full bg-white h-[976px]'>
            <div className='w-full relative mx-auto bg-gradient-to-t from-[#000000] to-[#800080] h-[550px]'>
                 <p className='text-7xl white font-extrabold text-white p-10'>Customer Testimonials</p>
            </div>
           <div className=' '>
           <div className="flex absolute -mt-80 w-full  justify-evenly">
  <div>
    <img className="w-60 h-60 relative rounded-full" src={img1} alt="" />
    <div className="w-[500px] -ml-32 -mt-20 h-[530px] bg-black rounded-3xl">
      <p className="text-white text-2xl text-center pt-40">Sara D., Lost 20 lbs in 3 months</p>
      <p className="text-gray-400 text-xl p-6">
        This website has kept me consistent and motivated! The workout plans are easy to follow, and the progress tracking is a huge help. The community challenges make it even more fun – I’ve met great people who keep me accountable.
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
  <div>
    <img className="w-60 h-60 relative rounded-full" src={img2} alt="" />
    <div className="w-[500px] -ml-32 -mt-20 h-[530px] bg-black rounded-3xl">
      <p className="text-white text-2xl text-center pt-40">Ayra M., Marathon Runner</p>
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