import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  otherLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="other-link">
          <p>Don’t have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className="other-link">
          <p>Already have an account?</p>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Email Address"
                className="login-input"
              />
            <i className="fa fa-envelope-o fa-lg side-icon" aria-hidden="true"></i>
            </label>

            <br/>

            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-input"
              />
            </label>
            <i className="fa fa-lock fa-lg side-icon" aria-hidden="true"></i>

            <br/>

            <input className="login-button" type="submit" value={this.props.formType === 'login' ? "Log in" : "Sign up"} />
          </div>
        </form>

        {this.otherLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
