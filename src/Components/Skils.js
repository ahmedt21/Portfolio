import React from 'react';
import './Skils.css'
import { FaReact, FaBootstrap } from "react-icons/fa";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript1 } from "react-icons/di";

function skils() {
  const skills = [
    {
      id: 1,
      title: 'HTML',
      description: 'Building semantic and accessible web pages using HTML5.',
      icon: <AiFillHtml5 />,
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Styling web pages using CSS3 and preprocessors like Sass and Less.',
      icon: <DiCss3 />,
    },
    {
      id: 3,
      title: 'Bootstrap',
      description: 'Creating responsive and mobile-first web pages using Bootstrap.',
      icon: <FaBootstrap />,
    },
    {
      id: 4,
      title: 'JavaScript',
      description: 'Writing clean and efficient JavaScript code using ES6+ features.',
      icon: <DiJavascript1 />,
    },
    {
      id: 5,
      title: 'React.js',
      description: 'Building scalable and reusable user interfaces using React.js.',
      icon: <FaReact />,
    },
    {
      id: 6,
      title: 'GitHub',
      description: 'Managing and collaborating on code using Git and GitHub.',
      icon: <AiFillGithub />,
    },
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-md-4" key={skill.id}>
              <div className="card">
                <div className="card-body">
                  <i className={`fab ${skill.icon} mb-3`} style={{ fontSize: '4rem' }}>{skill.icon}</i>
                  <h5 className="card-title">{skill.title}</h5>
                  <p className="card-text">{skill.description}</p>
                </div>
                <div className="card-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default skils;