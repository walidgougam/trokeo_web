import React from 'react';
import './BtnChatHeader.scss';

export default function BtnChatHeader() {
  return (
    <button
      className="container_btnchatheader"
      onClick={() => console.log('press')}>
      Finaliser l'échange
    </button>
  );
}
