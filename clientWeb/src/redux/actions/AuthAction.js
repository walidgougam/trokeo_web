import axios from 'axios';
import { loginUrl } from '../../API/constants';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const loginAction = (email, password, callback) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: loginUrl,
      data: { email, password },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('userId', res.data.data._id);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        callback();
      })
      .catch((err) => {
        console.log(err, 'err on login');
        dispatch({ type: LOGIN_ERROR, payload: err });
      });
  };
};

export const REGISTER = (type, result) => {
  if (type === "success")
  {
    return (dispatch) => {
      dispatch({ type: REGISTER_SUCCESS, payload: result });
    }
  } else
  {
    return (dispatch) => {
      dispatch({ type: REGISTER_ERROR, payload: result });
    }
  }
};
