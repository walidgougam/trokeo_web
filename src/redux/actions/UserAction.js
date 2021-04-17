import axios from 'axios';
import {getUserUrl, loginUrl} from '../../API/constants';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUserAction = (userId) => {
  console.log(userId, 'userid');
  return (dispatch) => {
    return axios
      .get(getUserUrl(userId))
      .then((res) => {
        dispatch({type: GET_USER_SUCCESS, payload: res?.data?.user});
      })
      .catch((err) => {
        dispatch({type: GET_USER_ERROR, payload: err});
        console.log(err);
      });
  };
};
