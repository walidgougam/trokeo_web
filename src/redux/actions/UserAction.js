import axios from 'axios';
import { getUserUrl, loginUrl } from '../../API/constants';

export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

const getUserLoading = (data) => {
  return {
    type: GET_USER_LOADING,
    payload: data
  }
}

export const getUserAction = (userId) => {
  let isLoading = true;
  return (dispatch) => {
    dispatch(getUserLoading(isLoading))
    return axios
      .get(getUserUrl(userId))
      .then((res) => {
        dispatch({ type: GET_USER_SUCCESS, payload: res?.data?.user });
        isLoading = false
      })
      .catch((err) => {
        dispatch({ type: GET_USER_ERROR, payload: err });
        isLoading = false
        console.log(err);
      });
  };
};

