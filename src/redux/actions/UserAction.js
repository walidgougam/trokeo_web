import axios from 'axios';
import { getUserUrl, loginUrl } from '../../API/constant';

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';



// export const getUserAction = (userId) => {
//     return async (dispatch) => {
//         return axios({
//             method: 'GET',
//             url: getUserUrl(userId),
//             headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
//         })
//             .then((res) => {
//                 dispatch({ type: GET_USER_SUCCESS, payload: res.data.user });
//             })
//             .catch((err) => {
//                 dispatch({ type: GET_USER_ERROR, payload: res.data }); console.log(err)
//             });
//     };
// };

export const setUserAction = (data) => {
    return async (dispatch) => {
        dispatch({ type: GET_USER_SUCCESS, payload: data });
    };
};

