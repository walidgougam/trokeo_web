import React from "react";
import wording from '../../constant/wording';
import './Review.scss';
import { ReactComponent as StarEmpty } from '../../asset/allSvg/star_empty.svg';
import { ReactComponent as StarFull } from '../../asset/allSvg/star_full.svg';
/** COMPONENT */
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import ChatHeader from "../../component/chatHeader/ChatHeader"
import Footer from "../../component/footer/Footer";

function Review() {
  return <>
    <HeaderGreen title={wording.GIVE_REVIEW} />
    <div className='container_review'>
      <div className='wrapper_card_review'>
        <ChatHeader fromReview={true} />
        <p>Evaluation</p>
        <StarEmpty />
        <StarEmpty />
        <StarEmpty />
        <StarEmpty />
      </div>
    </div>
    <Footer />
  </>;
}

export default Review;
