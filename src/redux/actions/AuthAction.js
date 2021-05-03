export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const registerAction = (type, result) => {
  if (type === 'success')
  {
    return (dispatch) => {
      dispatch({ type: REGISTER_SUCCESS, payload: result });
    };
  } else
  {
    return (dispatch) => {
      dispatch({ type: REGISTER_ERROR, payload: result });
    };
  }
};
