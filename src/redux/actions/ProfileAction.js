import axios from 'axios';

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';

export const editProfileAction = (
  picture,
  firstName,
  lastName,
  about,
  email,
  phoneNumber,
  female,
) => {
  return (dispatch) => {
    dispatch({
      type: 'EDIT_PROFILE_SUCCESS',
      payload: {
        picture,
        firstName,
        lastName,
        about,
        email,
        phoneNumber,
        female,
      },
    });
  };
};
