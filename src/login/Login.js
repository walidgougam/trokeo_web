import React from "react";
import Header from "../header/Header";
import "./Login.scss";
import BtnLogin from "../component/btnLogin/BtnLogin";
import BtnNext from "../component/btn/BtnNext";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="container_login">
        <div className="wrapper_login">
          <p className="welcome_login">Bienvenue</p>
          <p className="text_topic_login">
            L’application éco-responsable et solidaire de troc d’objets et de
            services entre particuliers !
          </p>
          <BtnLogin title="Login avec Google" />
          <BtnLogin title="Login avec Facebook" />
          <div className="wrapper_input_login">
            <label className="label_login">Votre adresse email</label>
            <br />
            <input className="input_login" type="text" />
          </div>
          <div className="wrapper_input_login">
            <label className="label_login">Votre mot de passe</label>
            <br />
            <input className="input_login" type="text" />
          </div>

          <p className="forget_password_login">Mot de passe oublié</p>
          <BtnNext title="continuer" />
          <p className="register_login">m'inscrire</p>
        </div>
      </div>
    </div>
  );
}
