import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../../../Components/Card/Card";
import fusionHub from '../../../assets/MacBook Pro 15_ Mockup (1).png';
import clickDwells from '../../../assets/cover (2).jpg';
import jobWave from '../../../assets/cover (1).jpg';
import bgImg from "../../../assets/bg2.jpg";
import Container from "../../../Components/Navbar/Container/Container";

const Project = () => {

    const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

    const bg = {
        backgroundImage : `url(${bgImg})`,
        opacity : '',
        backgroundSize : 'cover'
    }
  return (
    <div style={bg} id="work" className="py-12 overflow-hidden">
      
      <Container>
      <h1 className="text-8xl pb-8 flex text-[#8f8b54] font-medium ">
        Projects <IoIosArrowRoundForward className="" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 overflow-hidden">
  

        {
            projects?.map((project, idx) => 
            <div  key={idx} className="">
                <Card  
                 image={project?.image}
                 title={project?.title}
                 description={project?.description}
        
                />
            </div>
            )
        }
       
      </div>
      </Container>
    </div>
  );
};

export default Project;
