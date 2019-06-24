import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
const baseURL = "someurl";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${baseURL}/api/login`, credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.payload
      });
      return true;
    })
    .catch(err => console.log('err',err));
}