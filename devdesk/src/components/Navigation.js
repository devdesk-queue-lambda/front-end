import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav>
      <h3>DevDesk Queue</h3>
      <ul>
        {localStorage.getItem('token') ?
          (
            <>
            <li><NavLink to="/user" >Home</NavLink></li>
            <li><NavLink to="/create-ticket" >New Ticket</NavLink></li>
            <li><NavLink to="/logout" >Logout</NavLink></li>
            </>
          )
        :
          (
            <>
            <li><NavLink exact to="/" >login</NavLink></li>
            <li><NavLink to="/register" >Register</NavLink></li>
            </>
          )
        }
      </ul>
    </nav>
  );
}

export default Navigation;