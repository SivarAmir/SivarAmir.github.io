import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { show as s } from "../features/nav-show/navShowSlice";

import "./navbar.css";

function Navbar() {
  // const [isNavShow, setIsNavShow] = useState(false);
  const show = useSelector((state) => state.navShow.value);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <div className={`nav__menu ${show ? "show-menu" : ""}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={path}
                className="nav__link"
                onClick={() => dispatch(s())}
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`nav__toggle ${show ? "animate-toggle" : ""}`}
        onClick={() => dispatch(s())}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
