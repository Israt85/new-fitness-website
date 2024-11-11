import React from 'react';
import imgleft from '../../assets/FaqsideImg.png'
import imgright from '../../assets/FaqsideImg1.png'

const FaqBanner = () => {
    return (
        <div className='w-full -mt-20 h-96 lg:h-[500px] bg-black'>
            <div className='flex lg:flex-row flex-col items-center pt-20'>
                <div className='hidden lg:block'>
                    <img src={imgleft} alt="" />
                </div>
                <div className='w-full lg:w-[700px] font-teko font-bold text-white text-center'>
<p className='text-5xl lg:text-7xl'>How can we help?</p>
<div className='relative mt-6'>
    <input className='w-full lg:w-[580px] py-3 rounded-2xl' type="text" />
    <div className='absolute font-normal font-sans text-slate-400 w-full lg:w-[550px] my-3 items-center flex justify-center lg:justify-between top-0 lg:gap-0 gap-32 xl:left-16 lg:left-6'>
        <p className='text-black'> Ask a Question</p>
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 21.8494L19.0167 15.704C20.6948 13.9312 21.5316 11.6572 21.3531 9.35518C21.1745 7.05317 19.9943 4.90036 18.058 3.3446C16.1216 1.78884 13.5782 0.949902 10.9569 1.00232C8.33559 1.05473 5.83814 1.99446 3.9841 3.62601C2.13007 5.25756 1.06219 7.45532 1.00263 9.76209C0.94307 12.0689 1.89641 14.307 3.66432 16.011C5.43223 17.715 7.8786 18.7536 10.4945 18.9107C13.1104 19.0678 15.6945 18.3314 17.7091 16.8547L24.6925 23L26 21.8494ZM2.88247 9.98021C2.88247 8.53173 3.37056 7.11578 4.28503 5.91141C5.1995 4.70705 6.49927 3.76836 8.01997 3.21405C9.54067 2.65974 11.214 2.51471 12.8284 2.7973C14.4428 3.07988 15.9256 3.77739 17.0895 4.80162C18.2534 5.82584 19.0461 7.13079 19.3672 8.55144C19.6883 9.97208 19.5235 11.4446 18.8936 12.7828C18.2637 14.1211 17.197 15.2649 15.8284 16.0696C14.4598 16.8743 12.8508 17.3038 11.2048 17.3038C8.99832 17.3017 6.88293 16.5294 5.32272 15.1564C3.76252 13.7834 2.88492 11.9219 2.88247 9.98021Z" fill="#979797" stroke="#979797"/>
</svg>

    </div>
</div>
                </div>
                <div className='hidden lg:block'>
                    <img src={imgright} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FaqBanner;