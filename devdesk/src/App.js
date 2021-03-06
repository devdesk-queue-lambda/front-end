import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Register from './components/Register';
import UserHome from './components/UserHome';
import NewTicket from './components/NewTicket';
import UpdateTicket from './components/UpdateTicket';
import Ticket from './components/Ticket';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <PrivateRoute path="/user" component={UserHome} />
      <PrivateRoute path="/create-ticket/" component={NewTicket} /> 
      <PrivateRoute path="/edit-ticket/:id" component={UpdateTicket} /> 
      <PrivateRoute path="/ticket/:id" component={Ticket} />
    </div>
  );
}

export default App;
