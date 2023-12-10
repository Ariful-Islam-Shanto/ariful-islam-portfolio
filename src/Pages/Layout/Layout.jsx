import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='bg-[#FBF8CC] '>
            {/* <Navbar/> */}
            <Outlet/>
        </div>
    );
};

export default Layout;