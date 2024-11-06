import React from 'react';
import img1 from '../../assets/contactlink.png'
import img2 from '../../assets/Contactlink2.png'
const ContactInfo = () => {
    return (
        <div className='w-full h-[400px] mt-32 mb-20 bg-gradient-to-r from-[#800080] to-[#000000]'>
            <p className='text-5xl font-semibold pt-10 text-white font-teko text-center'>Contact Information</p>
            <p className='text-center text-white'>
            Say something to start a live chat!
            </p>

            <div className='flex justify-center mt-16 gap-32 text-white items-center'>
               <div>
                <img className='w-[70px] mx-auto h-[70px]' src={img1} alt="" />
                <p className='pt-8'>USA, Washington DC</p>
               </div>
               <div>
                <img className='w-[100px] mx-auto h-[100px]' src={img2} alt="" />
                <p className='text-lg'>1234-5678</p>
               </div>
               <div>
               <svg className='mx-auto' width="50" height="70" viewBox="0 0 100 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.999 43.3635V63.889H76.908C75.7264 70.4899 72.1805 76.0792 66.8624 79.8373L83.0896 93.1838C92.5442 83.9332 97.9988 70.3458 97.9988 54.205C97.9988 50.4469 97.6806 46.8329 97.0896 43.3641L49.999 43.3635Z" fill="white"/>
<path d="M21.9779 63.0878L18.318 66.0574L5.36328 76.7536C13.5905 94.0507 30.4529 106 49.9982 106C63.4979 106 74.8159 101.278 83.0888 93.1838L66.8616 79.8373C62.4071 83.0173 56.7252 84.9448 49.9982 84.9448C36.9983 84.9448 25.9532 75.6458 21.9983 63.1184L21.9779 63.0878Z" fill="white"/>
<path d="M5.36325 29.2463C1.95434 36.377 0 44.4234 0 52.9996C0 61.5759 1.95434 69.6224 5.36325 76.753C5.36325 76.8008 21.9999 63.0693 21.9999 63.0693C20.9999 59.8894 20.4088 56.5168 20.4088 52.9991C20.4088 49.4814 20.9999 46.1089 21.9999 42.9289L5.36325 29.2463Z" fill="white"/>
<path d="M49.9992 21.1036C57.363 21.1036 63.9083 23.8017 69.1356 29.0054L83.4536 13.8284C74.7718 5.25215 63.4994 0 49.9992 0C30.4539 0 13.5905 11.9009 5.36328 29.2464L21.9994 42.93C25.9537 30.4026 36.9993 21.1036 49.9992 21.1036Z" fill="white"/>
</svg>
<p className='pt-8'>fitnesstraining123@gmail.com</p>
               </div>

            </div>
        </div>
    );
};

export default ContactInfo;