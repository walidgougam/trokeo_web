import React from "react";
import "./Profile.scss";
/** COMPONENT */
import ProfileOption from "../../component/profileOption/ProfileOption";
import Navbar from "../../component/navbar/Navbar";
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import ThumbnailProfile from "../../component/thumbnailProfile/ThumbnailProfile";
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';

function Profile({ history }) {
  /** REDUX */
  const userStore = useSelector((state) => state.authReducer)

  const name = `${userStore.user.firstName}_${userStore.user.lastName.charAt(0)}`
  return (
    <>
      <HeaderGreen />
      <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
        <ThumbnailProfile history={history} name={name} createdProfileAt={userStore.user.createdAt} />
        <ProfileOption />
      </div>
    </>
  );
}

export default Profile;
