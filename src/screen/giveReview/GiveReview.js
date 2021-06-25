import React from "react";
import wording from '../../constant/wording';
import './GiveReview.scss';
/** SVG */
import { ReactComponent as StarEmpty } from '../../asset/allSvg/star_empty.svg';
import { ReactComponent as StarFull } from '../../asset/allSvg/star_full.svg';
/** COMPONENT */
import { Navbar, HeaderGreen, ChatHeader, Footer, BtnNext } from '../../component/index'

function GiveReview(props) {

  const handleReview = () => {
    console.log("let review")
  }
  return <>
    <Navbar props={props} />
    <HeaderGreen title={wording.GIVE_REVIEW} />
    <div className='container_givereview'>
      <div className='wrapper_card_givereview'>
        <ChatHeader fromReview={true} name={"Manon_C"} productName={"Cours de chant"} location={'5,8'} />
        <div className="wrapper_givereview">
          <p style={{ marginBottom: 20, marginTop: 17 }}>Evaluation</p>
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <p style={{ marginTop: 42, marginBottom: 20 }}>Décrivez votre expérience</p>
          <textarea type="text" style={{ width: '100%', height: '142px' }}></textarea>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <BtnNext style={{ width: 252, height: 45 }} title="Continuer" onClick={() => handleReview()} />
        </div>
        <a style={{ display: "flex", justifyContent: "center", color: "#0091FF" }} href=""><p>Passer</p></a>
      </div>
    </div>
    <Footer />
  </>;
}

export default GiveReview;
