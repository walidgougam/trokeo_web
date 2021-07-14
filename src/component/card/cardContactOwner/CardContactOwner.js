import React from 'react';
import './CardContactOwner.scss';
/** COMPONENT */
import { BtnFinish, PictureIconProfile } from '../../index';
/** SVG */
import { ReactComponent as StarFullLittle } from '../../../asset/allSvg/star_full_little.svg';
import { ReactComponent as StarEmptyLittle } from '../../../asset/allSvg/star_empty_little.svg';
import { getOneConversation } from '../../../services/chatService';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function CardContactOwner({ pictureProductOwner, product }) {
  const { user, token } = useSelector(state => state.authReducer)
  const history = useHistory()
  const goToChat = async () => {
    const conversation = await getOneConversation(product, user._id, token);
    console.log("CONVER", conversation)
    const params =
      conversation && conversation.length > 0
        ? {
          conversation: conversation[0], product,
          // distance: renderDistanceLocation(distance) 

        }
        : {
          product,
          //  distance: renderDistanceLocation(distance)
        };
    history.push({ pathname: '/conversation', state: params })
  }
  return (
    <div className="container_cardcontactowner">
      <div className="wrapper_picture_owner_cardcontactowner">
        <PictureIconProfile
          style={{ width: 49, height: 49 }}
          picture={pictureProductOwner}
          fromCardContactOwner
        />
        <div className="wrapper_name_owner_cardcontactowner">
          <p>{`${product?.user?.firstName}_${product?.user?.lastName.substring(0, 1)}`}</p>
          <div className="wrapper_star_cardcontactowner">
            <StarFullLittle />
            <StarFullLittle />
            <StarEmptyLittle />
            <StarEmptyLittle />
          </div>
        </div>
      </div>
      <div className="container_btn_cardcontactowner">
        <BtnFinish width={219} height={30} titleBtn="Contacter le trokeur" onClick={() => goToChat()} />
        <div className="btn_product_inline_cardcontactowner" onClick={() => history.push('/profile/product')}>
          <span>8 annonces en ligne</span>
        </div>
      </div>
    </div>
  );
}
