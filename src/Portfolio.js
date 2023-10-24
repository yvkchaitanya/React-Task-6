// Portfolio.js
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Chaitanya</h1>
        <p>Web Developer</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer with a strong focus on creating responsive and user-friendly web applications.
        </p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>I developed a fully working website for a supermaket in my locality.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Developed a ping-pong game.</p>
        </div>
        <h2>Experince</h2>
        <div className="project">
          <h3>Intern at Infosys</h3>
          <p>I worked as a full stack web developer at Infosys.</p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: yvkchaitanya@gmail.com</p>
        <p>Mobile: +91 7989485486</p>
        
      </section>
    </div>
  );
};

export default Portfolio;