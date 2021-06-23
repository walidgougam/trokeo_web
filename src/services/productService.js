import axios from "axios";
import { API_URL, bookedProductUrl, unBookProductUrl } from "../api/constant";

export const bookAProduct = async (data, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: bookedProductUrl,
        data: data,
        headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}
export const unBookAProduct = async (data, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: unBookProductUrl,
        data: data,
        headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}
export const finishTransaction = async (reservationId, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: `${API_URL}/product/finishtransaction`,
        data: { reservationId },
        headers: { Authorization: 'Bearer ' + await localStorage.getItem('jwt') }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}