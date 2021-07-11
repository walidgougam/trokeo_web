import axios from 'axios';
import { API_URL, getConversationUrl, getOneConversationUrl, deleteChatUrl } from '../API/constant';

const adaptedMessages = (conversation) => {
    return {
        ...conversation,
        messages: conversation.messages.map(item => {
            if (item.user) {
                return {
                    text: item.text,
                    user: {
                        _id: item.user._id,
                    },
                    _id: item._id,
                    createdAt: item.createdAt
                }
            }
        })
    }
}
// get conversation List
export const GetConversations = async (userid, userToken) => {
    try {
        const res = await axios({
            method: 'GET',
            url: getConversationUrl(userid),
            headers: { Authorization: 'Bearer ' + userToken }
        });

        console.log("res")
        return res && res.data.map(adaptedMessages)
    }
    catch (err) {
        console.log("rerr", err.response)
        return null
    }
}

// get conversation one
export const getOneConversation = async (product, userId, token) => {
    console.log("producttt", product, userId)
    try {
        const res = await axios({
            method: 'GET',
            url: getOneConversationUrl(userId, product.user._id, product._id),
            headers: { Authorization: 'Bearer ' + token }
        });
        return res && res.data.map(adaptedMessages)
    }
    catch (err) {
        console.log("ERRRR", err)
        return null
    }
    // console.log('Conversations :=> ', data)
}


export const deleteChat = async (sender, recieverId, token, successCB) => {
    await axios({
        method: 'DELETE',
        url: deleteChatUrl(sender, recieverId),
        headers: { Authorization: 'Bearer ' + token }
    })
        .then((res) => {
            successCB()
        })
        .catch((err) => {
            console.log(err, '-----error delete message-----');
        });
}


export const deleteConversation = async (token, msgForDelete, successCB) => {
    await axios({
        method: 'POST',
        url: `${API_URL}/conversation/delete`,
        data: { id: msgForDelete },
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((res) => {
            successCB()
        })
        .catch((err) => {
            console.log(err.response, 'error on register');
        });
}