import React from 'react';
import './BtnNext.scss';

export default function BtnNext({title, onClick}) {
  return (
    <div className="container_btnnext" onClick={onClick}>
      <p className="text_btnnext">{title}</p>
    </div>
  );
}
