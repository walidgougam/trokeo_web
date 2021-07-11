import axios from 'axios';
import { API_URL } from '../../API/constant';

export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';

export const editProfileAction = (
  token,
  data,
) => {
  return (dispatch) => {


    return axios({
      method: 'POST',
      url: `${API_URL}/user/edit`,
      data: data,
      headers: { Authorization: 'Bearer ' + token }
    })
      .then((res) => {
        console.log("SUCCESSS", res)
        // dispatch({,
        //   type: EDIT_PROFILE_SUCCESS,
        //   payload: { res.data.profile },
        // });
      })
      .catch((err) => {
        console.log(err, 'error on getallproductapi');
      });
  };
};
