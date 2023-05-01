import React from 'react';
import './About1.css';

const About = () => {
    return (
        <div className="container1" style={{display:'flex'}}>
            
    <div className="about">
      <h1>About</h1>
      <p>
        User experience (UX) and user interface (UI) design are critical components of building successful web applications. UX design focuses on understanding the needs and behaviors of users and creating intuitive and efficient interfaces that meet those needs. UI design focuses on the visual and interactive elements of the interface, such as typography, color, layout, and interaction design.
      </p>
      <p>
        As a front-end web developer in React.js, you are responsible for implementing the UX and UI designs using HTML, CSS, and JavaScript. You work closely with UX and UI designers to ensure that the application is visually appealing, easy to use, and performs well across different devices and platforms. You also need to have a solid understanding of React.js and its ecosystem, including state management, routing, and component lifecycle methods.
      </p>
            </div>
            <div className="picture">
            <img src="./pic.png" alt="Example Image"/>
            </div>
        </div>
  );
};

export default About;