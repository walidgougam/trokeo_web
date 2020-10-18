import React from "react";
import "./Home.css";
import Header from "../header/Header";
import HowItWorks from "../component/howitworks/HowItWorks";
import FooterHome from "../footer/FooterHome";
import CardHomeSearch from "../component/cardHomeSearch/CardHomeSearch";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="image_home"></div>
      <div className="text_image_home">
        <div>
          <p className="text1_home">Le troc participatif et solidaire !</p>
          <p className="text2_home">
            Recherchez autour de vous ce dont vous avez besoin et faites de
            place dans vos placards !
          </p>
        </div>
        <CardHomeSearch />
      </div>

      <HowItWorks />
      <FooterHome />
    </div>
  );
}
