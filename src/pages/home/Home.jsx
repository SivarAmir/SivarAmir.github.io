import React from "react";
import Profile from "../../assets/sivar3.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import { motion as m } from "framer-motion";

function Home() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="home section gird"
    >
      <div className="my-image">
        <img src={Profile} className="home__img" />
      </div>

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sivar Amir</span>
            <br />
            Front-End Developer
          </h1>

          <p className="home__description">
            Front-end web developer with a passion for web design. I specialize
            in creating responsive websites that are both functional and
            aesthetically pleasing.
          </p>

          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </m.section>
  );
}

export default Home;
