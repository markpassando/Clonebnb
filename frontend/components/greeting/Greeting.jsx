import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="login-signup">
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log In</Link>
  </div>
);

const personalGreeting = (currentUser, logout) => (
	<div className="login-signup">
    <button className="header-button" onClick={logout}>Log Out</button>
    <div>
      <img src={currentUser.avatar_url} alt="User Avatar" />
    </div>
    <p className="header-name">{currentUser.username}</p>
	</div>
);

const Greeting = ({ currentUser, logout }) => {
  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  );
}

export default Greeting;
