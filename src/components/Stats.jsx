import React from "react";
import { stats } from "../data";
import parse from "html-react-parser";

function Stats() {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div key={index} className="stats__data">
            <h3 className="stats__number">{no}</h3>
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}

export default Stats;
