import axios from 'axios';
import {getConversationUrl, getMessageUrl} from '../../API/constants';

export const MESSAGE_LOADING = 'CHAT_LOADING';
export const MESSAGE_SUCCESS = 'CHAT_SUCCESS';
export const MESSAGE_ERROR = 'CHAT_ERROR';
export const CONVERSATION_LOADING = 'CONVERSATION_LOADING';
export const CONVERSATION_SUCCESS = 'CONVERSATION_SUCCESS';
export const CONVERSATION_ERROR = 'CONVERSATION_ERROR';

const getConversationLoading = (data) => {
  return {
    type: CONVERSATION_LOADING,
    payload: data,
  };
};

export const getMessageAction = (currentChatId) => {
  let isLoading = true;
  return (dispatch) => {
    return axios({
      method: 'GET',
      url: getMessageUrl(currentChatId),
      headers: {Authorization: 'Bearer ' + localStorage.getItem('jwt')},
    })
      .then((res) => {
        console.log(res, 'res de action palour ');
        // dispatch({ type: CHAT_SUCCESS, payload: res.data.product });
        // isLoading = false
      })
      .catch((err) => {
        // dispatch({ type: CHAT_ERROR, payload: err });
        // isLoading = false
      });
  };
};

export const getConversationAction = (userId) => {
  let isLoading = true;
  return (dispatch) => {
    dispatch(getConversationLoading(isLoading));
    return axios({
      method: 'GET',
      url: getConversationUrl(userId),
    })
      .then((res) => {
        dispatch({type: CONVERSATION_SUCCESS, payload: res.data});
        isLoading = false;
      })
      .catch((err) => {
        dispatch({type: CONVERSATION_ERROR, payload: err});
        isLoading = false;
      });
  };
};
