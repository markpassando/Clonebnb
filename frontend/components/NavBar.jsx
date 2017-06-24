import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from './greeting/GreetingContainer';
import SearchBarContainer from './search/SearchBarContainer';
import { Route } from 'react-router-dom';

const NavBar = (props) => {

  return (
    <section className="nav-bar">
      <div className="left-nav">
        <div className="logo">
          <Link to={"/"} ><img src={ window.images.logo } alt="Airbnb Logo" /></Link>
        </div>
        <SearchBarContainer />
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
