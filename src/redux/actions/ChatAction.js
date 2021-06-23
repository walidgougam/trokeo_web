import axios from 'axios';
import { getMessageUrl } from '../../API/constant';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';

export const SEND_MESSAGE = 'SEND_MESSAGE';


// export const getMessageFromBdd = async (receiverId = 0, productId = 0) => {
//     /** REDUX */
//     const userStore = useSelector((state) => state.authReducer);

//     let adaptedMessages = null
//     try
//     {
//         const res = await axios({
//             method: 'GET',
//             url: getMessageUrl(userStore.user._id, receiverId, productId),
//             headers: { Authorization: 'Bearer ' + userStore.token }
//         });
//         // console.log('messages:=>messages', res)
//         adaptedMessages = res && res.data.message.map(item => {
//             return {
//                 text: item.text,
//                 user: {
//                     _id: receiverId !== item.sender ? item.sender : item.receiver,
//                 },
//                 _id: item._id,
//                 createdAt: item.createdAt
//             }
//         })
//     }
//     catch (err)
//     {
//         console.log(err, 'err on post chat');
//         return null
//     }
//     // console.log('messages:=>messages', adaptedMessages)
//     return adaptedMessages
// }
