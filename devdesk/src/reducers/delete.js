import { 
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAIL
} from '../actions';

const initialState = {
  error: false,
  errorInfo: {},
  isDeleteing: false
}

export const deleteticket = (state = initialState, action) => {
  switch(action.type) {
    case DELETE_START:
      return {
        ...state,
        error: false,
        errorInfo: {},
        isDeleteing: true
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        error: false,
        errorInfo: {},
        isDeleteing: false
      }
    case DELETE_FAIL:
      return {
        ...state,
        error: true,
        errorInfo: action.payload,
        isDeleteing: false
      }
    default:
      return state;
  }
}