import missionImg from '../../assets/mission.png'

const Mission = () => {
    return (
        <div className="w-full xl:w-[1200px] lg:my-20 h-auto">
            <div className='flex lg:flex-row  flex-col gap-6 items-center justify-center'>
                <div className='w-full p-2 lg:w-[600px] text-white'>
                   <p className='text-5xl lg:text-7xl font-teko font-bold'>Our Mission</p>
                   <p className='w-full xl:w-[600px]'>To empower individuals on their fitness journey by offering a comprehensive, user-friendly platform that helps track workouts, monitor nutrition, and measure progress. Our mission is to foster a supportive community where users can connect, stay motivated, and achieve their health goals with personalized coaching, engaging challenges, and seamless integration of modern fitness tools and wearable devices.</p>
                </div>
                <div className='xl:w-[350px]'>
                       <img className='w-[300px] h-[400px]' src={missionImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Mission;