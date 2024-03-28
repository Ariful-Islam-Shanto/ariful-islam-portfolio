import React from "react";
import Education from "./Education";
import { IoIosArrowRoundForward } from "react-icons/io";
import Experience from "./Experience";

const Qualification = () => {
  return (
    <div className="space-y-12 py-12 ">
      <h1 className="text-5xl md:text-8xl whitespace-normal text-[#8f8b54] font-medium ">
        Qualifications <IoIosArrowRoundForward className="" />
      </h1>
      <div className="flex items-start justify-between gap-12 md:gap-0 flex-col md:flex-row">
      <Education />
      <Experience/>
      </div>
    </div>
  );
};

export default Qualification;
