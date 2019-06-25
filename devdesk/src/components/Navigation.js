import React from 'react';
import { NavLink } from 'react-router-dom';
import Lambda_Logo from '../imgs/Lambda_Logo.png';

const Navigation = props => {
  return (
    <nav>
      <h3><img src={Lambda_Logo} alt="Lambda Logo Mark" height="29" />DevDesk Queue</h3>
      <ul>
        {localStorage.getItem('token') ?
          (
            <>
            <li><NavLink to="/user" >Home</NavLink></li>
            <li><NavLink to="/create-ticket" >New Ticket</NavLink></li>
            <li><NavLink to="/edit-ticket/0" >Update Ticket</NavLink></li>
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