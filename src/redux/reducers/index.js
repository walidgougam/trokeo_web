import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import {
  productReducer,
  createProductCategoryReducer,
  searchProductReducer,
} from "./ProductReducer";
import uploadPictureReducer from "./UploadReducer";
import { userReducer } from "./UserReducer";
import { chatReducer } from "./ChatReducer";
import { categoryReducer } from "./CategoryReducer";

// export default combineReducers({
//   chatReducer,
//   authReducer,
//   productReducer,
//   createProductCategoryReducer,
//   searchProductReducer,
//   uploadPictureReducer,
//   userReducer,
//   categoryReducer
// });

export default function createReducer() {
  const rootReducer = combineReducers({
    chatReducer,
    authReducer,
    productReducer,
    createProductCategoryReducer,
    searchProductReducer,
    uploadPictureReducer,
    userReducer,
    categoryReducer,
  });

  return rootReducer;
}
