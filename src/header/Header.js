import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="container">
      <img
        src={require("../asset/images/femme.jpg")}
        alt="Logo"
        className="logo"
      />
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
