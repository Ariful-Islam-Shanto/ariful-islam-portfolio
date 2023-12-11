import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { IoMdArrowDropright, IoMdArrowDroprightCircle } from 'react-icons/io';
import { FaArrowTrendDown } from "react-icons/fa6";

const Card = ({image, title, description, liveLink}) => {
    return (
        <div>
            <div className="bg-gradient-to-r h-full  from-[#1c2d5f] rounded-tr- rounded-tl-2xl rounded-bl-2xl rounded-br-2xl to-[#252a3c] flex items-center justify-between shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={image}
              alt="website-mockup"
              className="rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-[520px]"
            />
          </figure>
          <div className="flex-1 card-body items-left text-left">
            <h2 className="card-title text-4xl text-white">{title}</h2>
            <p className='font-thin text-gray-400 tracking-wider leading-[30px]'>{description}</p>
            <div className="card-actions">
              {/* <button className="btn">See Project</button> */}
              <AwesomeButton className='' cssModule={'aws'} type="primary">See Project <FaArrowTrendDown className='ml-2'/></AwesomeButton>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Card;