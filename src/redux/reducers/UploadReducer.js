import { UPLOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ERROR } from '../actions/UploadFile';

const initialState = {};

export default function uploadPictureReducer(state = initialState, action) {
  switch (action.type)
  {
    case UPLOAD_IMAGE_SUCCESS:
      return action.payload;
    case UPLOAD_IMAGE_ERROR:
      return action.payload;
    default:
      return state;
  }
}
