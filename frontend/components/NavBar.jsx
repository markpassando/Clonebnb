import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';

const NavBar = (props) => {

  return (
    <section className="nav-bar">
      <div className="left-nav">
        <div className="logo">
          <Link to={"/"} ><img src={ window.images.logo } alt="Airbnb Logo" /></Link>
        </div>
        <div className="search-container">
          <input className="search-bar" value="Search Bar Will Go Here"/>
        </div>
      </div>

      <nav className="right-nav">
        <Link to={"/"}>Become a Host</Link>
        <Link to={"/"}>Help</Link>
        <GreetingContainer />
      </nav>
    </section>
  );
}

export default NavBar;
