import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-60393807-3');

const logPageView => () {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter onUpdate={logPageView}>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
