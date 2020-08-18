import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import store from './store/store';

// Bootstrap and styles
// import './styles/main.css';
const routes = new Routes(store).configureRoutes();

render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.querySelector('#app'),
);
