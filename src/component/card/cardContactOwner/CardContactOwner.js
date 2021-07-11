import React from 'react';
import './CardContactOwner.scss';
/** COMPONENT */
import { BtnFinish, PictureIconProfile } from '../../index';
/** SVG */
import { ReactComponent as StarFullLittle } from '../../../asset/allSvg/star_full_little.svg';
import { ReactComponent as StarEmptyLittle } from '../../../asset/allSvg/star_empty_little.svg';

export default function CardContactOwner({ pictureProductOwner }) {
  return (
    <div className="container_cardcontactowner">
      <div className="wrapper_picture_owner_cardcontactowner">
        <PictureIconProfile
          style={{ width: 49, height: 49 }}
          picture={pictureProductOwner}
          fromCardContactOwner
        />
        <div className="wrapper_name_owner_cardcontactowner">
          <p>marine_w</p>
          <div className="wrapper_star_cardcontactowner">
            <StarFullLittle />
            <StarFullLittle />
            <StarEmptyLittle />
            <StarEmptyLittle />
          </div>
        </div>
      </div>
      <div className="container_btn_cardcontactowner">
        <BtnFinish width={219} height={30} titleBtn="Contacter le trokeur" />
        <div className="btn_product_inline_cardcontactowner">
          <span>8 annonces en ligne</span>
        </div>
      </div>
    </div>
  );
}
