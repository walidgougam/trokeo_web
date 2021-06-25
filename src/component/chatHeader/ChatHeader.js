import React from 'react';
import './ChatHeader.scss';
import { ReactComponent as IconLocation } from '../../asset/allSvg/icon_location.svg';
/** COMPONENT */
import BtnChatHeader from '../btn/btnChatHeader/BtnChatHeader';
import Navbar from '../../component/navbar/Navbar';

function ChatHeader(props, { name, productName, location, fromReview }) {
  return (
    <div>
      <Navbar props={props} />
      <div className="container_chatheader">
        <div className="wrapper_product_chatheader">
          <img
            src={require('../../asset/allSvg/femme.png')}
            className="user_picture_chatheader"
          />
          <div className="info_product_chatheader">
            <p className="name_chatheader">{name}</p>
            <p className="product_name_chatheader">{productName}</p>
            <div className="wrapper_location_chatheader">
              <IconLocation />
              <p>{location}</p>
            </div>
          </div>
        </div>
        {
          !fromReview && <BtnChatHeader />
        }
      </div>
      <div className="line_separate_card_send_msg"></div>
    </div>
  );
}

export default ChatHeader;
