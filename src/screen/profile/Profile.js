import React from 'react';
import './Profile.scss';
/** COMPONENT */
import {
  ProfileOption,
  Navbar,
  HeaderGreen,
  ThumbnailProfile,
  Footer,
} from '../../component/index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ props }) => {
  /** REDUX */
  const userStore = useSelector((state) => state.authReducer);
  const name = `${userStore.user.firstName}_${userStore.user.lastName.charAt(
    0,
  )}`;
  return (
    <>
      <HeaderGreen />
      <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
        <ThumbnailProfile
          props={props}
          name={name}
          createdProfileAt={userStore.user.createdAt}
        />
        <ProfileOption props={props} />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
