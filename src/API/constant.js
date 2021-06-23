const dev = true;

export const API_URL = dev
  ? "http://192.168.1.9:5000"
  : "http://3.140.163.39:25749"; //127.0.0.1:

export const imageStatic = (imageUrlFromBack) => {
  return `${API_URL}/static/${imageUrlFromBack}`;
};

export const registerUrl = `${API_URL}/user/register`;
export const verifyUserByEmailUrl = `${API_URL}/user/verifyEmail`;
export const loginUrl = `${API_URL}/user/login`;
//USER
export const getUserUrl = (idUser) => {
  return `${API_URL}/user/${idUser}`;
};
export const getReviewUrl = (profileId) => {
  return `${API_URL}/user/getreview/${profileId}`;
};
export const getNotificationUrl = (userId) => {
  return `${API_URL}/user/getnotification/${userId}`;
};
export const checkUserEmailUrl = () => {
  return `${API_URL}/user/checkUserEmail`;
}
export const checkResetPasswordCode = () => {
  return `${API_URL}/user//checkResetCode`;
}
export const editNotificationUrl = `${API_URL}/user/editnotification`;
//PRODUCT
export const createProductUrl = `${API_URL}/product/createproduct`;
export const getProductUrl = `${API_URL}/product/getproduct`;
export const bookedProductUrl = `${API_URL}/product/bookedproduct`;
export const unBookProductUrl = `${API_URL}/product/unbookproduct`;
//CHAT
export const postMessageUrl = `${API_URL}/chat/postchat`;
export const getMessageUrl = (sender, reciever, product) => {
  return `${API_URL}/message/getchat/${sender}/${reciever}/${product}`;
};
export const getConversationUrl = (sender) => {
  return `${API_URL}/conversation/${sender}`;
};
export const getOneConversationUrl = (sender, reciever, product) => {
  return `${API_URL}/conversation/One/${sender}/${reciever}/${product}`;
};
export const deleteChatUrl = (sender, reciever) => {
  return `${API_URL}/chat/deletechat/${sender}/${reciever}`;
};
