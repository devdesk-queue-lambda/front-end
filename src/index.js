import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { setToken } from './utilities/token';

import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './App';
import './scss/index.scss';
import * as serviceWorker from './serviceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, setToken))
);

const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Provider store={store}> 
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register()