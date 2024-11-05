import bannerImg from '../../assets/banner.png'

const Banner = () => {
    return (
        <div
  className="hero w-[1200px] mx-auto -mt-20 bg-black h-[800px]"
  style={{
    backgroundImage: `url(${bannerImg})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-white font-teko">
    <div className="text-left pt-20 w-[1100px]">
      <p className='text-5xl'>Welcome To</p>
      <p className='text-7xl font-bold py-4'>Fitness Training</p>
      <p className='text-5xl'>Transform Your Fitness Journey with Expert Guidance!.</p>
      <p className='text-xl h-20 font-sans w-[700px] py-6' style={{wordSpacing:'0.2rem'}}>At Fitness Training, we offer personalized training programs designed
to help you achieve your fitness goals. From strength training to
wellness coaching, we’re here to support you every step of the way.</p>
<div className='w-[500px] flex justify-center items-center gap-4 mt-20 h-20 bg-transparent border rounded-full'>
<p className='font-sans text-lg'>Schedule Your Free Session Today</p>
<div className='h-10 w-10 flex justify-center items-center bg-[#FFFF00] rounded-full'>
<svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7468 11.5885L0.8938 22.2624L1.10131 0.612761L16.7468 11.5885Z" fill="black"/>
</svg>

</div>
</div>
    </div>
  </div>
</div>
    );
};

export default Banner;