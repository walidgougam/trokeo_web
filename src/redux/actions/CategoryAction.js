export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const categorySuccessAction = (data) => {
    return async (dispatch) => {
        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
    };
  };
  