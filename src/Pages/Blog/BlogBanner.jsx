import React from 'react';
import Blog from '../../assets/BlogImg.png'
const BlogBanner = () => {
    return (
        <div
        className="hero w-full mx-auto -mt-20 bg-black h-[600px]"
        style={{
          backgroundImage: `url(${Blog})`,
        }}>
        
        <div className="text-black ">
          <div className="text-left pt-10 w-[1100px]">
            <p className='text-3xl'>Our Blogs</p>
            <p className='text-7xl py-2 font-teko'>Resources&Insights</p>
            <p className='text-xl h-auto font-sans w-[600px] py-2' style={{wordSpacing:'0.2rem'}}>Explore expert articles and guides on fitness and nutrition
            to help you achieve your health goals!</p>
          </div>
        </div>
      </div>
    );
};

export default BlogBanner;