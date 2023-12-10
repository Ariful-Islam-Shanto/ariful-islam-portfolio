import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Navbar/Container/Container";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </div>
  );
};

export default Home;
