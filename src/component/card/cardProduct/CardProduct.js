import React, { useState } from 'react';
import './CardProduct.scss';
import { ReactComponent as IconLocation } from '../../../asset/allSvg/icon_location.svg';
import { ReactComponent as HeartEmpty } from '../../../asset/allSvg/heart_empty.svg';
import { ReactComponent as HeartFull } from '../../../asset/allSvg/heart_full.svg';
import { imageStatic } from '../../../API/constant';
import { showCategoryPicture } from '../../../Helpers';

function CardProduct({
  goToProductDetail,
  title,
  productPicture,
  category,
}) {
  const [booked, setBooked] = useState(true);
  const [heart, setHeart] = useState(false);
  return (
    <div className="container_cardproduct" style={{ cursor: 'pointer' }}>
      <div onClick={goToProductDetail}>
        {!productPicture?.length > 0 ? (
          <img
            src={productPicture}
            alt="product_image"
            className="image_product_cardproduct"
            onClick={goToProductDetail}
          />
        ) : (
          <div className="wrapper_category_cardproduct">
            {showCategoryPicture(category)}
          </div>
        )}
        <p
          className="text_booked_cardproduct"
          style={{
            visibility: 'visible',
          }}>
          Réservé
        </p>
      </div>
      <p
        className="title_product_cardproduct"
      >
        {title}
      </p>
      <div className="container_icon_cardproduct">
        <div className="wrapper_icon_cardproduct">
          <IconLocation />
          <span className="text_icon_cardproduct">5.8 km</span>
        </div>
        <div
          className="wrapper_icon_cardproduct"
          style={{ cursor: 'pointer' }}
          onClick={() => setHeart(!heart)}>
          {console.log(heart, "ah bon heart")}
          <div>{heart ? <HeartFull /> : <HeartEmpty />}</div>
          <span className="text_icon_cardproduct">12</span>
        </div>
      </div>
    </div>
  );
}

export default CardProduct