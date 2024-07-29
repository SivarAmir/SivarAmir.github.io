import React, { useEffect, useState } from "react";

function AnimatedStatsNumber({ maxNumber }) {
  const countOfIncrease = maxNumber > 10 ? 5 : maxNumber > 3 ? 2 : 1;
  const [number, setNumber] = useState(maxNumber - countOfIncrease);

  useEffect(() => {
    if (number < maxNumber) {
      const interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber < maxNumber) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 250); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [number, maxNumber]);

  return <h3 className="stats__number">{`${number}+`}</h3>;
}

export default AnimatedStatsNumber;
