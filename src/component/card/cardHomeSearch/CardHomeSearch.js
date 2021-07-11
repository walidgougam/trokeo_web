import React, { useState, useEffect } from 'react';
import './CardHomeSearch.scss';
import { goodCategories, serviceCategories } from '../../../Helpers';
import wording from '../../../constant/wording';

function CardHomeSearch({ props }) {
  /** STATE */

  const [state, setState] = useState({
    isServices: false,
    categories: [],
    city: '',
    category: ''
  });

  const handleResearch = () => {
    props.history.push(wording.PRODUCT_URL);
  };

  useEffect(() => {
    if (!state.isServices)
    {
      setState({ ...state, categories: goodCategories });
    } else
    {
      setState({ ...state, categories: serviceCategories });
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
        {/* <SelectOption
          style={{}}
          // goodsCondition={['male', 'female']}
          placeholder="Catégories"
          goodCategories={state.categories}
          changeState={(e) => setState({ ...state, female: e.target.value === 'male' ? false : true })}
        /> */}
        <select className="input_category_cardhomesearch" onChange={(e) => setState({ ...state, category: e.target.value })}>
          <option style={{ color: 'grey' }} value="" selected disabled>
            Catégories
          </option>
          {state.categories?.map((category, index) => {
            return <option key={index}>{category.category}</option>;
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
      <div
        className="wrapper_btn_cardhomesearch"
        onClick={() => handleResearch()}>
        <p>Lancer la recherche</p>
      </div>
    </div>
  );
}

export default CardHomeSearch;
