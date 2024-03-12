import React from "react";
import Profile from "../../assets/sivar3.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <section className="home section gird">
      <img src={Profile} className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sivar Amir.</span>
            <br /> Web Developer
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
    </section>
  );
}

export default Home;
