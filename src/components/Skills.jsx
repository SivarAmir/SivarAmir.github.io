import React, { useEffect, useState } from "react";
import { skills } from "../data";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressBar from "./AnimatedProgressBar";

function Skills() {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <AnimatedProgressBar maxNumber={percentage} />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default Skills;
