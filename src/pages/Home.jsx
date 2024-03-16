import React from "react";
import profileImage from "../assets/profile.png";

export default function HomePage() {
  return (
    <div className="container">
      <div className="text-center spacing">
        <div className="main-container"> {/* Change made here */}
        <h1>About Me</h1>
        <img src={profileImage} alt="Profile" className="Profile" /> {/* Change made here */}
        <p>
          I'm Jose Abadi, a Food Science Major and Tech Management Minor undergraduate student at UC Davis.
          My aspiration is to establish a food company. To achieve this goal, I want to acquire comprehensive understanding of both the business and technological aspects of running a company. I am driven by the desire to be a well-rounded entrepreneur that understands every aspect of my business. This approach will not only enable me to navigate the complex landscape of modern business but also ensure I stay at the forefront of innovation and efficiency in my business venture.
        </p>
        <div className="spacing">
          <h1>Skills</h1>
          <ul className="list">
            <li><i className="bi bi-braces-asterisk"></i> HTML, CSS, JavaScript - Front-end development</li>
            <li><i className="bi bi-react"></i> React and Redux - Building dynamic user interfaces</li>
            <li><i className="bi bi-server"></i> Node.js, Express.js -  ack-end development</li>
            <li><i className="bi bi-hdd-network"></i> MySQL, Sequelize, MongoDB, Mongoose - Database management</li>
            <li><i className="bi bi-git"></i> Git - For version control and displaying projects</li>
            <li><i className="bi bi-layout-text-window-reverse"></i> Bootstrap - Responsive design</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
