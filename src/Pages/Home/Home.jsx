import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Section2 from './Section2';
import Purpose from './Purpose';
import Testimonials from './Testimonials';
import Works from './Works';
import Contact from './Contact';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div className=' w-full mx-auto min-h-screen'>
            
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