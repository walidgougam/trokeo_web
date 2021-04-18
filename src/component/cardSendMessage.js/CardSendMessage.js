import React from 'react';
import './CardSendMessage.scss';
import ChatHeader from '../chatHeader/ChatHeader';
// import ChatList from '../chatList/ChatList';
import Message from '../message/Message';
import ChatFooter from '../chatFooter/ChatFooter';
import {allChat} from '../../Helpers';
import Input from '../a supprimer/Input/Input';
import Messages from '../Messages/Messages';

function CardSendMessage() {
  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader
          name="marion_b"
          productName="cours de chant"
          location="5,8 km"
        />
        <Messages allChat={allChat} messages={['hello']} name={'walid'} />

        <ChatFooter />
      </div>
    </div>
  );
}

export default CardSendMessage;
