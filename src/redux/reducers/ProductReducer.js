import {
  GET_PRODUCT_SUCCESS,
  GET_SPECIFIC_PRODUCT_SUCCESS,
  HANDLE_LIKES,
  SEARCH_PRODUCT,
  GET_PRODUCT_PENDING,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCT_REJECTED,
  GET_PRODUCT_FULFILLED,
  CREATE_PRODUCT_CATEGORY_SUCCESS,
  SET_LOCATION
} from '../actions/ProductAction';

const initialState = {
  product: [],
  location: {}
}

export function productReducer(state = initialState, action) {
  switch (action.type)
  {
    case GET_PRODUCT_SUCCESS:
      if (action.payload !== undefined)
      {
        return {
          product: action.payload
        }
      } else return [];
    case GET_SPECIFIC_PRODUCT_SUCCESS:
      if (action.payload !== undefined)
      {
        return {
          ...state,
          product: [...state.product, action.payload.product],
        }
      } else return [];
    case CREATE_PRODUCT_SUCCESS:
      if (action.payload !== undefined)
      {
        return {
          product: action.payload,
        }
      } else return [];
    case GET_PRODUCT_PENDING:
      return {
        ...state,
        product: action.payload.data
      };
    case GET_PRODUCT_REJECTED:
      return {
        ...state,
        product: action.payload.data
      };
    case GET_PRODUCT_FULFILLED:
      return {
        ...state,
        product: action.payload.data
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload
      };
    default:
      return state;
  }
}

export function createProductCategoryReducer(state = initialState, action) {
  switch (action.type)
  {
    case CREATE_PRODUCT_CATEGORY_SUCCESS:
      if (action.payload !== undefined)
      {
        return action.payload.category
      } else return {}
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
      } else return [];
    default:
      return state;
  }
}
