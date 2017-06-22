import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/SessionFormContainer';
import HomePage from './home/HomePage';
import SearchContainer from './search/SearchContainer';
import RoomPageContainer from './room/item/RoomPageContainer';
import NavBar from './NavBar';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>
    <Route exact path="/" component={HomePage} />
    <Route path="/s" component={SearchContainer} />
    <Route path="/rooms/:roomId" component={RoomPageContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
