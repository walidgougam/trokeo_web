import React from 'react';
import './About.scss';
/** PICTURE */
import { ReactComponent as ImagePeopleHeartBig } from '../../../asset/allSvg/people_heart_image_big.svg';
import { ReactComponent as ImageWomanPigMoney } from '../../../asset/allSvg/woman_pig_money.svg';
import { ReactComponent as ImageManPainting } from '../../../asset/allSvg/man_painting.svg';
/** COMPONENT */
import {
  HeaderGreen, Navbar, Footer
} from '../../../component/index'
import wording from '../../../constant/wording';

function About(props) {
  return (
    <>
      <Navbar props={props} />
      <HeaderGreen title="A propos de Trokéo" />
      <div className="container_about">
        <div className="wrapper_people_about">
          <ImagePeopleHeartBig />
          <div>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE1}</p>
            <p className="text_about">
              {wording.ABOUT_SCREEN_DESCRIPTION1}
            </p>
          </div>
        </div>
        <div className="wrapper_woman_pig_about">
          <div style={{}}>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE2}</p>
            <p className="text_about">
              {wording.ABOUT_SCREEN_DESCRIPTION2}
            </p>
          </div>
          <ImageWomanPigMoney />
        </div>
        <div className="wrapper_man_painting_about">
          <ImageManPainting />
          <div>
            <p className="title_about">{wording.ABOUT_SCREEN_TITLE3}</p>
            <p className="text_about">
              {wording.ABOUT_SCREEN_DESCRIPTION3}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About