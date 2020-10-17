import React from "react";
import Header from "../header/Header";
import "./Register.css";
import BtnFinish from "../component/btn/BtnFinish";

export default function Register() {
  return (
    <>
      <Header />
      <div className="container_register">
        <div className="wrapper_register">
          <p className="text_create_account_register">Créez un compte</p>
          <div className="circle_icon_profile_register"></div>
          <p className="text_add_picture_register">Ajouter une photo</p>
          <input
            className="input_register"
            type="text"
            placeholder="Prénom"
            style={{ marginBottom: 16 }}
          />
          <input
            className="input_register"
            type="text"
            placeholder="Nom"
            style={{ marginBottom: 16 }}
          />
          <input
            className="input_register"
            type="text"
            placeholder="Email"
            style={{ marginBottom: 16 }}
          />
          <input
            className="input_register"
            type="text"
            placeholder="Mot de passe"
          />
          <p className="text_atleast8_register">
            Il doit contenir au moins 8 caractères.{" "}
          </p>
          <input
            className="input_register"
            type="text"
            placeholder="Mot de passe"
          />
          <p className="text_you_are_register">Vous êtes</p>
          <select className="input_register" style={{ marginBottom: 37 }}>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <BtnFinish title="Terminer" />
        </div>
      </div>
    </>
  );
}
