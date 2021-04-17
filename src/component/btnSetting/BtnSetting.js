import React from 'react';
import './BtnSetting.scss';
import {ReactComponent as ArrowRight} from '../../asset/allSvg/arrow_right.svg';
import {ReactComponent as ArrowBottom} from '../../asset/allSvg/arrow_bottom.svg';

export default function BtnSetting({
  titleBtn,
  paddingTop,
  borderTop,
  marginTop,
  component,
  onClick,
  active,
  marginBottom,
}) {
  return (
    <div
      className="container_btnsetting"
      style={{paddingTop, borderTop, marginTop, marginBottom}}>
      <div className="wrapper_title_btnsetting" onClick={onClick}>
        <p className="title_btnsetting" style={{color: active ? 'black' : ''}}>
          {titleBtn}
        </p>
        {!active ? <ArrowRight /> : <ArrowBottom />}
      </div>
      {active && component}
    </div>
  );
}
