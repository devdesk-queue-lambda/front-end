import { LOGIN_SUCCESS } from '../actions';

export const setToken = store => next => action => {
  action.type === LOGIN_SUCCESS && localStorage.setItem('userToken', action.payload.token);
  next(action);
}