import React from 'react';
import { Message } from '../index';
import './Messages.css';

const Messages = ({ allChat }) => (
  <div className="messages">
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
);

export default Messages;
