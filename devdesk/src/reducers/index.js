import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { newTicket } from './newticket';

export default combineReducers({
  login,
  register,
  newTicket
});