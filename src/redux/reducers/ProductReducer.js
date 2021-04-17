import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  SEARCH_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_LOADING,
  CREATE_PRODUCT_ERROR,
} from '../actions/ProductAction';

const initialState = {};

export function productReducer(state = initialState, action) {
  switch (action.type)
  {
    case GET_PRODUCT_LOADING:
      return action.payload;
    case GET_PRODUCT_SUCCESS:
      return action.payload;
    case GET_PRODUCT_ERROR:
      return action.payload;
    case CREATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function searchProductReducer(state = initialState, action) {
  switch (action.type)
  {
    case SEARCH_PRODUCT:
      if (action.payload !== undefined)
      {
        return action.payload;
      } else return {};
    default:
      return state;
  }
}
