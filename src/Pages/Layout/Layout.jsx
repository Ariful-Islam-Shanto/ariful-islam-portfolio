import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import bgImg from '../../assets/bg.jpg';

const Layout = () => {
    // const bg = {
    //     backgroundImage : `url(${bgImg})`,
    //     opacity : '40%'
    // }
    return (
        // <div className='bg-gradient-to-tr from-[#323E2A] to-[#101815]'>
        <div className=''> 
            {/* <Navbar/> */}
            <Outlet/>
        </div>
    );
};

export default Layout;