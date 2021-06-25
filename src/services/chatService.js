import axios from 'axios';
import { getConversationUrl, getOneConversationUrl } from '../API/constant';

const adaptedMessages = (conversation) => {
    return {
        ...conversation,
        messages: conversation.messages.map(item => {
            // console.log('ITEM', item.user)
            if (item.user)
            {
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
export const GetConversations = async () => {
    const userid = await localStorage.getItem('userId')
    try
    {
        const res = await axios({
            method: 'GET',
            url: getConversationUrl(userid),
            headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
        });

        return res && res.data.map(adaptedMessages)
    }
    catch (err)
    {
        console.log(err, 'err on get one conversation');
        return null
    }
}

// get conversation one
export const getOneConversation = async (product) => {
    const userid = await localStorage.getItem('userId')
    try
    {
        const res = await axios({
            method: 'GET',
            url: getOneConversationUrl(userid, product.user._id, product._id),
            headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
        });
        // console.log('RES RES RES -----> ', res)
        return res && res.data.map(adaptedMessages)
    }
    catch (err)
    {
        console.log(err, 'err on get conversation');
        return null
    }
    // console.log('Conversations :=> ', data)
}
