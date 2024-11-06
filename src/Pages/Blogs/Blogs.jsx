import React from 'react';
import BlogsBanner from './BlogsBanner';
import ContactInfo from './ContactInfo';
import Contact from '../Home/Contact';
import Map from './Map';

const Blogs = () => {
    return (
        <div className='bg-base-100'>
            <BlogsBanner></BlogsBanner>
            <ContactInfo></ContactInfo>
            <Contact></Contact>
            <Map></Map>
        </div>
    );
};

export default Blogs;