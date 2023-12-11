import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div id="#about" className="py-8 space-y-6">
      <h1 className="text-8xl flex text-[#8f8b54] font-medium ">About <IoIosArrowRoundForward className=""/></h1>
      <div>
        <p className="text-[#03045E] tracking-wider leading-[50px] text-4xl font-thin">
          Hello, I'm <span className="font-semibold"> Ariful Islam</span>, a Junior Frontend Developer with a passion
          for creating immersive web experiences. Proficient in HTML, CSS,
          JavaScript, React, and backend technologies like Node.js, Express, and
          MongoDB. I thrive on turning ideas into reality through clean and
          effective code. Eager to contribute and learn in a collaborative
          development environment. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
