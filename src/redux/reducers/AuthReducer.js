import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  IS_GUEST_SUCCESS,
  USER_DISCONNECTED,
  USER_REFRESH
} from '../actions/AuthAction'

import { REHYDRATE } from 'redux-persist/lib/constants';

const initialState = {
  isGuest: false,
  isConnected: false,
  isLoading: true
}

export default function authReducer(state = initialState, action) {
  switch (action.type)
  {
    case REHYDRATE: {
      console.log(action.payload, "action.payload rehydrate")
      if (action.payload && action.payload.authReducer)
      {
        return {
          ...state,
          user: action.payload.authReducer.user,
          token: action.payload.authReducer.token,
          isConnected: action.payload.authReducer.isConnected
        };
      }
      return { ...state };
    }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isConnected: true
      }
    case USER_REFRESH:
      return {
        ...state,
        user: action.payload,
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isConnected: true
      }
    case USER_DISCONNECTED:
      return {
        ...state,
        user: null,
        token: null,
        isGuest: false,
        isConnected: false
      }
    case IS_GUEST_SUCCESS:
      return { ...state, isGuest: action.payload }
    default:
      return state
  }
}
