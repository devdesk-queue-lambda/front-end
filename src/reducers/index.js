import { LOGIN, SUCCESS,ERROR, GET_CARDS, GET_CARD, EDIT_CARD, LOGOUT } from '../actions'
import data from '../dummyData'

const init={
    tickets:data.tickets,
    viewed:null,
    editing:null,

    username:'Brandon Porter',
    authType:'User',
    _id:'2',
    
    login:false,
    fetching:false,
    error:null
}

export default (state=init,action)=>{
    switch(action.type){
        //logins
        case LOGIN:
            return {...state,login:true,error:null}
        case SUCCESS:
            return {
                ...state,
                login:false,
                username:action.payload.username,
                authType:action.payload.authType,
                _id:action.payload._id
            }
        case ERROR:
            return {
                ...state,
                login:false,
                error:action.payload
            }
        case LOGOUT:
            return {
                ...state,
                username:'',
                authType:'',
                login:false,
                viewed:null,
                editing:null,
                _id:action.payload._id
            }
        //card
        case GET_CARDS:
            return {
                ...state,
                fetching:false,
                tickets:action.payload,
                editing:null
            }
        case GET_CARD:
            return {
                ...state,
                fetching:false,
                viewed:action.payload,
                editing:null
            }
        case EDIT_CARD:
            return{
                ...state,
                fetching:false,
                editing:action.payload
            }
        default:
            return state
    }
}