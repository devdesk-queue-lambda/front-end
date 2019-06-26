import {
  GET_TICKET_START,
  GET_TICKET_SUCCESS,
  GET_TICKET_FAIL,
  UPDATE_TICKET_START,
  UPDATE_TICKET_SUCCESS,
  UPDATE_TICKET_FAIL,
  RESET_UPDATE_TICKET
} from '../actions';

const initialState = {
  error           : false,
  errorInfo       : '',
  assigned        : null,
  date            : null,
  id              : 0,
  owner           : 1,
  ressolved       : false,
  title           : '',
  description     : '',
  tried           : '',
  type            : '',
  isUpdatingTicket: false,
  isGettingTicket : false,
  ticketUpdated   : false
}

export const updateticket = (state = initialState, action) => {
  switch(action.type) {
    case GET_TICKET_START:
      return {
        ...state,
        error          : false,
        isGettingTicket: true,
        ticketUpdated  : false
      }
    case GET_TICKET_SUCCESS:
      return {
        ...state,
        error          : false,
        errorInfo      : {},
        assigned       : action.payload.assigned,
        date           : action.payload.date,
        id             : action.payload.id,
        owner          : action.payload.owner,
        ressolved      : action.payload.ressolved,
        title          : action.payload.title,
        description    : action.payload.description,
        tried          : action.payload.tried,
        type           : action.payload.type,
        isGettingTicket: false,
        ticketUpdated  : false
      }
    case GET_TICKET_FAIL:
      return {
        ...state,
        error          : false,
        errorInfo      : action.payload,
        isGettingTicket: false,
        ticketUpdated  : false
      }
    case RESET_UPDATE_TICKET:
      return ({
        ...state,
        ticketUpdated: false
      })
    case UPDATE_TICKET_START:
      return {
        ...state,
        error             : false,
        isSubmittingTicket: true,
        ticketUpdated     : false
      }
    case UPDATE_TICKET_SUCCESS:
      return {
        ...state,
        error             : false,
        errorInfo         : {},
        assigned          : action.payload.assigned,
        date              : action.payload.date,
        id                : action.payload.id,
        owner             : action.payload.owner,
        ressolved         : action.payload.ressolved,
        title             : action.payload.title,
        description       : action.payload.description,
        tried             : action.payload.tried,
        type              : action.payload.type,
        isSubmittingTicket: false,
        ticketUpdated     : true
      }
    case UPDATE_TICKET_FAIL:
      return {
        ...state,
        error             : true,
        errorInfo         : action.payload,
        isSubmittingTicket: false,
        ticketUpdated     : false
      }
    default:
      return state;
  }
}
