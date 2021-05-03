import {
    MESSAGE_SUCCESS,
    MESSAGE_ERROR,
    CONVERSATION_LOADING,
    CONVERSATION_SUCCESS,
    CONVERSATION_ERROR,
} from '../actions/ChatAction';

const initialState = {};

export function messageReducer(state = initialState, action) {
    switch (action.type)
    {
        case MESSAGE_SUCCESS:
            return action.payload;
        case MESSAGE_ERROR:
            return action.payload;
        default:
            return state;
    }
}

export function conversationReducer(state = initialState, action) {
    switch (action.type)
    {
        case CONVERSATION_LOADING:
            return { ...state, isLoading: action.payload };
        case CONVERSATION_SUCCESS:
            return action.payload;
        case CONVERSATION_ERROR:
            return action.payload;
        default:
            return state;
    }
}




// pour stocket currentChat

