import React, { useState, useEffect } from 'react';
import './Chat.scss';
import CardSendMessage from '../../component/cardSendMessage.js/CardSendMessage';
import Navbar from '../../component/navbar/Navbar';
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import Footer from '../../component/footer/Footer';

export default function Chat(props, { history }) {


  return (
    <div className="container_chat">
      <Navbar />
      <HeaderGreen title="Messages" />
      <CardSendMessage props={props} />
      <Footer />
    </div>
  );
}
