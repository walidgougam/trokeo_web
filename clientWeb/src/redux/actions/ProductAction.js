import axios from 'axios';
import { getProductUrl } from '../../API/constants';

export const GET_PRODUCT_LOADING = 'GET_PRODUCT_LOADING';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_LOADING = 'CREATE_PRODUCT_LOADING';
export const CREATE_PRODUCT_ERROR = 'CREATE_PRODUC _ERROR';

export const getProductLoading = (data) => {
  return {
    type: GET_PRODUCT_LOADING,
    payload: data
  }
}

export const getProductAction = () => {
  let isLoading = true;
  return (dispatch) => {
    dispatch(getProductLoading(isLoading))
    return axios({
      method: 'GET',
      url: getProductUrl
    })
      .then((res) => {
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.product });
        isLoading = false
      })
      .catch((err) => {
        dispatch({ type: GET_PRODUCT_ERROR, payload: err });
        isLoading = false
      });
  };
};

export const searchProductAction = (res) => {
  console.log(res, 'res search product');
  return (dispatch) => {
    dispatch({ type: SEARCH_PRODUCT, payload: res });
  };
};

export const createProductAction = (
  title,
  description,
  conditionProduct,
  productPicture,
) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: { title, description, conditionProduct, productPicture },
    });
    // callback;
  };
};
