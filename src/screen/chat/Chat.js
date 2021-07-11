import React, { useState, useEffect } from 'react';
import './Chat.scss';
/** COMPONENT */
import { CardSendMessage, Navbar, HeaderGreen, Footer } from '../../component/index';
import { useLocation } from 'react-router';

function Chat(props) {
  const location = useLocation()
  console.log("LOCATION", location.state)
  return (
    <>
      <Navbar history={props.history} />
      <div className="container_chat">
        <HeaderGreen title="Messages" />
        <CardSendMessage props={props} data={location.state} />
        <Footer />
      </div>
    </>
  );
}
export default Chat