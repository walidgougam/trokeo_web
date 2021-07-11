import React from 'react';
import './About.scss';
/** PICTURE */
import { ReactComponent as ImagePeopleHeartBig } from '../../../asset/allSvg/people_heart_image_big.svg';
import { ReactComponent as ImageWomanPigMoney } from '../../../asset/allSvg/woman_pig_money.svg';
import { ReactComponent as ImageManPainting } from '../../../asset/allSvg/man_painting.svg';
/** COMPONENT */
import { HeaderGreen, Navbar, Footer } from '../../../component/index';
import wording from '../../../constant/wording';

function About(props) {
  return (
    <div className="all_container_about">
      <Navbar history={props.history} />
      <HeaderGreen title="A propos de Trokéo" />
      <div className="container_about">
        <div
          className="wrapper_picture_about"
          style={{
            marginBottom: 19,
            paddingLeft: 74,
            paddingLeft: 74,
          }}>
          <ImagePeopleHeartBig />
          <div>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE1}</p>
            <p className="text_about">{wording.ABOUT_SCREEN_DESCRIPTION1}</p>
          </div>
        </div>
        <div
          className="wrapper_picture_about"
          style={{
            marginBottom: 19,
            paddingLeft: 114,
            paddingRight: 114,
            justifyContent: 'space-between'
          }}>
          <div style={{ margin: 0 }}>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE2}</p>
            <p className="text_about">{wording.ABOUT_SCREEN_DESCRIPTION2}</p>
          </div>
          <ImageWomanPigMoney />
        </div>
        <div
          className="wrapper_picture_about"
          style={{
            marginBottom: 146,
            paddingLeft: 155,
            paddingLeft: 119,
          }}>
          <ImageManPainting />
          <div style={{ paddingLeft: 106 }}>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE3}</p>
            <p className="text_about">{wording.ABOUT_SCREEN_DESCRIPTION3}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
