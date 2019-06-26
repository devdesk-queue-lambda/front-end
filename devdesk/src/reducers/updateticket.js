import {
  GET_TICKET_START,
  GET_TICKET_SUCCESS,
  GET_TICKET_FAIL,
  UPDATE_TICKET_START,
  UPDATE_TICKET_SUCCESS,
  UPDATE_TICKET_FAIL
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
  isUpdatingTicket: false
}

export const getticket = (state = initialState, action) => {
  switch(action.type) {
    case GET_TICKET_START:
      return {
        ...state,
        error: "",
        isSubmittingTicket: true
      }
    case GET_TICKET_SUCCESS:
      return {
        ...state,
        error             : false,
        errorInfo         : {},
        assigned          : action.payload.assigned,
        id                : action.payload.id,
        owner             : action.payload.owner,
        ressolved         : action.payload.ressolved,
        title             : action.payload.title,
        description       : action.payload.description,
        tried             : action.payload.tried,
        type              : action.payload.type,
        date              : action.payload.date,
        isSubmittingTicket: false
      }
    case GET_TICKET_FAIL:
      return {
        ...state,
        error: "",
        isSubmittingTicket: false,
      }
    default:
      return state;
  }
}

export const updateticket = (state = initialState, action) => {
  switch(action.type) {
    case GET_TICKET_START:
    case UPDATE_TICKET_START:
      return {
        ...state,
        error: "",
        isSubmittingTicket: true
      }
    case GET_TICKET_SUCCESS:
    case UPDATE_TICKET_SUCCESS:
      return {
        ...state,
        error           : false,
        errorInfo       : {},
        assigned        : action.payload.assigned,
        date            : action.payload.date,
        id              : action.payload.id,
        owner           : action.payload.owner,
        ressolved       : action.payload.ressolved,
        title           : action.payload.title,
        description     : action.payload.description,
        tried           : action.payload.tried,
        type            : action.payload.type,
        isSubmittingTicket: false
      }
    case GET_TICKET_FAIL:
    case UPDATE_TICKET_FAIL:
      return {
        ...state,
        error: "",
        isSubmittingTicket: false,
      }
    default:
      return state;
  }
}
