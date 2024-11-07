import React from 'react';
import BlogBanner from './BlogBanner';
import AllBlogs from './AllBlogs';
import Trending from './Trending';

const Blog = () => {
    return (
        <div className='bg-base-100'>
            <BlogBanner></BlogBanner>
            <AllBlogs></AllBlogs>
            <Trending></Trending>
        </div>
    );
};

export default Blog;