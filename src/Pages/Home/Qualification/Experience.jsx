import React from 'react';

const Experience = () => {
    return (
        <div className='space-y-6'>
            <h1 className="text-4xl text-[#03045e] font-medium text-center md:text-left">Experience...</h1>
        <ul className="steps steps-vertical space-y-4">
          <li className="step step-info">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-2xl text-left text-[#03045e] font-semibold">
                Frontend Development
              </h1>
              <p className='text-gray-700'>Learning</p>
              <h3 className="font-semibold text-lg text-[#03045e]">July 1st 2023 - current</h3>
            </div>
          </li>
          
        </ul>
      </div>
    );
};

export default Experience;