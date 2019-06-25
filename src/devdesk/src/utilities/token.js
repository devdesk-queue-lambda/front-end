import { LOGIN_SUCCESS } from '../actions';

export const setToken = store => next => action => {
  if(action.type === LOGIN_SUCCESS) {
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('userID', action.payload.id);
  };
  next(action);
}