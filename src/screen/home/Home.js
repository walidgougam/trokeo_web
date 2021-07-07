import React from 'react';
import './Home.scss';
/** COMPONENT */
import { Navbar, HowItWorks, Footer, FooterHome, CardHomeSearch } from '../../component/index'

function Home(props) {
  return (
    <div className="container_home">
      < Navbar props={props} />
      <>
        <div className="wrapper_image_home">
          <div style={{ marginTop: 86, marginLeft: 99 }}>
            <p className="text1_home">Le troc participatif et solidaire !</p>
            <p className="text2_home">
              Recherchez autour de vous ce dont vous avez besoin et faites de
              place dans vos placards !
            </p>
          </div>
          <CardHomeSearch props={props} />
        </div>
        <HowItWorks />
        <FooterHome />
        <Footer />
      </>
    </div >
  );
}

export default Home