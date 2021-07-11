import React, { useState } from 'react';
import './ProductDetail.scss';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
/** PICTURE */
import { ReactComponent as HeartEmpty } from '../../asset/allSvg/heart_empty.svg';
import { ReactComponent as HeartFull } from '../../asset/allSvg/heart_full.svg';
import { ReactComponent as IconLocation } from '../../asset/allSvg/icon_location.svg';
/** COMPONENT */
import { Navbar, Footer, CardContactOwner } from '../../component/index'
import { useLocation } from 'react-router';

const mapContainerStyle = {
  width: '479px',
  height: '223px',
};

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

function ProductDetail() {

  const location = useLocation()
  const { product } = location.state
  /** STATE */
  const [state, setState] = useState({
    heart: true
  });

  //GOOGLEMAP
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return 'error Loading Map';
  if (!isLoaded) return 'Loading Maps';
  return (
    <div className="allcontainer_productdetail">
      <Navbar />
      <div
        className="container_productdetail"
      >
        <div className="wrapper_title_category_productdetail">
          <span className="title_category_productdetail">Catégorie</span>
          <span className="detail_category_productdetail">
            {product.category.category}
          </span>
        </div>
        <div className="container_cardcontact_productdetail">
          <CardContactOwner
            pictureProductOwner={'../../asset/allSvg/shave.jpg'}
            product={product}
          />
          <div className="container_right_productdetail">
            <img
              src={require('../../asset/allSvg/shave.jpg')}
              alt="product_image"
              className="image_product_productdetail"
            />
            <div className="wrapper_icon_heart_productdetail">
              <p className="title_product_productdetail">
                {product.title}
              </p>
              <div
                onClick={() => setState({ ...state, heart: !state.heart })}
                style={{ cursor: 'pointer ' }}>
                {state.heart ? <HeartEmpty /> : <HeartFull />}
              </div>
            </div>
            <p className="title_section_productdetail">Etat</p>
            <p className="result_section_productdetail">{product.condition}</p>
            <p className="title_section_productdetail">Description</p>
            <p className="result_section_productdetail">
              {product.description}
            </p>
            <p className="title_section_productdetail">Localisation</p>
            <div className="wrapper_location_productdetail">
              <IconLocation />
              <p>5,8 km</p>
            </div>
            <div className="map_productdetail">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}></GoogleMap>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail