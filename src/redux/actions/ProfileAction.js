import axios from 'axios';
import { API_URL } from '../../API/constant';

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';

export const editProfileAction = (
  userId,
  firstName,
  lastName,
  about,
  email,
  phoneNumber,
  female,
  userPicture
) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: `${API_URL}/user/edit`,
      data: {
        userId,
        firstName,
        lastName,
        about,
        email,
        phoneNumber,
        female,
        userPicture
      },
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwt') }
    })
      .then((res) => {
        // dispatch({
        //   type: EDIT_PROFILE_SUCCESS,
        //   payload: { res.data.profile },
        // });
      })
      .catch((err) => {
        console.log(err, 'error on getallproductapi');
      });
  };
};
