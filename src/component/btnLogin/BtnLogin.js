import React from "react";
import "./BtnLogin.css";
import { ReactComponent as LogoFacebook } from "../../asset/allSvg/icon_facebook.svg";
import { ReactComponent as LogoGoogle } from "../../asset/allSvg/icon_google.svg";

export default function BtnLogin({ title }) {
  return title === "Login avec Google" ? (
    <div className="wrapper_google_btnlogin">
      <LogoGoogle /> <p className="text_google_btnlogin">{title}</p>
    </div>
  ) : (
    <div className="wrapper_facebook_btnlogin">
      <LogoFacebook /> <p className="text_facebook_btnlogin">{title}</p>
    </div>
  );
}
