import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/GreetingContainer';
import SessionFormContainer from './session_form/SessionFormContainer';

const App = () => (
  <div>
    <header>
      <h1>Clonebnb</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
