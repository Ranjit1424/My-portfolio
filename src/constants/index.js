import {
  exp,
  c,
  react,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  trinity ,
  NotesStoreapp,
  ECommerceProduct,
  OnlineVotingApplication,
  threejs,
  WeatherDataAnalysis,
  CLOUDSTREAMING,
  abhinav ,
  chatApplication,
  OrangeItech,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "React", icon: react },
  { title: "C++", icon: cpp },
  { title: "C", icon: c },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Full stack Java developer Course",
    company_name: "in Kiran Academy",
    icon: OrangeItech,
    iconBg: "#161329",
    date: "2024 - 2025",
    points: [
      "I have successfully completed a Full Stack Java Developer course at Kiran Academy, gaining expertise in both front-end and back-end technologies",
      "This training has equipped me with practical skills to build and manage end-to-end web applications efficiently.",
    ],
  },
  {
  title: "internship",
    company_name: "Deloitte Technology Job Simulation",
    icon: exp ,
    iconBg: "#161329",
    date: "2025",
    points: [
      "The Deloitte Technology Job Simulation is a virtual internship experience that helps you develop practical consulting and technology skills. It allows you to solve real-world business challenges, work with data-driven insights, and understand how Deloitte leverages innovation to support clients in digital transformation."
    ],
  },

  {
    title: "BCS",
    company_name: "S.M.Joshi College Savitribai Phule Pune University ",
    icon: abhinav ,
    iconBg: "#161329",
    date: "2021 -  2024",
    points: [
      "I have completed my Bachelor of Computer science (BCS) at S.M.Joshi College, where I built a strong foundation in computer science and programming.",
      "This academic journey has enhanced my technical skills and prepared me for advanced studies and professional opportunities in IT.",
    ],
  },
  {
    title: "MCA",
    company_name: "Trinity College ",
    icon: trinity ,
    iconBg: "#161329",
    date: " 2025 -  2026",
    points: [
      "I am currently pursuing my Master of Computer Applications (MCA) at Trinity College, where I am deepening my knowledge of advanced computer science concepts and professional practices.",
      "This ongoing study is helping me strengthen my expertise in software development and prepare for a successful career in the IT industry.",
    ],
  },
];

export const projects = [
  {
    name: "Jobsa",
    description:
      "A simple Spring Boot application with MySQL is a backend web application that uses the Spring Boot framework to build REST APIs and connects to a MySQL database to store and retrieve data. It uses Spring Data JPA for database operations and provides CRUD (Create, Read, Update, Delete) functionality. This setup is commonly used to build scalable and maintainable enterprise applications.",
    tags: [
      { name: "Java Spring Boot", color: "blue-text-gradient" },
      { name: " Hibernate", color: "green-text-gradient" },
      { name: "mySql", color: "pink-text-gradient" },
    ],
    image: NotesStoreapp,
    source_code_link: "https://github.com/Ranjit1424/Jobsa",
  },
  {
    name: "Job-Portal",
    description:
      "A simple Spring Boot application with MySQL is a backend web application that uses the Spring Boot framework to build REST APIs and connects to a MySQL database to store and retrieve data. It uses Spring Data JPA for database operations and provides CRUD (Create, Read, Update, Delete) functionality. This setup is commonly used to build scalable and maintainable enterprise applications.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Hibernate", color: "green-text-gradient" },
      { name: "mySql", color: "pink-text-gradient" },
    ],
    image: ECommerceProduct,
    source_code_link: "https://github.com/Ranjit1424/Job-Portal",
  },
  {
    name: "Weather Data Analysis",
    description:
      "The Weather Data Analysis Dashboard is a frontend data analytics application built using React that processes and visualizes weather data of major Indian cities. The application reads weather records from a CSV file, cleans and structures the data, and performs statistical analysis on parameters such as temperature, humidity, wind speed, and precipitation.",
    tags: [
      { name: "JavaScript ", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "HTML5", color: "pink-text-gradient" },
    ],
    image: WeatherDataAnalysis,
    source_code_link:
      "https://github.com/Ranjit1424/Weather-App",
  },
  {
    name: "Simon-Game",
    description:
      "Simon Game built using HTML, CSS, and JavaScript that tests the user’s memory skills. The game generates a sequence of colors that the player must repeat in the correct order. It demonstrates DOM manipulation, event handling, and basic game logic using JavaScript. 🎮",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Css", color: "blue-text-gradient" },
      { name: "HTML5", color: "green-text-gradient" },],
    image: OnlineVotingApplication,
    source_code_link: "https://github.com/Ranjit1424/Simon-Game",
  },
];
