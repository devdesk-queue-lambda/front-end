import { 
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions';

const initialState = {
  error: "",
  username: '',
  authorizationType: '',
  isRegistering: false
}

export const register = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: "",
        isRegistering: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        isRegistering: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        error: 'Could not login',
        isRegistering: false,
      }
    default:
      return state;
  }
}