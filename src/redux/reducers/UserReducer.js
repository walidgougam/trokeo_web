import { GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_ERROR } from '../actions/UserAction';

const initialState = {};

export function userReducer(state = initialState, action) {
  switch (action.type)
  {
    case GET_USER_LOADING:
      return { ...state, isLoading: action.payload };
    case GET_USER_SUCCESS:
      return action.payload;
    case GET_USER_ERROR:
      return action.payload;
    default:
      return state;
  }
}
