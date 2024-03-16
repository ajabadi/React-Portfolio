import React from "react";
import ClimaFitImage from "../assets/climafit.png";
import techblogImage from "../assets/MVC copy.png";
import workschedulerImage from "../assets/Work copy.png";
import notetakerImage from "../assets/Note-taker copy.png";
import PasswordImage from "../assets/Screen Shot 2023-11-29 at 15.07.07 copy.png";
import weatherImage from "../assets/Weather copy.png";
import svgImage from "../assets/SVG copy.png";

const projects = [
  {
    title: "ClimaFit Diary",
    image: ClimaFitImage,
    link: "https://climafit-diary-015dae2ac9e5.herokuapp.com",
    description: "ClimaFit-Diary is an all-in-one fitness app integrating weather forecasts, calorie counting, workout tracking, and an OpenAI message box into a single platform. Designed for ease and efficiency, it replaces the need for multiple apps by offering a comprehensive solution to manage your fitness routine, diet, and schedule."
  },
  {
    title: "Tech Blog",
    image: techblogImage,
    link: "https://ajabadi.github.io/MVC-Tech-Blog/",
    description: "A web application to track your expenses efficiently, allowing you to monitor your financial activity over time."
  },
  {
    title: "Work Day Scheduler",
    image: workschedulerImage,
    link: "https://ajabadi.github.io/Work-Day-Scheduler/",
    description: "An interactive dashboard to monitor stock market trends and make informed investment decisions."
  },
  {
    title: "Note Taker",
    image: notetakerImage,
    link: "https://ajabadi.github.io/Note-Taker/",
    description: "The Note Taker is an app using Node.js and Express.js for small business owners to write, save, and manage notes through a simple web interface. Features include creating new notes, viewing existing ones, and interactive note management, all stored within a JSON file. Users set it up by cloning the repository, installing dependencies, and running it on their local server, offering an efficient way to organize tasks and thoughts."
  },
  {
    title: "Password Generator",
    image: PasswordImage,
    link: "https://ajabadi.github.io/Password-Generator/",
    description: "Password Generator is a responsive web application that generates random passwords based on user-selected criteria. It involves HTML, CSS, and JavaScript to create a secure password with options for character length (8-128 characters) and types (lowercase, uppercase, numeric, and special characters)."
  },
  {
    title: "Work Day Scheduler",
    image: weatherImage,
    link: "https://ajabadi.github.io/Work-Day-Scheduler/",
    description: "The Work Day Scheduler is a simple calendar application that allows users to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery."
    },
    {
    title: "SVG Logo Maker",
    image: svgImage,
    link: "https://github.com/ajabadi/SVG-Logo-Maker",
    description: "SVG Logo Maker is a Node.js CLI tool that enables freelance web developers to create simple SVG logos without needing a graphic designer. It offers customizable options for text (up to three characters), text color, shape selection (circle, triangle, square), and shape color. The application generates an logo.svg file, which is a 300x200 pixel image that can be viewed in any browser. Installation is straightforward: clone the repo, install dependencies with npm, and run the tool using node index.js."
    },
    ];
    
    export default function ProjectsPage() {
      return (
        <section id="work" className="main-container3">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Coding Projects</h2>
          </div>
    
          {projects.map((project, index) => (
            <div className="project-container" key={index}> 
              <div className="project-title">
                <h4>{project.title}</h4>
              </div>
              <div className="project-image">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                </a>
              </div>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </section>
      );
    }
    