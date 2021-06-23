import axios from "axios"
import { API_URL, loginUrl, registerUrl, verifyUserByEmailUrl } from '../API/constant'
import { createFormData } from "./serviceHelpers";

export const verifyUserByEmail = (email) => {
   return axios.post(verifyUserByEmailUrl, { email })
}
export const registerGoogleApi = async (
   email,
   firstName,
   lastName,
   userPicture,
   callback
) => {
   await axios({
      method: 'POST',
      url: `${API_URL}/user/logingoogle`,
      data: { email, firstName, lastName, userPicture },
   })
      .then((res) => {
         localStorage.setItem('userId', res.data.userData._id);
         localStorage.setItem('userName', res.data.userData.firstName);
         callback();
      })
      .catch((err) => {
         console.log(err, 'error on register');
      });
};

const LoginSuccess = (res, successCB) => {
   localStorage.setItem('jwt', res.data.token);

   localStorage.setItem('userId', res.data.user?.id);
   successCB(res)
}
export const userLogin = async (email, password, successCB, errorCB) => {
   await axios({
      method: 'POST',
      url: loginUrl,
      data: { email, password }
   })
      .then((res) => {
         LoginSuccess(res, successCB)
      })
      .catch((err) => {
         console.log("errrr", err)
         errorCB(err.response)
      });
}
const headersConfig = {
   headers: {
      'content-type': 'multipart/form-data'
   }
}
export const userRegister = async (userPicture, userData, successCB, errorCB) => {
   await axios.post(registerUrl, createFormData(userPicture, userData), headersConfig
   ).then((res) => {
      return LoginSuccess(res, successCB)
   }).catch((err) => {
      errorCB(err)
   });
}
export const refreshUser = async (id, successCB, errorCB) => {
   await axios.post(`${API_URL}/user/refreshUser`, {
      id
   }
   ).then((res) => {
      console.log("USERREFRESH", res)
      return successCB(res.data.user)
   }).catch((err) => {
      errorCB(err)
   });
}