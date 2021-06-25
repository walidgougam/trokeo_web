import React, { useState, useEffect } from 'react';
import './Chat.scss';
/** COMPONENT */
import { CardSendMessage, Navbar, HeaderGreen, Footer } from '../../component/index';

function Chat(props) {
  return (
    <>
      <Navbar props={props} />
      <div className="container_chat">
        <HeaderGreen title="Messages" />
        <CardSendMessage props={props} />
        <Footer />
      </div>
    </>
  );
}
export default Chat