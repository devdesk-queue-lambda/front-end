import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('rest',rest);
  return (
    <Route
      {...rest}
      render={ props => localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/" /> }
    />
  )
}

export default PrivateRoute;