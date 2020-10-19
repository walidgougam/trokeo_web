import React from "react";
import "./FooterHome.css";

export default function FooterHome() {
  return (
    <div className="container_footerhome">
      <div className="wrapper_download_app_footerhome">
        <div>
          <p className="download_app_footerhome">Téléchargez l’application</p>
          <p className="text_footerhome">
            Facilitez vos échanges en téléchargeant gratuitement l’application
            Trokéo !
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: 88,
              height: 30,
              backgroundColor: "pink",
              marginRight: 20,
            }}
          >
            ios
          </div>
          <div style={{ width: 88, height: 30, backgroundColor: "pink" }}>
            android
          </div>
        </div>
      </div>
      <div className="wrapper_phone_screen_footerhome">
        <img
          src={require("../asset/allSvg/phone_screen1.png")}
          alt="stylo"
          className="phone1_footerhome"
        />
        <img
          src={require("../asset/allSvg/phone_screen2.png")}
          alt="stylo"
          className="phone2_footerhome"
        />
        <img
          src={require("../asset/allSvg/phone_screen3.png")}
          alt="stylo"
          className="phone1_footerhome"
        />
        <img
          src={require("../asset/allSvg/phone_screen4.png")}
          alt="stylo"
          className="phone2_footerhome"
        />
      </div>
    </div>
  );
}
