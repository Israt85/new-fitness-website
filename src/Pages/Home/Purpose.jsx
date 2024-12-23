import purpose from '../../assets/purpose.jpeg'

const Purpose = () => {
    return (
        <div className='w-full text-white bg-black h-auto lg:h-[900px]'>
            <h2 className='text-center font-teko text-7xl p-6 font-bold'>Purpose</h2>

            <div className='flex md:flex-row flex-col gap-8 justify-around'>
                {/* image part */}
                <div>
                    <img className='w-full lg:w-[600px] mx-auto h-auto lg:h-[580px]' src={purpose} alt="" />
                </div>
                {/* text part */}
                <div className='w-full lg:w-[500px] flex flex-col justify-center'>
                    <div className=''>
                        <p className='text-gray-400 w-full px-2 lg:px-0 lg:w-[480px] py-4 text-2xl'>It is designed to empower users in achieving
their health and fitness goals through
comprehensive tracking and personalized guidance.</p>
                    </div>
                    <div>
                        <p className='text-2xl lg:px-0 px-2 py-6'>By integrating fitness tracking, nutrition
management, and progress monitoring, the
it allows users to seamlessly maintain a healthy
lifestyle. The inclusion of community features
and personalized coaching provides users with
the support and motivation they need to achieve
their fitness goals</p>
                    </div>
                    <div>
                        <p className='text-2xl text-gray-400 px-2 lg:px-0'>The Fitness Website is designed for a wide range of users</p>
                    </div>
                    <div className='flex px-2 lg:px-0 flex-wrap gap-10 my-6 font-teko text-white'>
                           <p className='text-4xl text-[#800080] font-extrabold'>Fitness Enthusiasts</p>
                           <p className='text-4xl text-[#800080] font-extrabold'>Beginners</p>
                           <p className='text-4xl text-[#800080] font-extrabold'>Busy Professionals</p>
                           <p className='text-4xl text-[#800080] font-extrabold'>Individuals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;