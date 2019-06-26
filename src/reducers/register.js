import { 
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions';

const initialState = {
  error: false,
  errorInfo: {},
  regMsg: "",
  isRegistering: false
}

export const register = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: false,
        isRegistering: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: false,
        regMsg: action.payload,
        isRegistering: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        error: true,
        errorInfo: action.payload,
        isRegistering: false,
      }
    default:
      return state;
  }
}