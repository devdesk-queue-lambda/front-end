import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';

import Navigation from './components/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Route exact path="/" component={Home} />
      {/*
      <Route exact path="/register" component={Register} />
      <PrivateRoute path="/user" component={UserHome} />
      <PrivateRoute path="/edit-user" component={UserEdit} />
      <PrivateRoute path="/ticket" component={UserHome} />      {/* ticket will have an edit state within it */}
    </div>
  );
}

export default App;
