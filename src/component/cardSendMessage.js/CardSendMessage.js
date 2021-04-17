import React from 'react';
import './CardSendMessage.scss';
import ChatHeader from '../chatHeader/ChatHeader';
// import ChatList from '../chatList/ChatList';
import Message from '../message/Message';
import ChatFooter from '../chatFooter/ChatFooter';

function CardSendMessage() {
  return (
    <div className="container_card_send_msg">
      <ChatHeader
        name="marion_b"
        productName="cours de chant"
        location="5,8 km"
      />
      {/* <ChatList /> */}
      <div className="body_card_send_msg">
        <Message />
      </div>
      <ChatFooter />
    </div>
  );
}

export default CardSendMessage;
