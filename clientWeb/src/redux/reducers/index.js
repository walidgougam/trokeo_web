import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import { productReducer, searchProductReducer } from './ProductReducer';

export default combineReducers({
  authReducer,
  productReducer,
  searchProductReducer,
});
