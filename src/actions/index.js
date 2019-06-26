import axios from 'axios'
import data from '../dummyData'
import { axiosWithAuth } from '../utilities/axiosWithAuth';

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
export const CHANGE_SORT="CHANGE_SORT"
export const FULL_LOAD='FULL_LOAD'

export const removeTicket=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:DELETE_CARD,payload:e})
}

export const finishTicket=e=>dispatch=>{
    dispatch({type:FETCHING})
    let axios = axiosWithAuth()
    let res=axios.put(`${baseURL}/api/tickets/${e.id}`,{...e,ressolved:!e.ressolved})
    res.then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log(err.response.data);
      dispatch({type:LOGIN_FAIL,payload:err.response.data.message})
    })
}

export const assign=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:ASSIGN,payload:e})
}

export const deAssign=e=>dispatch=>{
    dispatch({type:FETCHING})
    dispatch({type:ASSIGN,payload:e})
}

export const mods=e=>dispatch=>{
    dispatch({type:FETCHING})
    let axios=axiosWithAuth()
    let res=axios.get(`${baseURL}/api/users`)
    res.then(data=>{
      dispatch({type:LIST_MODS,payload:data.data})
    }).catch(err=>{
      dispatch({type:LOGIN_FAIL,payload:err.response.data.message})
    })
    // return {type:LIST_MODS,payload:res.data}
}

export const getCard=e=>{
  return {type:GET_CARD,payload:e}
}

export const alterPrivlidge=e=>dispatch=>{
  dispatch({type:FETCHING})
  let axios=axiosWithAuth()
  console.log(`${baseURL}/api/users/${e.id}`);
  let req=axios.put(`${baseURL}/api/users/${e.id}`,{authType:e.authType})
  req.then(data=>{
    dispatch({type:ALTER_PRIVLIDGE,payload:e})
  }).catch(err=>{
    dispatch({type:LOGIN_FAIL,payload:err.response.data.message})
  })
  // dispatch({type:ALTER_PRIVLIDGE,payload:e})
}

export const logout=e=>{
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  return({type:LOGOUT})
}

export const sortChange=e=>{
  return({type:CHANGE_SORT,payload:e})
}

export const getCards=e=>dispatch=>{
  dispatch({type:FETCHING})
  let axios=axiosWithAuth()
    let res=axios.get(`${baseURL}/api/tickets`)
    res.then(data=>{
      console.log(data.data);
      dispatch({
        type:GET_CARDS,
        payload:data.data
      })
    }).catch(err=>{
      dispatch({type:LOGIN_FAIL,payload:err.response.data.message})
    })
}

export const load=e=>dispatch=>{
  dispatch({type:FETCHING})
  let axios=axiosWithAuth()
  let res=axios.get(`${baseURL}/api/tickets`)
  .then(back=>{
    let temp=back.data
    res=axios.get(`${baseURL}/api/users`)
    .then(back=>{
      dispatch({type:FULL_LOAD,users:back.data,tickets:temp})
    })
  }).catch(err=>{
    dispatch({type:ERROR,payload:err.response.data.message})
  })
}

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
      localStorage.setItem('userId',res.data.id)
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
      dispatch({
        type: REGISTER_SUCCESS
      });
      login({...regInfo})
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