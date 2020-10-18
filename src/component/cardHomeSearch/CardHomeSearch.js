import React from "react";
import "./CardHomeSearch.css";

export default function CardHomeSearch() {
  return (
    <div className="container_cardhomesearch">
      <div>
        <p className="question_cardhomesearch">Que recherchez vous ?</p>
        <div className="wrapper_input_cardhomesearch">
          <input type="radio" />
          <span>un bien</span>
          <input type="radio" />
          <span>un service</span>
        </div>
        <p className="question_cardhomesearch">
          Sélectionner la/les catégorie(s) associée(s)
        </p>
        <select className="input_category_cardhomesearch">
          <option>Catégories</option>
        </select>
        <p className="question_cardhomesearch">Choississez la localisation ?</p>
        <input
          placeholder="Entrez une ville"
          className="input_entercity_cardhomesearch"
        />
      </div>
      <div className="wrapper_btn_cardhomesearch">
        <p>Lancer la recherche</p>
      </div>
    </div>
  );
}
