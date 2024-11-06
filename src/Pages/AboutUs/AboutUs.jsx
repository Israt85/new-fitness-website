import React from 'react';
import Banner from './Banner';
import Mission from './Mission';
import Vission from './Vission';

const AboutUs = () => {
    return (
        <div className='w-full min-h-screen bg-gradient-to-t from-[#800080] via-[#000000] to-[#380838]'>
            <Banner></Banner>
            <Mission></Mission>
            <Vission></Vission>
        </div>
    );
};

export default AboutUs;