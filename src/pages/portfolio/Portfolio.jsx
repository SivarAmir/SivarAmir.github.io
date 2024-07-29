import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";
import { motion as m } from "framer-motion";

export default function Portfolio() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="portfolio section"
    >
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item, index) => {
          return <PortfolioItem key={index} {...item} />;
        })}
      </div>
    </m.section>
  );
}
