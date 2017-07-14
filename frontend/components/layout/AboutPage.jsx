import React from 'react';
import Footer from './Footer';

const AboutPage = (props) => (
  <div className="about">
    <div className="container">
      <h2>About</h2>
      <p>Clonebnb is a fullstack app inspired by Airbnb. The front end is created with JavaScript and Reactjs/Redux and the back end is created with Ruby on Rails.</p>
      <h3>Want to learn more about the code?</h3>
        <div className="icon-box">
          <a href="https://github.com/markpassando/Clonebnb" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      <h3>Want to get in touch with me?</h3>
        <div className="icon-box">
          <a href="http://markpassando.com/" target="_blank"><i className="fa fa-home" aria-hidden="true"></i></a>
          <a href="mailto:mpassando@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/markpassando/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://angel.co/mark-passando" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
        </div>
    </div>
  </div>
);

export default AboutPage;
