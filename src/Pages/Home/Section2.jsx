import img1 from '../../assets/sec21.png'
import img2 from '../../assets/sec22.png'
import img3 from '../../assets/sec23.png'
import img4 from '../../assets/sec24.png'

const Section2 = () => {
    return (
        <div className='flex gap-4 py-10 h-auto bg-white flex-wrap justify-center items-center'>
           <div className="w-72 h-80 bg-gradient-to-t from-[#000000] to-[#800080] border  border-[#800080] rounded-2xl">
            <img className='w-32 mx-auto my-8 h-32' src={img1} alt="" />
            <p className='text-xl p-4 text-white'>Track Progress</p>
           <div className='w-full flex justify-end items-end p-4'>
           <div className='w-32  h-8 rounded-full border-[#FFFF00] border'>
                <p className='text-center text-gray-400'>Read More</p>
            </div>
           </div>
            </div> 
           <div className="w-72 h-80 bg-gradient-to-t from-[#000000] to-[#800080] border  border-[#800080] rounded-2xl">
            <img className='w-32 mx-auto my-8 h-32' src={img2} alt="" />
            <p className='text-xl p-4 text-white'>Community Engagement</p>
           <div className='w-full flex justify-end items-end p-4'>
           <div className='w-32  h-8 rounded-full border-[#FFFF00] border'>
                <p className='text-center text-gray-400'>Read More</p>
            </div>
           </div>
            </div> 
           <div className="w-72 h-80 bg-gradient-to-t from-[#000000] to-[#800080] border  border-[#800080] rounded-2xl">
            <img className='w-32 mx-auto my-8 h-32' src={img3} alt="" />
            <p className='text-xl p-4 text-white'>Health Metrics Monitoring</p>
           <div className='w-full flex justify-end items-end p-4'>
           <div className='w-32  h-8 rounded-full border-[#FFFF00] border'>
                <p className='text-center text-gray-400'>Read More</p>
            </div>
           </div>
            </div> 
           <div className="w-72 h-80 bg-gradient-to-t from-[#000000] to-[#800080] border  border-[#800080] rounded-2xl">
            <img className='w-32 mx-auto my-8 h-32' src={img4} alt="" />
            <p className='text-xl p-4 text-white'>Nutritional Tracking</p>
           <div className='w-full flex justify-end items-end p-4'>
           <div className='w-32  h-8 rounded-full border-[#FFFF00] border'>
                <p className='text-center text-gray-400'>Read More</p>
            </div>
           </div>
            </div> 
        </div>
    );
};

export default Section2;