import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        // <div className='bg-gradient-to-tr from-[#323E2A] to-[#101815]'>
        <div className='bg-[#FBF8CC] '> 
            {/* <Navbar/> */}
            <Outlet/>
        </div>
    );
};

export default Layout;