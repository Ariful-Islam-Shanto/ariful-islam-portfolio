import React from "react";

const Education = () => {
  return (
    <div className=" space-y-6">
        <h1 className="text-4xl text-center md:text-left text-[#03045e] font-medium">Education...</h1>
      <ul className="steps steps-vertical space-y-4">
        <li className="step step-info ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-2xl text-left text-[#03045e] font-semibold">
              Bachelor of Business Administration
            </h1>
            <p className='text-gray-700'>Rangamati Govt. College</p>
            <h3 className="font-semibold text-lg text-[#03045e]">2021 - current</h3>
          </div>
        </li>
        <li className="step step-info">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-2xl text-[#03045e] font-semibold text-left">
              Higher Secondary Certificate.
            </h1>
            <p className='text-gray-700'>Kachalong Govt. College</p>
            <h3 className="font-semibold text-lg text-[#03045e]">2018 - 2020</h3>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
