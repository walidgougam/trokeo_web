import React from 'react';
import './CardReceiveMessage.scss';
//PICTURE
import {ReactComponent as GreyDot} from '../../asset/allSvg/greyDot.svg';

function CardReceiveMessage({
  chatId,
  userName,
  titleProduct,
  pictureProduct,
  index,
  arrayLength,
  iconNoImage,
  history,
}) {
  return (
    <div
      className="container_cardReceiveMessage"
      style={{
        paddingTop: index === 0 ? 0 : 13,
        paddingBottom: index < arrayLength - 1 ? 13 : 0,
        borderBottom: index < arrayLength - 1 ? '1px solid #979797' : null,
      }}>
      <div
        className="container_image_cardReceiveMessage"
        onClick={() => history.push(`/chat/${chatId}`)}>
        {pictureProduct ? (
          <img src={pictureProduct} alt="msg picture" />
        ) : (
          iconNoImage
        )}
        <div
          style={{
            marginLeft: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <div>
            <p className="text_name_cardReceiveMessage">{userName}</p>
            <p className="text_title_cardReceiveMessage">{titleProduct}</p>
          </div>
          <p className="text_lastmessage_cardReceiveMessage">
            16:52 - first message first message first message
          </p>
        </div>
      </div>
      <div className="wrapper_grey_dot_cardReceiveMessage">
        <div>
          <GreyDot />
          <GreyDot />
          <GreyDot />
        </div>
      </div>
    </div>
  );
}

export default CardReceiveMessage;
