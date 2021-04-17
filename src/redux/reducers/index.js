import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import {productReducer, searchProductReducer} from './ProductReducer';
import {userReducer} from './UserReducer';

export default combineReducers({
  authReducer,
  productReducer,
  searchProductReducer,
  userReducer,
});
