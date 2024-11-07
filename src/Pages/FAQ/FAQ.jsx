import React from 'react';
import FaqBanner from './FaqBanner';
import FaqCatergories from './FaqCatergories';
import GeneralFaq from './GeneralFaq';

const FAQ = () => {
    return (
        <div className='bg-base-100'>
            <FaqBanner></FaqBanner>
            <FaqCatergories></FaqCatergories>
            <GeneralFaq></GeneralFaq>
        </div>
    );
};

export default FAQ;