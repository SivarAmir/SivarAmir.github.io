import React, { useEffect, useState } from "react";
import { stats } from "../data";
import parse from "html-react-parser";
import AnimatedStatsNumber from "./AnimatedStatsNumber";

function Stats() {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div key={index} className="stats__data">
            <AnimatedStatsNumber maxNumber={no} />
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}

export default Stats;
