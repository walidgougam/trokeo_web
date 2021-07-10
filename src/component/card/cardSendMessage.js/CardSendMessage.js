import React, { useEffect, useState } from 'react';
import './CardSendMessage.scss';
import './ChatFooter.scss';
import axios from 'axios';
import io from 'socket.io-client';
import { getMessageUrl } from '../../../API/constant';
import { allConversation } from '../../../Helpers';
/** SVG */
import { ReactComponent as SelectPicture } from '../../../asset/allSvg/hide_password.svg';
/** COMPONENT */
import { Messages, Message, ChatHeader } from '../../index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { getMessageAction } from '../../../redux/actions/ChatAction';

const endPoint = 'http://172.20.10.2:5000';
let socket = io();

function CardSendMessage(props) {

  return (
    <div className="outerContainer">
      <div className="container">
        <ChatHeader
          props={props}
          name="marion_b"
          productName="cours de chant"
          location="5,8 km"
        />
        <Messages allChat={allConversation} messages={['hello']} name={'walid'} />
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
