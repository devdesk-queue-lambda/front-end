import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

// const baseURL = "https://devdesk-backend-v2.herokuapp.com";
const baseURL = "https://devdesk-backend.herokuapp.com";

////////////////
//            //
//   LOGIN    //
//            //
////////////////

export const LOGIN_START    = "LOGIN_START";
export const LOGIN_SUCCESS  = "LOGIN_SUCCESS";
export const LOGIN_FAIL     = "LOGIN_FAIL";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${baseURL}/api/auth/login`, credentials)
    .then(res => {
      console.log('SUCESS:',res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      }, console.log('res',res));
      return true;
    })
    .catch(err => {
      console.log('ERROR:',err.response);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.status
      });
      return false;
    });
}

///////////////////
//               //
//   REGISTER    //
//               //
///////////////////

export const REGISTER_START   = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL    = "REGISTER_FAIL";

export const register = regInfo => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios.post(`${baseURL}/api/auth/register`, regInfo)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.payload
      });
      return true;
    })
    .catch(err => {
      console.log('ERROR:',err.response);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.status
      });
      return false;
    });
}

/////////////////////
//                 //
//   GET TICKET    //
//                 //
/////////////////////

export const GET_TICKET_START   = "GET_TICKET_START";
export const GET_TICKET_SUCCESS = "GET_TICKET_SUCCESS";
export const GET_TICKET_FAIL    = "GET_TICKET_FAIL";

export const getTicket = id => dispatch => {
  dispatch({ type: GET_TICKET_START });
  return axiosWithAuth().get(`${baseURL}/api/tickets/${id}`)
    .then(res => {
      console.log('get',res);
      // dispatch({
      //   type: GET_TICKET_SUCCESS,
      //   payload: res.data.payload
      // });
      return true;
    })
    .catch(err => {
      console.log('ERROR:',err.response);
      dispatch({
        type: GET_TICKET_FAIL,
        payload: err.response.status
      });
      return false;
    });
}

/////////////////////
//                 //
//   NEW TICKET    //
//                 //
/////////////////////

export const SUBMIT_TICKET_START   = "SUBMIT_TICKET_START";
export const SUBMIT_TICKET_SUCCESS = "SUBMIT_TICKET_SUCCESS";
export const SUBMIT_TICKET_FAIL    = "SUBMIT_TICKET_FAIL";

export const submitTicket = ticketInfo => dispatch => {
  console.log('submit new ticket');
  dispatch({ type: SUBMIT_TICKET_START });
  return axiosWithAuth().post(`${baseURL}/api/tickets`, ticketInfo)
    .then(res => {
      console.log('posted')
      dispatch({
        type: SUBMIT_TICKET_SUCCESS,
        payload: res.data.payload
      });
      return true;
    })
    .catch(err => {
      console.log('ERROR:',err.response);
      dispatch({
        type: SUBMIT_TICKET_FAIL,
        payload: err.response.status
      });
      return false;
    });
}

////////////////////////
//                    //
//   UPDATE TICKET    //
//                    //
////////////////////////

export const UPDATE_TICKET_START   = "UPDATE_TICKET_START";
export const UPDATE_TICKET_SUCCESS = "UPDATE_TICKET_SUCCESS";
export const UPDATE_TICKET_FAIL    = "UPDATE_TICKET_FAIL";

export const updateTicket = ticketInfo => dispatch => {
  dispatch({ type: UPDATE_TICKET_START });
  return axiosWithAuth().put(`${baseURL}/api/tickets/${ticketInfo.id}`, ticketInfo)
    .then(res => {
      dispatch({
        type: UPDATE_TICKET_SUCCESS,
        payload: res.data.payload
      });
      return true;
    })
    .catch(err => {
      console.log('ERROR:',err.response);
      dispatch({
        type: UPDATE_TICKET_FAIL,
        payload: err.response.status
      });
      return false;
    });
}