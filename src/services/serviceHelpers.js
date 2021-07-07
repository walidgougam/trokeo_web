export const createFormData = (photo, body) => {
    const data = new FormData();

    data.append('photo', {
        name: photo.fileName,
        type: photo.type,
        uri: photo.uri.replace('file://', '')
        // Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', '')
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });
    return data;
};
