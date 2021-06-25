import React, { useState, useEffect } from 'react';
import './CardHomeSearch.scss';
import { goodCategories, serviceCategories } from '../../../Helpers';
import wording from '../../../constant/wording';
import {
  Link,
} from 'react-router-dom';

function CardHomeSearch({ props }) {
  /** STATE */

  const [state, setState] = useState({
    isServices: false,
    category: [],
    city: ''
  })

  const handleResearch = () => {
    console.log("research")
    props.history.push(wording.PRODUCT_URL)
  }

  useEffect(() => {
    if (!state.isServices)
    {
      setState({ ...state, category: goodCategories });
    } else
    {
      setState({ ...state, category: serviceCategories });
    }
  }, [state.isServices]);

  return (
    <div className="container_cardhomesearch">
      <div>
        <p className="question_cardhomesearch">Que recherchez vous ?</p>
        <div className="wrapper_input_cardhomesearch">
          <input
            type="radio"
            checked={!state.isServices}
            onChange={() => setState({ ...state, isServices: false })}
          />
          <span>un bien</span>
          <input
            type="radio"
            checked={state.isServices}
            onChange={() => setState({ ...state, isServices: true })}
          />
          <span>un service</span>
        </div>
        <p className="question_cardhomesearch">
          Sélectionner la/les catégorie(s) associée(s)
        </p>
        <select className="input_category_cardhomesearch">
          <option style={{ color: "grey" }} value="" selected disabled>Catégories</option>
          {state.category?.map((category, index) => {
            return <option key={index}>{category.titleCategory}</option>;
          })}
        </select>
        <p className="question_cardhomesearch">Choississez la localisation ?</p>
        <input
          value={state.city}
          onChange={(e) => setState({ ...state, city: e.target.value })}
          placeholder={wording.CITY_PLACEHOLDER}
          className="input_entercity_cardhomesearch"
        />
      </div>
      {/* <Link to={wording.PRODUCT_URL} style={{ textDecoration: 'none' }}> */}
      <div className="wrapper_btn_cardhomesearch" onClick={() => handleResearch()}>
        <p>Lancer la recherche</p>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default CardHomeSearch