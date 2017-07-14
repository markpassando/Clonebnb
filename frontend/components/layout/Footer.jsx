import React from 'react';

const Footer = (props) => (
  <div className="footer">
      <div>
        <small>For Portfolio Purposes Only</small>
      </div>
      <div className="icon-box">
        <a href="http://markpassando.com/" target="_blank"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a href="mailto:mpassando@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
        <a href="https://github.com/markpassando/Clonebnb" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/markpassando/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://angel.co/mark-passando" target="_blank"><i className="fa fa-angellist" aria-hidden="true"></i></a>
      </div>
  </div>
);

export default Footer;
