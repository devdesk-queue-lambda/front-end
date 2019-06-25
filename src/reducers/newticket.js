import { 
  SUBMIT_TICKET_START,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAIL
} from '../actions';

const initialState = {
  error: "",
  username: '',
  isSubmittingTicket: false
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
        isSubmittingTicket: false
      }
    case SUBMIT_TICKET_FAIL:
      return {
        ...state,
        error: "",
        isSubmittingTicket: false,
      }
    default:
      return state;
  }
}
