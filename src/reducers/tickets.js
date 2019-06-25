import {ERROR, GET_CARDS, GET_CARD, EDIT_CARD, FETCHING, DELETE_CARD, FLIP_TICKET, ASSIGN, LIST_MODS, ALTER_PRIVLIDGE } from '../actions'
import data from '../dummyData'

const init={
    tickets:data.tickets,
    users:[],
    viewed:null,
    editing:null,

    fetching:false,
    error:null
}

export default (state=init,action)=>{
    switch(action.type){
        //logins
        case ERROR:
            return {
                ...state,
                login:false,
                error:action.payload
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
                viewed:state.tickets.filter(ticket=>ticket.id===Number(action.payload))[0],
                editing:null
            }
        case EDIT_CARD:
            return{
                ...state,
                fetching:false,
                editing:action.payload
            }
        case FETCHING:
            return {
                ...state,
                fetching:true
            }
        case DELETE_CARD:
            return {
                ...state,
                tickets:state.tickets.filter(i=>i.id!==action.payload)
            }
        case FLIP_TICKET:
            return {
                ...state,
                tickets:state.tickets.map(ticket=>ticket.id===action.payload.id?action.payload:ticket)
            }
        case ASSIGN:
            return{
                ...state,
                tickets:state.tickets.map(ticket=>ticket.id===action.payload.id?action.payload:ticket)
            }
        //admin
        case LIST_MODS:
            let current=action.payload.filter(user=>state.id===user.id)[0]
            return{
                ...state,
                users:action.payload,
                username:current.username,
                authenticationType:current.authenticationType
            }
        case ALTER_PRIVLIDGE:
            return{
                ...state,
                users:state.users.map(user=>user.id===action.payload.id?action.payload:user)
            }
        default:
            return state
    }
}