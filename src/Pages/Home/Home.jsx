import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Section2 from './Section2';
import Purpose from './Purpose';
import Testimonials from './Testimonials';
import Works from './Works';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='bg-black max-w-7xl mx-auto min-h-screen'>
            <Banner></Banner>
            <Section2></Section2>
            <Purpose></Purpose>
            <Testimonials></Testimonials>
            <Works></Works>
            <div className='my-10'>
            <Contact></Contact>
            </div>
            
        </div>
    );
};

export default Home;