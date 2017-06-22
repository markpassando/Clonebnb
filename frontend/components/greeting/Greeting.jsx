import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { showModal } from '../../actions/modal_actions';
import SessionForm from '../session_form/SessionFormContainer';


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
    debugger
    const sessionLinks = () => (
      <div className="login-signup">
        <button onClick={this.handleDemoClick}>Demo Account</button>
        <a href="#" onClick={this.props.showSignUp}>Sign Up</a>
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

const mDTP = (dispatch) => ({
  showSignUp: () => dispatch(showModal(<SessionForm formType={'signup'}/>))
})

export default connect(null, mDTP)(Greeting);
