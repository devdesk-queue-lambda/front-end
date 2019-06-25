import axios from 'axios'
import data from '../dummyData'

export const EDIT_CARD='EDIT_CARD'
export const DELETE_CARD='DELETE_CARD'
export const ADD_CARD='ADD_CARD'
export const GET_CARD='GET_CARD'
export const GET_CARDS='GET_CARDS'
export const FETCHING="FETCHING"
export const ASSIGN="ASSIGN"
//logins
export const NEW_USER='NEW_USER'
export const LOGOUT='LOGOUT'
const baseURL = "https://devdesk-backend.herokuapp.com";

export const ERROR='ERROR'
export const FLIP_TICKET='FLIP_TICKET'
//moderators
export const LIST_MODS='LIST_MODS'
export const ALTER_PRIVLIDGE='ALTER_PRIVLIDGE'

export const LOGIN_START    = "LOGIN_START";
export const LOGIN_SUCCESS  = "LOGIN_SUCCESS";
export const LOGIN_FAIL     = "LOGIN_FAIL";

export const REGISTER_START   = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL    = "REGISTER_FAIL";

export const removeTicket=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:DELETE_CARD,payload:e})
}

export const finishTicket=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:FLIP_TICKET,payload:{...e,done:!e.done}})
}

export const assign=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:ASSIGN,payload:e})
}

export const deAssign=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:ASSIGN,payload:e})
}

export const mods=e=>{
    return {type:LIST_MODS,payload:data.users}
}

export const getCard=e=>{
  return {type:GET_CARD,payload:e}
}

export const alterPrivlidge=e=>dispatch=>{
  dispatch({type:FETCHING})
  dispatch({type:ALTER_PRIVLIDGE,payload:e})
}

export const logout=e=>{
  return({type:LOGOUT})
}


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


export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post(`${baseURL}/api/auth/login`, credentials)
    .then(res => {
      console.log('SUCESS:',res);
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.token
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



export const SUBMIT_TICKET_START   = "SUBMIT_TICKET_START";
export const SUBMIT_TICKET_SUCCESS = "SUBMIT_TICKET_SUCCESS";
export const SUBMIT_TICKET_FAIL    = "SUBMIT_TICKET_FAIL";

export const submitTicket = regInfo => dispatch => {
  dispatch({ type: SUBMIT_TICKET_START });
  return axios.post(`${baseURL}/api/login`, regInfo)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
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