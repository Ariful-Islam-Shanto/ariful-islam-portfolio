import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Navbar/Container/Container";
import About from "./About Me/About";
import Contact from "./Contact/Contact";
import Project from "./My Projects/Project";

const Home = () => {
  return (
    <div className="bg-[#FBF8CC]">
      <Container>
        <Navbar />
        <Banner />
        <About/>
      </Container>
      <Project/>
      <Container>
        <Contact/>
      </Container>
    </div>
  );
};

export default Home;
