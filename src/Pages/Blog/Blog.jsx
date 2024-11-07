import React from 'react';
import BlogBanner from './BlogBanner';
import AllBlogs from './AllBlogs';

const Blog = () => {
    return (
        <div className='bg-base-100'>
            <BlogBanner></BlogBanner>
            <AllBlogs></AllBlogs>
        </div>
    );
};

export default Blog;