import { combineReducers } from 'redux';
import { login } from './login';
import { register } from './register';
import { newTicket } from './newticket';
import { updateticket } from './updateticket';
import { deleteticket } from './delete';

export default combineReducers({
  login,
  register,
  newTicket,
  updateticket,
  deleteticket
});