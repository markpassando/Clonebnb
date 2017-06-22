import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleDemoClick = this.handleDemoClick.bind(this);
  }
  
  handleDemoClick(e) {
    e.preventDefault();
    this.props.login({ user: {username: "RonBurgundy", password: "123456"} });
  }

  render() {
    const { currentUser, logout } = this.props;

    const sessionLinks = () => (
      <div className="login-signup">
        <button onClick={this.handleDemoClick}>Demo Account</button>
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

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
  }
}

export default Greeting;
