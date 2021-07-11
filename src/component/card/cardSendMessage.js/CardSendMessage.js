import React, { useEffect, useRef, useState } from 'react';
import './CardSendMessage.scss';
import './ChatFooter.scss';
import io from 'socket.io-client';
import { API_URL } from '../../../API/constant';
/** COMPONENT */
import { ChatHeader } from '../../index';
/** REDUX */
import { useSelector } from 'react-redux';
import { GiftedChat } from 'react-web-gifted-chat';

function CardSendMessage({ props, data }) {
  const { conversation, product: specificProduct } = data;
  const user = useSelector((state) => state.authReducer.user);
  const [messages, setMessages] = useState(conversation?.messages);
  const [conversationId, setConversationId] = useState(conversation?._id);
  const product = conversation ? conversation?.product : specificProduct;
  /** SOCKET */
  const socketRef = useRef(null);

  useEffect(async () => {
    // connect to socket server
    socketRef.current = io(`${API_URL}`, {});

    socketRef.current.on('connect', async () => {
      // send connected client ID TO THE SERVER
      socketRef.current.emit('NEW_USER', { id: user?._id });
    });
    socketRef.current.on('RECIEVE_MESSAGE', (data) => {
      // append receiver message to giftedchat component
      // handleSendNotification(data.text, data.text)
      setMessages((prevState) => GiftedChat.append(prevState, data));
    });
    return () => {
      // on cwu => close socket
      socketRef.current.close();
    };
  }, []);
  const onSend = async (msg) => {
    setMessages((prevState) =>
      GiftedChat.append(prevState, [
        { ...msg[0], received: false, pending: true, sent: false },
      ]),
    );
    const composeMsg = {
      conversationId,
      product: product?._id,
      sender: user?._id,
      reciever: product?.user._id,
      text: msg[0].text,
      to:
        user?._id === product?.user._id
          ? conversation?.sender
          : conversation?.reciever?._id,
    };
    socketRef &&
      socketRef.current.emit('SEND_MESSAGE', composeMsg, (data) => {
        if (data.success)
        {
          setConversationId(data.conversationId);
        }
      });
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader
          props={props}
          name={`${data.product.user.firstName}_${data.product.user.lastName}`}
          productName={data.product.title}
          location="5,8 km"
        />
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: user?._id,
            name: user?.firstName,
          }}
        />
        {/* <Messages allChat={allConversation} messages={['hello']} name={'walid'} />
        <div className="container_chat_footer">
          <SelectPicture />
          <div className="send_message_chat_footer">
            <input type="text" placeholder="Ecrire votre message" />
          </div>
          <button onClick={() => console.log('handle submit')}>send</button>
        </div> */}
      </div>
    </div>
  );
}

export default CardSendMessage;
