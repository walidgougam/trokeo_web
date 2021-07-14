import React from 'react';
import './CardFollowCategory.scss';

function CardFollowCategory({ title, followByUser, index, arrayLength, onClick }) {
  return (
    <div
      className="container_cardfollowcategory"
      style={{
        borderBottom: arrayLength - 1 > index ? 'solid 1px #979797' : null,
        marginBottom: arrayLength - 1 > index ? null : 36,
      }}>
      <p>{title}</p>
      <div
        className={
          followByUser
            ? 'wrapper_unfollow_cardfollowcategory'
            : 'wrapper_follow_cardfollowcategory'
        }
        onClick={onClick}>
        <p>{followByUser ? 'unfollow' : 'follow'}</p>
      </div>
    </div>
  );
}

export default CardFollowCategory;
