export const EDIT_CARD='EDIT_CARD'
export const DELETE_CARD='DELETE_CARD'
export const ADD_CARD='ADD_CARD'
export const GET_CARD='GET_CARD'
export const GET_CARDS='GET_CARDS'
//logins
export const LOGIN='LOGIN'
export const SUCCESS='SUCCESS'
export const NEW_USER='NEW_USER'
export const LOGOUT='LOGOUT'
export const ERROR='ERROR'

export const login=e=>dispatch=>{
    dispatch({type:LOGIN})
}