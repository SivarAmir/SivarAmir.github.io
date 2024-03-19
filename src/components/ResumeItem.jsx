import React from "react";
import parse from "html-react-parser";

function ResumeItem({ item }) {
  return (
    <div className="resume__item">
      <div className="resume__icon">{item.icon}</div>
      <div className="resume__date">{item.year}</div>
      <div className="resume__subtitle">{parse(item.title)}</div>
      <div className="resume__description">{item.desc}</div>
    </div>
  );
}

export default ResumeItem;
