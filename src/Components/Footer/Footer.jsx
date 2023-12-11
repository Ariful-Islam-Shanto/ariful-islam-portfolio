import React from "react";
import Container from "../Navbar/Container/Container";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black h-full py-24">
      <Container>
        <footer className="footer flex flex-col md:flex-row items-center justify-center text-neutral-content">
          <aside className="flex-1 text-xl text-center md:text-left font-thin">
            <p>
              <span className="uppercase text-4xl font-semibold">
                Ariful Islam
              </span>
              <br />
              <br />A Frontend focused Web Developer building the Frontend of
              Websites and Web Applications that leads to the success of the
              overall product.
            </p>
          </aside>
          <nav className="flex-1 flex flex-col items-end justify-between gap-4">
            <header className="text-3xl ">Social</header>
            <div className="grid grid-flow-col items-center justify-center gap-4 text-2xl">
              <a href="https://web.facebook.com/mdarifulislam.shanto.96/">
                <TiSocialFacebook />
              </a>
              <a href="https://www.linkedin.com/in/ariful-islam-1631a72a3/">
                <TiSocialLinkedin />
              </a>
              <a href="https://github.com/Ariful-Islam-Shanto">
                <FaGithub />
              </a>
            </div>
          </nav>
        </footer>
        <br />
        <hr />
      </Container>
    </div>
  );
};

export default Footer;
