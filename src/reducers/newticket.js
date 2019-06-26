import { 
  SUBMIT_TICKET_START,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAIL,
  CLEAR_NEW_TICKET,
} from '../actions';

const initialState = {
  error: "",
  isSubmittingTicket: false,
  newTicket:false
}

export const newTicket = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_TICKET_START:
      return {
        ...state,
        error: "",
        isSubmittingTicket: true
      }
    case SUBMIT_TICKET_SUCCESS:
      return {
        ...state,
        error: "",
        isSubmittingTicket: false,
        newTicket:true
      }
    case SUBMIT_TICKET_FAIL:
      return {
        ...state,
        error: "",
        isSubmittingTicket: false,
      }
    case CLEAR_NEW_TICKET:
      return{
        ...state,
        newTicket:false
      }
    default:
      return state;
  }
}
