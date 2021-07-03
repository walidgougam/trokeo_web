import React, { useEffect, useState } from 'react';
import './CardReceiveMessage.scss';
import Loader from 'react-loader';
import moment from 'moment';
/** PICTURE */
import { ReactComponent as GreyDot } from '../../../asset/allSvg/greyDot.svg';
import axios from 'axios';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
// import { getUserAction } from '../../../redux/actions/UserAction';

function CardReceiveMessage({
  sender,
  message,
  createdAt,
  picture,
  product,
  conversation,
  chatId,
  currentUser,
  userName,
  titleProduct,
  pictureProduct,
  index,
  arrayLength,
  iconNoImage,
  history,
}) {
  // REDUX
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.userReducer);

  const displayHour = () => {
    return moment(createdAt).format('HH:mm');
  };

  // useEffect(() => {
  //   const friendId = conversation.members.find((m) => m !== currentUser._id);

  //   const getUser = async () => {
  //     try
  //     {
  //       dispatch(getUserAction(friendId));
  //     } catch (err)
  //     {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [currentUser, conversation]);

  // if (userStore.isLoading === true || Object.keys(userStore).length === 0)
  // {
  //   return <Loader loaded={false} color="green" />;
  // }

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
        {picture ? (
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLV6l8UzTWhIhHBYxM801tLHtKTzHAjhzxQ&usqp=CAU'
            }
            alt="msg picture"
          /> // replace url by 'picture'
        ) : (
          iconNoImage
        )}
        <div className="wrapper_cardReceiveMessage">
          <div>
            <p className="text_name_cardReceiveMessage">{sender}</p>
            <p className="text_title_cardReceiveMessage">{product?.title}</p>
          </div>
          <p className="text_lastmessage_cardReceiveMessage">
            {`${displayHour()} - ${message}`}
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