export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const USER_DISCONNECTED = 'USER_DISCONNECTED'
export const IS_GUEST_SUCCESS = 'IS_GUEST_SUCCESS'
export const USER_REFRESH = 'USER_REFRESH'

export const REGISTER = (type, result) => {
  if (type === 'success')
  {
    return (dispatch) => {
      dispatch({ type: USER_REGISTER_SUCCESS, payload: result })
    }
  } else
  {
    return (dispatch) => {
      dispatch({ type: REGISTER_ERROR, payload: result })
    }
  }
}

export const isGuestAction = (result) => {
  return (dispatch) => {
    dispatch({ type: IS_GUEST_SUCCESS, payload: result })
  }
}

export const loginSuccessAction = (data) => {
  console.log(data, "data login")
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  }
}
export const registerSuccessAction = (data) => {
  console.log('DATA register success', data)
  return async (dispatch) => {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
  }
}

export const userDiconnectedAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_DISCONNECTED, payload: data })
  }
}
export const userRefreshAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_REFRESH, payload: data })
  }
}
