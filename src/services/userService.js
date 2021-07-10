import axios from "axios";
import {
   API_URL,
   loginUrl,
   registerUrl,
   verifyUserByEmailUrl,
   updateResetPasswordUrl,
   checkResetPasswordCodeUrl,
   checkUserEmailUrl,
} from "../API/constant.js";
import { createFormData } from "./serviceHelpers";

export const verifyUserByEmail = (email) => {
   return axios.post(verifyUserByEmailUrl, { email });
};
export const registerGoogleApi = async (
   email,
   firstName,
   lastName,
   userPicture,
   callback
) => {
   await axios({
      method: "POST",
      url: `${API_URL}/user/logingoogle`,
      data: { email, firstName, lastName, userPicture },
   })
      .then((res) => {
         localStorage.setItem("userId", res.data.userData._id);
         localStorage.setItem("userName", res.data.userData.firstName);
         callback();
      })
      .catch((err) => {
         console.log(err, "error on register");
      });
};

const LoginSuccess = (res, successCB) => {
   localStorage.setItem("jwt", res.data.token);
   localStorage.setItem("userId", res.data.user?.id);
   successCB(res);
};

export const userLogin = async (email, password, successCB, errorCB) => {
   await axios({
      method: "POST",
      url: loginUrl,
      data: { email, password },
   })
      .then((res) => {
         LoginSuccess(res, successCB);
      })
      .catch((err) => {
         errorCB(err.response);
      });
};
const headersConfig = {
   headers: {
      "content-type": "multipart/form-data",
   },
};
export const userRegister = async (
   userPicture,
   userData,
   successCB,
   errorCB
) => {
   console.log(userPicture, "userpicture on userregister")
   console.log(userData, "userdata on user register")
   await axios
      .post(registerUrl, createFormData(userPicture, userData), headersConfig)
      .then((res) => {
         console.log(res, "res success userRegister")
         return LoginSuccess(res, successCB);
      })
      .catch((err) => {
         console.log(err, "err  userRegister")
         errorCB(err);
      });
};
export const refreshUser = async (id, successCB, errorCB) => {
   await axios
      .post(`${API_URL}/user/refreshUser`, {
         id,
      })
      .then((res) => {
         return successCB(res.data.user);
      })
      .catch((err) => {
         errorCB(err);
      });
};

export const createReview = async (
   token,
   userId,
   recieverId,
   stars,
   review,
   callback
) => {
   await axios({
      method: "POST",
      url: `${API_URL}/user/addReview`,
      data: { reviewer: userId, reviewee: recieverId, stars, review },
      headers: { Authorization: "Bearer " + token },
   })
      .then((res) => {
         callback();
      })
      .catch((err) => {
         console.log(err, "error on create review api");
      });
};

export const editPassword = async (token, values, user) => {
   await axios
      .post(
         `${API_URL}/user/editPassword`,
         {
            id: user._id,
            ...values,
         },
         { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => console.log("SUCCESSS", res))
      .catch((err) => console.log("ERRRPPRR", err));
};

export const updateResetPassword = async (email, password, successCB) => {
   await axios({
      method: "POST",
      url: updateResetPasswordUrl(),
      data: { email: email, password: password },
   })
      .then((res) => {
         successCB();
      })
      .catch((err) => {
         console.log(err, "errerrerrerr");
      });
};

export const checkCodeResetPassword = (email, code, successCB, errorCB) => {
   axios({
      method: "POST",
      url: checkResetPasswordCodeUrl(),
      data: { email: email, code: code },
   })
      .then((res) => {
         successCB();
      })
      .catch((err) => {
         errorCB();
      });
};

export const emailResetPassword = (email, successCB, errorCB) => {
   axios({
      method: "POST",
      url: checkUserEmailUrl(),
      data: { email: email },
   })
      .then((res) => {
         successCB();
      })
      .catch((err) => {
         errorCB(err);
      });
};
