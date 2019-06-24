import { 
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions';

const initialState = {
  error: "",
  username: '',
  authorizationType: '',
  isLoggingIn: false,
  isLoggedIn: false,
}

export const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        isLoggingIn: false,
        isLoggedIn: true
      }
    case LOGIN_FAIL:
      return {
        ...state,
        error: 'Could not login',
        isLoggingIn: false,
      }
    default:
      return state;
  }
}