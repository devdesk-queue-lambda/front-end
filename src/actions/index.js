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
export const LOGIN='LOGIN'
export const SUCCESS='SUCCESS'
export const NEW_USER='NEW_USER'
export const LOGOUT='LOGOUT'
export const ERROR='ERROR'
export const FLIP_TICKET='FLIP_TICKET'
//moderators
export const LIST_MODS='LIST_MODS'
export const ALTER_PRIVLIDGE='ALTER_PRIVLIDGE'


export const login=e=>dispatch=>{
    dispatch({type:LOGIN})
}

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

export const mods=e=>{
    return {type:LIST_MODS,payload:data.users.filter(user=>user.authType!=='user')}
}