import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Sivar",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Amir",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Kurdish",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Eribl, Iraq",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+9647508641115",
  },

  {
    id: 8,
    title: "Email : ",
    description: "sevaramer999@gmail.con",
  },

  {
    id: 9,
    title: "Languages : ",
    description: "Kurdish, English",
  },
];

export const stats = [
  {
    id: 1,
    no: 1,
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: 3,
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: 2,
    title: "Happy <br /> Customers",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Web Developer <span> TechnoBase, </span>",
    desc: "Developed and implemented responsive web designs using HTML, CSS, and JavaScript to improve user experience and accessibility across multiple platforms.",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021 - Present",
    title:
      "Bachelor of Software Engineering <span> Salahaddin University-Erbil </span>",
    desc: "The Bachelor of Software Engineering program at the College of Engineering, Salahaddin University-Erbil, is designed to equip students with the theoretical knowledge and practical skills necessary for a successful career in software development and engineering.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
  },

  {
    id: 2,
    title: "Css",
    percentage: "100",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 4,
    title: "Php",
    percentage: "60",
  },

  {
    id: 5,
    title: "Jquery",
    percentage: "50",
  },

  {
    id: 6,
    title: "React",
    percentage: "80",
  },
  {
    id: 7,
    title: "java",
    percentage: "80",
  },
  {
    id: 7,
    title: "tailwindCss",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
