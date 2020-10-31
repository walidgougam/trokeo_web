import React from "react";
import "./Setting.css";
//PICTURE AND ICON
import NoAdvertising from "../../asset/allSvg/noAdvertising.png";
import { ReactComponent as PhoneNotification } from "../../asset/allSvg/phoneNotification.svg";
import { ReactComponent as AddPicture } from "../../asset/allSvg/addPicture.svg";
//COMPONENT
import HeaderGreen from "../../component/headerGreen/HeaderGreen";
import Navbar from "../../component/navbar/Navbar";
import BtnNext from "../../component/btn/BtnNext";
import BtnFinish from "../../component/btn/BtnFinish";
import CardSetting from "../../component/cardSetting/CardSetting";
import Footer from "../../component/footer/Footer";

export default function Setting() {
  return (
    <div>
      <Navbar />
      <HeaderGreen title="Paramètres" />
      <div className="container_central_setting">
        <div style={{ display: "flex", flexDirection: "row", width: 1400 }}>
          <BtnFinish
            width={324}
            height={47}
            fontSize={16}
            titleBtn="2,99€/mois"
          />
          <BtnFinish
            width={324}
            height={47}
            fontSize={16}
            titleBtn="18,99€/an"
          />
        </div>
        <div className="wrapper_card_setting">
          <CardSetting
            title="Supprimer les publicités"
            picture={
              <img src={NoAdvertising} style={{ width: 163, height: 162 }} />
            }
            description="Pour un meilleur confort de navigation "
          />
          <CardSetting
            title="Ajouter plus des photos"
            picture={<AddPicture />}
            description="Mettez en valeur votre annonce pour une annonce optimale !"
          />
          <CardSetting
            title="Ne rien louper "
            picture={<PhoneNotification />}
            description=" Suivre des annonces, être alerter pour une recherche "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
