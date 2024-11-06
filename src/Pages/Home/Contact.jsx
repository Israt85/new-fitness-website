import React from 'react';
import contactImg from '../../assets/contact.png'

const Contact = () => {
    return (
        <div className='w-full mt-10 bg-black h-auto'>
            <div className=' flex justify-around'>
                <div className='w-[800px]'>
                    <p className='text-2xl font-teko px-12 font-bold pt-10 text-[#800080]'>Contact Us</p>
                    <p className='w-[680px] text-7xl font-bold px-11 text-white font-teko'>Send Us A Message
                    & Join Our Team!</p>
                    <div className='flex my-6 justify-center gap-16'>
                        <input className='w-80 h-20 bg-transparent border rounded-full border-[#FFFF00]' type="text" name="" id="" placeholder='          Name'/>
                        <input className='w-80 h-20 bg-transparent border rounded-full border-[#FFFF00]' type="text" name="" id="" placeholder='          Phone' />
                    </div>
                    <div className='flex justify-center gap-16'>
                        <input className='w-80 h-20 bg-transparent border rounded-full border-[#FFFF00]' type="email" name="" id="" placeholder='          Email' />
                        <input className='w-80 h-20 bg-transparent border rounded-full border-[#FFFF00]' type="text" name="" id="" placeholder='          Subject' />
                    </div>
                    <div className='flex justify-center'>
                    <textarea className='border rounded-3xl h-[200px] w-[700px] my-10 bg-transparent border-[#FFFF00]'></textarea>
                    </div>
                    <div className='w-60 flex justify-center items-center gap-8 h-16 mx-12 bg-transparent border rounded-full'>
<p className='font-sans text-lg text-white'>Send Now</p>
<div className='h-10 w-10 flex justify-center items-center bg-[#FFFF00] rounded-full'>
<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7468 11.5885L0.8938 22.2624L1.10131 0.612761L16.7468 11.5885Z" fill="black"/>
</svg>

</div>
</div>
                </div>
                <div className='w-[300px] h-[800px]'>
                    <img className='w-full h-full py-20' src={contactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;