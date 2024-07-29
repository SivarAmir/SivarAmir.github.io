import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

function AnimatedProgressBar({ maxNumber }) {
  const [number, setNumber] = useState(0);
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
      }, 70); // Adjust the delay as needed
      return () => clearInterval(interval);
    }
  }, [number, maxNumber]);
  return (
    <CircularProgressbar value={number} text={`${number}%`} strokeWidth={5} />
  );
}

export default AnimatedProgressBar;
