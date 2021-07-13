const dev = false;

export const API_URL = dev
  ? "http://192.168.1.46:5000"
  : "https://test-api.trokeo.com"

export const imageStatic = (imageUrlFromBack, tmp = '') => {
  const path = `${API_URL}/static/${tmp}${imageUrlFromBack}`;
  console.log("PATH imege", imageUrlFromBack, path)
  return path
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
};
export const checkResetPasswordCodeUrl = () => {
  return `${API_URL}/user/checkResetCode`;
};
export const updateResetPasswordUrl = () => {
  return `${API_URL}/user/resetPwd`;
};
export const editNotificationUrl = `${API_URL}/user/editNotificatoinConfig`;
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
