import { EDIT_PROFILE_SUCCESS } from '../actions/ProductAction';

const initialState = {};

export function profileReducer(state = initialState, action) {
  switch (action.type)
  {
    case EDIT_PROFILE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
