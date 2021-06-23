import { GET_CATEGORIES_SUCCESS } from "../actions/CategoryAction";

  
  const initialState = {};
  
  export function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CATEGORIES_SUCCESS:
        return { ...state, categories: action.payload.categories };
      default:
        return state;
    }
  }
  