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
import { useSelector } from 'react-redux';

const Profile = (props) => {
  /** REDUX */
  const userStore = useSelector((state) => state.authReducer);
  const name = `${userStore?.user?.firstName}_${userStore?.user?.lastName.charAt(
    0,
  )}`;
  return (
    <div className='container_profile'>
      <Navbar history={props.history} />
      <HeaderGreen />
      <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
        <ThumbnailProfile
          history={props.history}
          name={name}
          createdProfileAt={userStore?.user?.createdAt}
        />
        <ProfileOption history={props.history} />
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
