import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { showModal } from '../../actions/modal_actions';
import SessionFormContainer from '../session_form/SessionFormContainer';
import LogInFormContainer from '../session_form/LogInFormContainer';
import SignUpFormContainer from '../session_form/SignUpFormContainer';


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
        <button className="demo" onClick={this.handleDemoClick}>Demo Account</button>
        <button onClick={this.props.showSignUp}>Sign Up</button>
        <button onClick={this.props.showLogIn}>Log In</button>

      </div>
    );

    const personalGreeting = (currentUser, logout) => (
    	<div className="login-signup">
        <Link to={"/trips"}>Trips</Link>
        <button className="header-button" onClick={logout}>Log Out</button>
        <div>
          <img src={currentUser.avatar_url} alt="User Avatar" />
        </div>

    	</div>
    );

    return (
      currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => dispatch(showModal(<SignUpFormContainer formType={'signup'}/>)),
  showLogIn: () => dispatch(showModal(<LogInFormContainer formType={'login'}/>))
})

export default connect(null, mapDispatchToProps)(Greeting);
// <p className="header-name">{currentUser.username}</p>
