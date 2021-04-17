import React from "react";
import "./AllMessage.scss";
import { allMessage } from "../../Helpers";
//COMPONENT
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import CardReceiveMessage from "../../component/cardReceiveMessage/CardReceiveMessage";
import NoImageProduct from "../../component/NoImageProduct.js/NoImageProduct";
import ChatSidebar from "../../component/chatSidebar/ChatSidebar";

export default function AllMessage({ location, history }) {
  return (
    <div
    >
      <Navbar location={location} />
      <HeaderGreen title="Messages" />
      <ChatSidebar />
      <Footer />
    </div>
  );
}
