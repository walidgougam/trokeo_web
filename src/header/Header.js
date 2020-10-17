import React from "react";
import "./Header.css";
import { ReactComponent as LogoTrokeo } from "../asset/allSvg/logo.svg";

export default function Header() {
  return (
    <div className="container">
      <div className="header_left">
        <LogoTrokeo />
        <div className="wrapper_input">
          <input
            type="text"
            className="input_search_word"
            placeholder="Rechercher des mots clés"
          />
          <img
            src={require("../asset/images/femme.jpg")}
            alt="Logo"
            className="icon_search"
          />
        </div>

        <div className="add_product">
          <img
            src={require("../asset/images/femme.jpg")}
            alt="stylo"
            className="pencil_icon"
          />
          <p className="text_add_product">Déposer une annonce</p>
        </div>
      </div>
      <ul className="wrapper_link">
        <li>
          <a href="">Association</a>
        </li>
        <li>
          <a href="">Favoris</a>
        </li>
        <li>
          <a href="">Messages</a>
        </li>
        <li>
          <a href="">Se connecter</a>
        </li>
      </ul>
    </div>
  );
}
