import React from 'react';
import './BtnNext.scss';

function BtnNext({ title, onClick, style }) {
  return (
    <div className="container_btnnext" style={style} onClick={onClick}>
      <p className="text_btnnext">{title}</p>
    </div>
  );
}

export default BtnNext