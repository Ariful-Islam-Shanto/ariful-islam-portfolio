import React from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import Marquee from "react-fast-marquee";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const About = () => {
  return (
    <div id="about" className="py-12  space-y-12">
      <h1 className="text-8xl flex text-[#8f8b54] font-medium ">
        About <IoIosArrowRoundForward className="" />
      </h1>
      <div className="flex flex-col-reverse gap-6">
        <div className="flex-1 bg-[#03045E] rounded-lg h-full p-3 gap-4">
          <p className=" tracking-wider font-medium text-white p-3 leading-[50px] text-5xl">
            My Skills :
          </p>
          <div className="w-full">
            <Marquee>
              <div className="text-6xl flex gap-8 h-full font-bold bg-">
                <FaHtml5 className="text-orange-600" />
                <FaCss3Alt className="text-blue-700" />
                <RiJavascriptFill className="text-yellow-400" />
                <SiTailwindcss className="text-blue-600" />
                <SiMongodb className="text-green-600" />
                <SiExpress className="text-[#ebe6e6]" />
                <FaReact className="text-blue-400" />
                <FaNodeJs className="text-green-600" />
              </div>
            </Marquee>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-[#03045E] tracking-wider leading-[50px] text-2xl font-thin">
            Hello, I'm <span className="font-semibold"> Ariful Islam</span>, a
            Junior Frontend Developer with a passion for creating immersive web
            experiences. Proficient in HTML, CSS, JavaScript, React, and backend
            technologies like Node.js, Express, and MongoDB. I thrive on turning
            ideas into reality through clean and effective code. Eager to
            contribute and learn in a collaborative development environment.
            Let's build something amazing together!
          </p>
        </div>
      </div>
      
        <div className="w-full flex items-center justify-center">
        <svg className=" text-center text-6xl text-black">
        <a href="#work">
          <IoIosArrowRoundDown/>
      </a>
        </svg>
        </div>
    </div>
  );
};

export default About;
