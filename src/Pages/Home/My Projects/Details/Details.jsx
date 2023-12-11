import React, { useEffect, useState } from "react";
import bgImg from "../../../../assets/detailsbg.jpg";
import Navbar from "../../../../Components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaArrowTrendDown } from "react-icons/fa6";
import Container from "../../../../Components/Navbar/Container/Container";

const Details = () => {
  const { name } = useParams();
  const [project, setProject] = useState([]);
  console.log(name);

  useEffect(() => {
    fetch("../../../../../public/project.json")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.filter((project) => project.title === name);
        setProject(newData);
        console.log(data);
      });
  }, [name]);

  console.log(project);

  const bg = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
  };
  return (
    <div style={bg} className="min-h-screen">
        <Container>
      <Navbar />
      <div className="flex py-12 xl:min-h-[calc(100vh-100px)] items-center justify-center gap-8 flex-col">
        <h1 className="text-6xl text-center font-bold text-black">
          {project[0]?.title}{" "}
        </h1>
        <p className="text-2xl text-center font-thin">
          This page holds the {project[0]?.description} details.
        </p>
        <AwesomeButton type="secondary"><a href={project[0]?.liveLink}>Live site</a></AwesomeButton>
        <div className="w-full flex items-center justify-center">
          <svg className=" text-center text-6xl text-black">
            <a href="#details">
              <IoIosArrowRoundDown />
            </a>
          </svg>
        </div>
      </div>
      </Container>

      <div id="details" className="bg-gradient-to-r from-[#1c2d5f] to-[#252a3c]">
        <Container>
          <div className=" h-full flex flex-col items-center justify-between shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={project[0]?.image}
                alt="website-mockup"
                className="rounded-xl "
              />
            </figure>
            <div  className=" card-body">
              <h2 className=" text-6xl text-white text-">Overview</h2>
              <p className="font-thin text-3xl text-gray-400 tracking-wider leading-[50px]">
                {project[0]?.overview}
              </p>
              <div className="card-actions">
               
                  <AwesomeButton className="" cssModule={"aws"} type="primary">
                  <a href={project[0]?.liveLink}>Live site</a> <FaArrowTrendDown className="ml-2" />
                  </AwesomeButton>
               
               <Link to={'/'}>
                  <AwesomeButton className="" cssModule={"aws"} type="secondary">
                    Go back <FaArrowTrendDown className="ml-2" />
                  </AwesomeButton>
               </Link>
               
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Details;
