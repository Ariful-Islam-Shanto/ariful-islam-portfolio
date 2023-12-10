import React from 'react';
import arifulIslam from '../../../assets/Ariful Islam (1) (1).png'

const Banner = () => {
    return (
        <div className='h-[calc(100vh-64px)] flex items-center justify-center py-8'>
            <div className="flex-1 space-y-4">
                <p className='text-[#03045E] font-medium'>Hello, I'm Ariful Islam,</p>
                <h1 className='text-8xl font-bold leading-[100px] text-[#03045E]'>Web Developer</h1>
                <p className='text-[#03045E] font-medium'>Transforming Ideas into Digital Realities with Innovation and Precision.</p>
            </div>
            <div className="flex-1 h-full">
                <img src={arifulIslam} alt="" className=' object-cover h-full w-full bg-bottom'/>
            </div>
        </div>
    );
};

export default Banner;