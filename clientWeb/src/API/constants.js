const dev =true;

export const API_URL = dev
  ? 'http://localhost:5000' 
  : 'http://3.140.163.39:25749';

  export const imageStatic = (imageUrlFromBack) => {
    return `${API_URL}/static/${imageUrlFromBack}`
  }




export const registerUrl = `${API_URL}/user/register`
export const loginUrl = `${API_URL}/user/login`
//USER
export const getUserUrl = (idUser) => {
  return `${API_URL}/user/${idUser}`
}
export const getReviewUrl = (profileId) => {
  return `${API_URL}/user/getreview/${profileId}` 
}
export const getNotificationUrl = (userId) => {
  return `${API_URL}/user/getnotification/${userId}` 
}
export const editNotificationUrl = `${API_URL}/user/editnotification`
//PRODUCT
export const createProductUrl = `${API_URL}/product/createproduct`
export const getProductUrl = `${API_URL}/product/getproduct`
export const bookedProductUrl=`${API_URL}/product/bookedproduct`
//CHAT
export const postMessageUrl = `${API_URL}/chat/postchat`
export const getMessageUrl = (senderId,recieverId) => {
 return `${API_URL}/chat/getChat/${senderId}/${recieverId}` 
}
export const deleteChatUrl = (sender,reciever) => {
  return `${API_URL}/chat/deletechat/${sender}/${reciever}`
}