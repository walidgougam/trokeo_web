import React, { useState, useEffect } from 'react';
import './CardHomeSearch.scss';
import { goodCategories, serviceCategories } from '../../../Helpers';
import wording from '../../../constant/wording';
import {
  Link,
} from 'react-router-dom';

export default function CardHomeSearch() {
  const [isServices, setIsServices] = useState(false);
  const [category, setCategory] = useState();

  useEffect(() => {
    if (!isServices)
    {
      setCategory(goodCategories);
    } else
    {
      setCategory(serviceCategories);
    }
  }, [isServices]);

  return (
    <div className="container_cardhomesearch">
      <div>
        <p className="question_cardhomesearch">Que recherchez vous ?</p>
        <div className="wrapper_input_cardhomesearch">
          <input
            type="radio"
            checked={!isServices}
            onChange={() => setIsServices(false)}
          />
          <span>un bien</span>
          <input
            type="radio"
            checked={isServices}
            onChange={() => setIsServices(true)}
          />
          <span>un service</span>
        </div>
        <p className="question_cardhomesearch">
          Sélectionner la/les catégorie(s) associée(s)
        </p>
        <select className="input_category_cardhomesearch">
          {category?.map((category, index) => {
            return <option key={index}>{category.titleCategory}</option>;
          })}
        </select>
        <p className="question_cardhomesearch">Choississez la localisation ?</p>
        <input
          placeholder={wording.CITY_PLACEHOLDER}
          className="input_entercity_cardhomesearch"
        />
      </div>
      <div className="wrapper_btn_cardhomesearch">
        <Link to={wording.PRODUCT_URL} style={{ textDecoration: 'none' }}>
          Lancer la recherche
        </Link>
      </div>
    </div>
  );
}
