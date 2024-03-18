import React from "react";
import { personalInfo } from "../data";

function Info() {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li key={index} className="info__item">
            <span className="info__title">{title}</span>
            <span className="info__description">{description}</span>
          </li>
        );
      })}
    </>
  );
}

export default Info;
