import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div
      className="hero h-auto mx-auto -mt-16 bg-black "
      style={{
        backgroundImage: `url(${bannerImg})`, // Using placeholder since we can't import external images
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-white font-normal container mx-auto px-4">
        <div className="text-left pt-20 max-w-7xl mx-auto">
          {/* Welcome Text */}
          <p className="text-3xl md:text-4xl lg:text-5xl">Welcome To</p>
          
          {/* Fitness Training Text */}
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold py-4">
            Fitness Training
          </p>
          
          {/* Transform Text */}
          <p className="text-3xl md:text-4xl lg:text-5xl">
            Transform Your Fitness Journey with Expert Guidance!
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl font-sans max-w-xl lg:max-w-2xl py-6" 
             style={{ wordSpacing: '0.2rem' }}>
            At Fitness Training, we offer personalized training programs designed
            to help you achieve your fitness goals. From strength training to
            wellness coaching, we're here to support you every step of the way.
          </p>

          {/* CTA Button */}
          <div className="my-5 md:mt-16 lg:mt-20">
            <div className="flex items-center justify-start">
              <div className="border rounded-full py-2 px-6 md:px-8 flex items-center gap-4 max-w-full">
                <p className="font-sans text-base md:text-lg whitespace-normal">
                  Schedule Your Free Session Today
                </p>
                <div className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0 flex justify-center items-center bg-yellow-300 rounded-full">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    viewBox="0 0 17 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7468 11.5885L0.8938 22.2624L1.10131 0.612761L16.7468 11.5885Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;