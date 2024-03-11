import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";

import "./navbar.css";

function Navbar() {
  const [isNavShow, setIsNavShow] = useState(false);
  return (
    <nav className="nav">
      <div className={`nav__menu ${isNavShow ? "show-menu" : ""}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={path}
                className="nav__link"
                onClick={() => setIsNavShow(!isNavShow)}
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`nav__toggle ${isNavShow ? "animate-toggle" : ""}`}
        onClick={() => setIsNavShow(!isNavShow)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
