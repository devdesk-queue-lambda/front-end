import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions';

const initialState = {
  error: false,
  errorInfo: {},
  userID: '',
  isLoggingIn: false
}

export const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: false,
        errorInfo: {},
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        errorInfo: {},
        userID: action.payload.id,
        authType: action.payload.authType,
        isLoggingIn: false
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: true,
        errorInfo: action.payload,
        isLoggingIn: false
      }
    default:
      return state;
  }
}