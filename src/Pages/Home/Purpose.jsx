import purpose from '../../assets/purpose.jpeg'

const Purpose = () => {
    return (
        <div className='w-full text-white h-[900px]'>
            <h2 className='text-center font-teko text-7xl p-6 font-bold'>Purpose</h2>

            <div className='flex gap-8 justify-around'>
                <div>
                    <img className='w-[600px] mx-auto h-[580px]' src={purpose} alt="" />
                </div>
                <div className='w-[500px] flex flex-col justify-center'>
                    <div>
                        <p>It is designed to empower users in achieving
their health and fitness goals through
comprehensive tracking and personalized guidance.</p>
                    </div>
                    <div>
                        <p>By integrating fitness tracking, nutrition
management, and progress monitoring, the
it allows users to seamlessly maintain a healthy
lifestyle. The inclusion of community features
and personalized coaching provides users with
the support and motivation they need to achieve
their fitness goals</p>
                    </div>
                    <div>
                        <p>The Fitness Website is designed for a wide range of users</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;