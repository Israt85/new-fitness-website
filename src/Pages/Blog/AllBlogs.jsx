import React, { useEffect, useState } from 'react';

const AllBlogs = () => {
    const [blogs,setBlogs]= useState([]);
    useEffect(()=>{
        fetch('/Blogs.json')
        .then(res=>res.json())
        .then(data=>{console.log(data)

            setBlogs(data)
        }
    
    )
    },[])
    return (
        <div className='my-20 h-auto'>
            <div className='grid grid-cols-3 justify-center items-center'>
                {
                  blogs?.map(blog=><div key={blog?.id} className='w-[380px] mx-auto my-6 gap-6 shadow-2xl bg-white h-[500px]'>
                             <img className='p-4' src={blog?.img} alt="" />
                            <div className='py-2 flex justify-between items-center px-4'>
                            <p className='text-base font-bold'>{blog?.title}</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                            </div>
                             <p className='px-4 text-sm py-2'>{blog?.description}</p>

                             <div className='flex items-center py-4 gap-2'>
                                <div>
                                    <img className='w-16 h-16 rounded-full' src={blog?.profileImg} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold'>{blog?.profileName}</p>
                                    <p>{blog?.date}</p>
                                </div>
                             </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;