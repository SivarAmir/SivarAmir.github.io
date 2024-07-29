import React from "react";
import { FaDownload } from "react-icons/fa6";
import Info from "../../components/Info";
import "./about.css";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import { motion as m } from "framer-motion";

function About() {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="section container"
    >
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>

            <a
              className="button"
              href="/public/sivarAmir.pdf"
              download="Sivar-Amir.pdf"
            >
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container gird">
          <Skills />
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center ">
          Experience & Education
        </h3>
        <div className="resume__container gird">
          <div className="resume__data">
            {resume
              .filter((item) => item.category == "experience")
              .map((item, index) => {
                return <ResumeItem key={index} item={item} />;
              })}
          </div>

          <div className="resume__data">
            {resume
              .filter((item) => item.category == "education")
              .map((item, index) => {
                return <ResumeItem key={index} item={item} />;
              })}
          </div>
        </div>
      </section>
    </m.main>
  );
}

export default About;
