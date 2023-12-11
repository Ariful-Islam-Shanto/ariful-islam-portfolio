import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {

    const navlinks = <>
      <li><a href=''>Home</a></li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li><a href='#contact'>Work</a></li>
    </>
    return (
        <div className="navbar hover:bg-blue-400 hover:text-white rounded-lg border-b-4 border-[#03045E] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-[#03045E] menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-transparent backdrop-blur-3xl rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-med text-[#03045E]">Ariful Islam</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-[#03045E] menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end text-[#03045E] text-2xl flex gap-4">
    <a><TiSocialFacebook/></a>
    <a><TiSocialLinkedin/></a>
    <a><FaGithub/></a>
  </div>
</div>
    );
};

export default Navbar;