import React, { useEffect, useRef, useState } from 'react';
import './CardSendMessage.scss';
import './ChatFooter.scss';
import axios from 'axios';
import io from 'socket.io-client';
import { API_URL, getMessageUrl } from '../../../API/constant';
import { allConversation } from '../../../Helpers';
/** SVG */
import { ReactComponent as SelectPicture } from '../../../asset/allSvg/hide_password.svg';
/** COMPONENT */
import { Messages, Message, ChatHeader } from '../../index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { getMessageAction } from '../../../redux/actions/ChatAction';
import { GiftedChat } from 'react-web-gifted-chat';
const endPoint = 'http://172.20.10.2:5000';
let socket = io();

function CardSendMessage({ props, data }) {
  console.log("DATA CardSendMessage", data)
  const { conversation, product: specificProduct} = data
  const user = useSelector(state => state.authReducer.user)
  const [messages, setMessages] = useState(conversation?.messages)
  const [conversationId, setConversationId] = useState(conversation?._id);
  const product = conversation ? conversation?.product : specificProduct
  /** SOCKET */
  const socketRef = useRef(null)
  // useEffect(() => {
  //   setMessages([
  //     {
  //       id: 1,
  //       text: 'Hello developer',
  //       createdAt: new Date(),
  //       user: {
  //         id: 2,
  //         name: 'React',
  //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
  //       },
  //     },
  //   ])
  // }, [])
  useEffect(async () => {
    // connect to socket server 
    socketRef.current = io(`${API_URL}`, {});

    socketRef.current.on('connect', async () => {
      // send connected client ID TO THE SERVER
      socketRef.current.emit('NEW_USER', { id: user?._id })
    })
    socketRef.current.on('RECIEVE_MESSAGE', (data) => {
      // append receiver message to giftedchat component
      // handleSendNotification(data.text, data.text)
      setMessages(prevState => GiftedChat.append(prevState, data))

    })
    return () => {
      // on cwu => close socket
      socketRef.current.close()
    }
  }, [])
  const onSend = async (msg) => {

    setMessages(prevState => GiftedChat.append(prevState, [{ ...msg[0], received: false, pending: true, sent: false }]));
    const composeMsg = {
      conversationId,
      product: product?._id,
      sender: user?._id,
      reciever: product?.user._id,
      text: msg[0].text,
      to: user?._id === product?.user._id ? conversation?.sender : conversation?.reciever?._id
    }
    socketRef && socketRef.current.emit('SEND_MESSAGE', composeMsg, (data) => {
      if (data.success) {
        setConversationId(data.conversationId)
      }
    })
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader
          props={props}
          name="marion_b"
          productName="cours de chant"
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
