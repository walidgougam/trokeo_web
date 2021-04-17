import React from 'react';
import './ChatFooter.scss';
import {ReactComponent as SelectPicture} from '../../asset/allSvg/hide_password.svg';

export default function ChatFooter() {
  return (
    <div className="container_chat_footer">
      <SelectPicture />
      <div className="send_message_chat_footer">
        <input type="text" placeholder="Ecrire votre message" />
      </div>
      <SelectPicture />
    </div>
  );
}
