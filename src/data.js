import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export const projects = [
  {
    id: "FirstProject",
    name: "Ecommerce App",
    Github: "https://github.com/Alok101220/Ecommerce-App-Using-Flutter",
    techstack: "Dart",
    description:
      "Ecomerce Application developed in flutter by using dart as programming language with the help of Firebase, and Api or you can say by using json data file.",
  },
  {
    id: "SecondProject",
    name: "Weather App",
    Github:
      "https://github.com/Alok101220/WeatherApp",
    techstack: "Java",
    description:
      "Weather App is a mobbile app which is made by using Java. it finds weather of different locations",
  },
  {
    id: "ThirdProject",
    name: "Todo App",
    Github:
      "https://github.com/Alok101220/Assignment-todolist",
    techstack: "ReactJS",
    description:
      "Todo App is a simple web app in which can store your daily tasks and it can filter the tasks which are complete or not.",
  },
];

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/Alok101220",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/alok1020/",
    icon: <FaLinkedin />,
  },
];

export const details = [
  {
    id: 1,
    title: "Short Version",
    description: "Just a Developer!",
  },
  {
    id: 2,
    title: "Perfect!",
    description:
      "Alok here, student at LPU, i specailize in react for frontend and node for backend (MERN Stack). For more check the skills below.",
  },
  {
    id: 3,
    title: "Too detailed",
    description:
      "Hey Alok here! Right Now pursuing Bachelor in Technology in Computer Science and Engineering from LPU. Qualified as a Full Stack Developer and also have interests in learning about new technologies that are revolutionalizing the digital world. I have achieved a sense of commitment and comprehensiveness towards anything and everything that I take up professionally. Acing communication skills, Bosting management and learning new skills are some of the knacks that I have been able to acquire with time and I still continue to grow and learn in whatever ways I can.",
  },
];

export const techStack = [
  {
    id: 1,
    name: "Basic Frontend",
    description: "HTML5 and CSS3",
    icon: <ImHtmlFive />,
  },
  {
    id: 2,
    name: "JS Developer",
    description: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    name: "React Developer",
    description: "ReactJS (Frontend)",
    icon: <FaReact />,
  },
  {
    id: 4,
    name: "API Developer",
    description: "NodeJS and Express (Backend)",
    icon: <FaNodeJs />,
  },
  {
    id: 5,
    name: "Non-relational Databases",
    description: "MongoDB (NoSql)",
    icon: <DiMongodb />,
  },
];
