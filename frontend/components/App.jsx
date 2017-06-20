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
import RoomIndexContainer from './room/RoomIndexContainer';
import RoomPageContainer from './room/item/RoomPageContainer';

const App = () => (
  <div>
    <header>
      <Link to={"/"} className="logo">Home</Link>
      <h1>Clonebnb</h1>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={RoomIndexContainer} />
    <Route path="/rooms/:roomId" component={RoomPageContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
