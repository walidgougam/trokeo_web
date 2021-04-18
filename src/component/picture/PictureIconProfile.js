import React from 'react';
import {ReactComponent as IconProfileBig} from '../../asset/allSvg/iconProfileBig.svg';
import {ReactComponent as IconProfileLittle} from '../../asset/allSvg/iconProfileLittle.svg';
import './PictureIconProfile.scss';

function PictureIconProfile({
  width,
  height,
  fromCardContactOwner,
  style,
  picture,
}) {
  return (
    <img
      src={require('../../asset/allSvg/shave.jpg')}
      alt="picture product owner"
      className="picture_product_owner_pictureicon"
      style={style}
    />
  );
}

export default PictureIconProfile;
