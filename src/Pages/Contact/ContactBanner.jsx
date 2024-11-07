import React from 'react';
import img from '../../assets/contactPageImg.png'
const ContactBanner = () => {
    return (
        <div className='w-full -mt-20 h-[600px] bg-black'>
        <div className='flex justify-around pt-40'>
            <div className='text-white'>
               <p className='text-7xl font-teko font-bold'>Contact Us</p>
               <p className='text-lg'>Any Question or remarks? Just Write us a message.</p>
            </div>
            <div>
                <img className=' w-[600px] mr-20 h-[500px]' src={img} alt="" />
            </div>
        </div>
    </div>
    );
};

export default ContactBanner;