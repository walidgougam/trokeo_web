import axios from "axios";
import { API_URL } from "../API/constant";

export const getCategories = async (successCB, errorCB) => {
    await axios.get(`${API_URL}/categories`).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err)
    });
}