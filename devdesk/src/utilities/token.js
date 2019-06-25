import { LOGIN_SUCCESS } from '../actions';

export const setToken = store => next => action => {
  action.type === LOGIN_SUCCESS && localStorage.setItem('token', action.payload);
  next(action);
}