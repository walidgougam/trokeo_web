import React, { useEffect, useState } from 'react';
import './CardSendMessage.scss';
import './ChatFooter.scss';
import axios from 'axios';
import io from 'socket.io-client';
import { getMessageUrl } from '../../../API/constant';
import { allChat } from '../../../Helpers';
/** SVG */
import { ReactComponent as SelectPicture } from '../../../asset/allSvg/hide_password.svg';
/** COMPONENT */
import ChatHeader from '../../chatHeader/ChatHeader';
// import ChatList from '../chatList/ChatList';
import Message from '../../message/Message';
import Messages from '../../messages/Messages';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { getMessageAction } from '../../../redux/actions/ChatAction';

const endPoint = 'http://172.20.10.2:5000';
let socket = io();

function CardSendMessage(props) {
  // const currentChatId = props.match.params.id;
  // const [arrivalMessage, setArrivalMessage] = useState()

  // //REDUX
  // const dispatch = useDispatch();
  // const getProduct = useSelector((state) => state.productReducer);

  // useEffect(() => {
  //   socket = io(endPoint, {
  //     transports: ['websocket']
  //   });
  //   socket.on("getMessage", (data) => {
  //     setArrivalMessage({
  //       sender: data.senderId,
  //       text: data.text,
  //       createdAt: Date.now(),
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   const getMessages = async () => {
  //     try
  //     {
  //       const res = await dispatch(getMessageAction(currentChatId));
  //       console.log(res, "resresres")
  //       // setMessages(res.data);
  //     } catch (err)
  //     {
  //       console.log(err);
  //     }
  //   };
  //   getMessages();
  // }, [currentChat]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const userId = await localStorage.getItem("userId")
  //   const message = {
  //     sender: userId,
  //     text: newMessage,
  //     conversationId: currentChatId,
  //   };

  //   const receiverId = currentChat.members.find(
  //     (member) => member !== user._id
  //   );

  //   socket.current.emit("sendMessage", {
  //     senderId: userId,
  //     receiverId,
  //     text: newMessage,
  //   });

  //   try
  //   {
  //     const res = await axios.post(getMessageUrl(), message);
  //     setMessages([...messages, res.data]);
  //     setNewMessage("");
  //   } catch (err)
  //   {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader
          name="marion_b"
          productName="cours de chant"
          location="5,8 km"
        />
        <Messages allChat={allChat} messages={['hello']} name={'walid'} />
        <div className="container_chat_footer">
          <SelectPicture />
          <div className="send_message_chat_footer">
            <input type="text" placeholder="Ecrire votre message" />
          </div>
          <button onClick={() => console.log('handle submit')}>send</button>
        </div>
      </div>
    </div>
  );
}

export default CardSendMessage;
