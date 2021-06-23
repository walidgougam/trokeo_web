export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';
export const UPLOAD_IMAGE_ERROR = 'UPLOAD_IMAGE_ERROR';

// export const uploadPictureAction = () => {
//   return (dispatch) => {
//     let options = {
//       noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (response.didCancel)
//       {
//         dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: response });
//       } else if (response.error)
//       {
//       } else if (response.customButton)
//       {
//         alert(response.customButton);
//         dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: response });
//       } else
//       {
//         const source = { uri: response.uri };
//         const res = response;
//         dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: response });
//       }
//     });
//   };
// };
