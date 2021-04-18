import React from 'react';
import './CardSendMessage.scss';
import ChatHeader from '../chatHeader/ChatHeader';
// import ChatList from '../chatList/ChatList';
import Message from '../message/Message';
import ChatFooter from '../chatFooter/ChatFooter';
import {allChat} from '../../Helpers';

function CardSendMessage() {
  return (
    <div className="container_card_send_msg">
      <div>
        <ChatHeader
          name="marion_b"
          productName="cours de chant"
          location="5,8 km"
        />
        {/* <ChatList /> */}
        <div className="body_card_send_msg">
          {allChat.map((msg, index) => {
            return (
              <Message
                id={msg.messages[0]?.user._id}
                message={msg.messages[0]?.text}
                timestamp={msg.messages[0]?.createdAt}
              />
            );
          })}
        </div>
      </div>
      <ChatFooter />
    </div>
  );
}

export default CardSendMessage;
