import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../../Components/Card/Card";
import fusionHub from '../../../assets/MacBook Pro 15_ Mockup (1).png';
import clickDwells from '../../../assets/cover (2).jpg';
import jobWave from '../../../assets/cover (1).jpg';

const Project = () => {
  return (
    <div id="projects" className="py-12 space-y-8">
      <h1 className="text-8xl flex text-[#8f8b54] font-medium ">
        Projects <IoIosArrowRoundForward className="" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 ">
        <Card
         image={clickDwells}
         title='Click Dwells'
         description='Click Dwells, a comprehensive solution for buying, selling, and managing real estate properties. The platform caters to three main roles: User, Agent, and Admin.'

        />
        <Card
         image={fusionHub}
         title='Fusion Hub'
         description='Fusion Hub is an exciting fashion and apparel e-commerce website that brings together six renowned brands in one stylish platform.To explore the latest fashion trends, shop for your favorite products, and enjoy a seamless shopping experience.'

        />
        <Card
         image={jobWave}
         title='Job Wave'
         description="Job Wave is a web-based platform designed to streamline the job search, application, and posting process. It offers a user-friendly interface with a range of features to assist job seekers and employers. This README provides an overview of the project's key functionalities."

        />
      </div>
    </div>
  );
};

export default Project;
