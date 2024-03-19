import React from "react";
import { FaDownload } from "react-icons/fa6";
import Info from "../../components/Info";
import "./about.css";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";

function About() {
  return (
    <main className="section container">
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
            <a href="" className="button" download>
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
        <h3 className="section__subtitle subtitle__center">
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
    </main>
  );
}

export default About;
