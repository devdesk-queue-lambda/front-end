import { 
  GET_TICKET_START,
  GET_TICKET_SUCCESS,
  GET_TICKET_FAIL
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

export const updateticket = (state = initialState, action) => {
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
        error           : false,
        errorInfo       : {},
        assigned        : action.payload.assigned,
        date            : action.paylost.date,
        id              : action.paylost.id,
        owner           : action.paylost.owner,
        ressolved       : action.paylost.ressolved,
        title           : action.paylost.title,
        description     : action.paylost.description,
        tried           : action.paylost.tried,
        type            : action.paylost.type,
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
