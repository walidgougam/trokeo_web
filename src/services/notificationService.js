import axios from "axios";
import { API_URL, editNotificationUrl } from "../API/constant";

export const editNotification = async (token, user, config, configValue, successCB) => {
    axios({
        method: 'POST',
        url: editNotificationUrl,
        data: {
            id: user._id,
            config,
            configValue
        },
        headers: { Authorization: 'Bearer ' + token }
    })
        .then((res) => {
            successCB(res)
        })
        .catch((err) => {
            console.log(err, 'error on follow good');
        });
};