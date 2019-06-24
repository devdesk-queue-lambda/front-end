import { combineReducers } from 'redux';
import { login } from './login';
import tickets from './tickets'

export default combineReducers({
  login,
  tickets
});