import axios from 'axios';
import { getProductUrl } from '../../API/constant';

export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_CATEGORY_SUCCESS = 'CREATE_PRODUCT_CATEGORY_SUCCESS'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const GET_PRODUCT_PENDING = 'GET_PRODUCT_PENDING';
export const GET_PRODUCT_REJECTED = 'GET_PRODUCT_REJECTED';
export const GET_PRODUCT_FULFILLED = 'GET_PRODUCT_FULFILLED';
export const GET_SPECIFIC_PRODUCT_SUCCESS = 'GET_SPECIFIC_PRODUCT_SUCCESS'
export const HANDLE_LIKES = 'HANDLE_LIKES'
export const SET_LOCATION = 'SET_LOCATION'

export const getProductAction = (page, isOrganisation, successCB) => {
  return async (dispatch) => {
    return axios({
      method: 'GET',
      url: `${getProductUrl}/${page}/${isOrganisation}/web`,
    })
      .then(async res => {
        res && dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.product });
        successCB()
        console.log(await localStorage.getItem('jwt'), "------token------")
      })
      .catch(err => console.log(err, 'error on getallproductapi'))
  }
}

export const getSpecificProductAction = (res) => {
  console.log(res, 'res action')
  return (dispatch) => {
    dispatch({
      type: GET_SPECIFIC_PRODUCT_SUCCESS,
      payload: res,
    });
  };
}

export const createProductAction = (
  res
) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: res,
    });
  };
};

export const createProductCategoryAction = (
  res
) => {
  console.log(res, 'res de walidou')
  return (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_CATEGORY_SUCCESS,
      payload: res,
    });
  };
};

export const searchProductAction = (res) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_PRODUCT, payload: res });
  };
};


export const setLocationAction = (res) => {
  console.log('action location', res)
  return (dispatch) => {
    dispatch({ type: SET_LOCATION, payload: res });
  };
}

