import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { newTicket } from './newticket';
import tickets from './tickets'


export default combineReducers({
  login,
  register,
  newTicket,
  tickets

});