export const createFormData = (photo, body) => {
    const data = new FormData();
    console.log(photo, "photo register createformdata")

    data.append('photo',
        photo
    );

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });
    return data;
};
