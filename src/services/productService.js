import axios from "axios";
import { API_URL, bookedProductUrl, unBookProductUrl, getProductUrl } from "../API/constant";


export const bookAProduct = async (token, data, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: bookedProductUrl,
        data: data,
        headers: { Authorization: 'Bearer ' + token }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}
export const unBookAProduct = async (token, data, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: unBookProductUrl,
        data: data,
        headers: { Authorization: 'Bearer ' + token }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}
export const finishTransaction = async (token, reservationId, successCB, errorCB) => {
    axios({
        method: 'POST',
        url: `${API_URL}/product/finishtransaction`,
        data: { reservationId },
        headers: { Authorization: 'Bearer ' + token }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        errorCB(err.response)
    });
}

export const likeProduct = (token, userId, productId, likeState) => {
    axios({
        method: 'POST',
        url: `${API_URL}/product/handlelike`,
        data: { userId, productId, likeState },
        headers: { Authorization: 'Bearer ' + token }
    })
        .then((res) => {
            console.log(res, 'res handle like')
        })
        .catch((err) => {
            console.log(err, 'error on handle like api');
        });

}


export const followGoodsCategory = async (token, userId, categoryGoodsFollow) => {
    let result;
    axios({
        method: 'POST',
        url: `${API_URL}/user/editcategorygoodfollow`,
        data: { userId, categoryGoodsFollow },
        headers: { Authorization: 'Bearer ' + token }
    })
        .then((res) => {
            result = res;
        })
        .catch((err) => {
            console.log(err, 'error on follow good');
        });

    if (result)
    {
        return result;
    }
};

export const followServicesCategory = async (
    userId,
    categoryServicesFollow,
) => {
    axios({
        method: 'POST',
        url: `${API_URL}/user/editcategoryservicefollow`,
        data: { userId, categoryServicesFollow },
    })
        .then((res) => {
            console.log(res, "res follow service category")
        })
        .catch((err) => {
            console.log(err, 'error on follow service');
        });
};


export const favoriteProduct = (token, userProduct, successCB) => {
    axios.post(
        `${API_URL}/product/favorit`,
        {
            ids: userProduct
        },
        { headers: { Authorization: `Bearer ${token}` } }
    ).then((res) => {
        successCB(res)
    }).catch((err) => console.log("ERRRORR", err))
}


export const getProduct = (page, isOrganisation, successCB) => {
    axios({
        method: 'GET',
        url: `${getProductUrl}/${page}/${isOrganisation}`,
    })
        .then(res => {
            successCB(res)
        })
        .catch(err => console.log('error on getallproductapi', err))
}

export const followCategory = async (token, userId, categoryId, isUnfollow, successCB) => {
    console.log("click")
    await axios.post(`${API_URL}/user/followCategory`, {
        id: userId,
        categoryId,
        isUnfollow
    }, {
        headers: { Authorization: 'Bearer ' + token }
    }).then((res) => {
        successCB(res)
    }).catch((err) => {
        console.log("error", err)
    })

}