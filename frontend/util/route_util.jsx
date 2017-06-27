import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route exact={ exact } path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);
// const Protected = ({ component: Component, path, loggedIn, exact }) => {
//   const render = (props) => loggedIn ?
//       <Component {...props} /> :
//       <Redirect to="/login" />
//
//   return <Route exact={ exact } path={ path } render={ render } />
// };

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
