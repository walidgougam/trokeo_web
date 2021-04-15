import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// import { messagesRequested } from '../../store/actions';
import Message from '../message/Message';
import './ChatList.scss';
import { allChat } from "../../Helpers"

const ChatList = ({ conversationId, getMessagesForConversation, loadMessages }) => {

    return (
        <div id="chat-message-list">
            <Message />
        </div>
    );
}

export default ChatList