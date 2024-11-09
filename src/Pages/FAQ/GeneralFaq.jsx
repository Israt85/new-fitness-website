import React from 'react';

const GeneralFaq = () => {
    return (
        <div className='w-full mb-10 bg-black h-full lg:h-[700px]'>
            <h2 className='text-5xl lg:text-7xl font-teko font-bold text-white pt-10 px-4 lg:px-14'>General FAQs</h2>
           <div className='flex lg:flex-row flex-col justify-center gap-10 items-center'>
           <div className='w-full lg:w-[700px] mt-6 text-white lg:h-[500px] h-full'>
           <div className="collapse my-6 py-2 rounded-lg collapse-arrow bg-[#42424280]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What platforms will the Fitness App be available on</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
           <div className="collapse my-6 rounded-lg collapse-arrow bg-[#42424280]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">How does the app website with tracking progress?</div>
</div>
           <div className="collapse my-6 rounded-lg collapse-arrow bg-[#42424280]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">Is there personalized coaching available in the website?</div>
</div>
           <div className="collapse my-6 rounded-lg collapse-arrow bg-[#42424280]">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What premium features does the website offer?</div>
</div>
 </div>
           <div>
            <img className='w-full lg:w-[400px] h-full lg:h-[500px]' src="https://s3-alpha-sig.figma.com/img/716e/a97c/8ae9bb256af6446459e7c859c2c56209?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oKJPwV3~pNJEet49yUmPPgDvNb49xPEXWqYQCB9r5teS3nQlEot6uZy2pmgeNLryio0aTPkjU6Q7UWODIT1mxflM5Xx8qT19v6PYsCnN7TwKeoinBuTMHHWYMmiduRNWdklz3o8JmhrF6Ju0cp7fz1x3eNAjVodlDKPtliiuS8-IDmChmUQ8AncEwLRmZgA9exKWblVbqeOttCwaqSrYV-3WSWpYQjvX3vURzK9Yske~UW5kYWaJVZqw6lsE94MVsLCt6N~a3mbfAkQ1~dum70fXf85ROdkPW4VUPvkiIqJ5aod2JRYVbxcW-1gKNwq2K85dWCznGxxHyKGYDnKEAA__" alt="" />
           </div>
           </div>
            
        </div>
    );
};

export default GeneralFaq;