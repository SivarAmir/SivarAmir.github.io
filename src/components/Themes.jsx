import React, { useEffect, useState } from "react";
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";
import { useSelector } from "react-redux";

const getStorageColor = () => {
  let color = "";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  } else {
    color = "hsl(252,35%,51%)";
  }

  return color;
};

const getStorageTheme = () => {
  let theme = "";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else {
    theme = "light__theme";
  }

  return theme;
};

function Themes() {
  const show = useSelector((state) => state.navShow.value);
  const [showSwitcher, setShowSwitcher] = useState(false);
  const [color, setColor] = useState(getStorageColor);
  const [theme, setTheme] = useState(getStorageTheme);

  const togglerTheme = () => {
    if (theme === "light__theme") {
      setTheme("dark__theme");
    } else {
      setTheme("light__theme");
    }
  };

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {show ? (
        <></>
      ) : (
        <div
          className={`style__switcher ${
            showSwitcher === true ? "show__switcher" : ""
          }`}
        >
          <div
            className="style__switcher-toggler"
            onClick={() => setShowSwitcher(!showSwitcher)}
          >
            <FaCog />
          </div>

          <div className="theme__toggler" onClick={() => togglerTheme()}>
            {theme == "light__theme" ? <BsMoon /> : <BsSun />}
          </div>

          <h3 className="style__switcher-title">Style Switcher</h3>
          <div className="style__switcher-items">
            {themes.map((theme, index) => {
              return (
                <ThemeItem key={index} {...theme} changeColor={changeColor} />
              );
            })}
          </div>

          <div
            className="style__switcher-close"
            onClick={() => setShowSwitcher(false)}
          >
            &times;
          </div>
        </div>
      )}
    </div>
  );
}

export default Themes;
