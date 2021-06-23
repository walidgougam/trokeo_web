import {
    SEND_MESSAGE,
} from '../actions/ChatAction';

const initialState = {
    messages: []
};

export function chatReducer(state = initialState, action) {
    switch (action.type)
    {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
                // activeRoomMsgs: [...state.activeRoomMsgs, payload]
            }
        default:
            return state;
    }
}


