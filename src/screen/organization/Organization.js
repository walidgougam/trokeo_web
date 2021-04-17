import React, {useState, useEffect} from 'react';
import './Organisation.scss';
import axios from 'axios';
import {getProductUrl} from '../../API/constants';
import Loader from 'react-loader';

//COMPONENT
import HeaderGreenOrganization from '../../component/headerGreenOrganization/HeaderGreenOrganization';
import Navbar from '../../component/navbar/Navbar';
import NoProductComponent from '../../component/noProduct/NoProductComponent';
import CardProduct from '../../component/cardProduct/CardProduct';
//REDUX
import {getProductAction} from '../../redux/actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';

export default function Organization({location, history}) {
  //STATE
  const [isService, setIsService] = useState(true);
  const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  //REDUX
  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  const renderProduct = () => {
    if (getProduct.isLoading) {
      return <Loader loaded={false} color="green" />;
    } else if (!getProduct.length > 0) {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <NoProductComponent />
        </div>
      );
    } else {
      return (
        <div className="wrapper_card">
          {getProduct.map((product, index) => {
            return (
              <div style={{width: 168, height: 146}}>
                <CardProduct
                  category={product.category}
                  key={index}
                  title={product.title}
                  productPicture={product?.productPicture}
                  goToProductDetail={() =>
                    history.push(`/product/:${product._id}`)
                  }
                />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar location={location} />
      <HeaderGreenOrganization title="Dons demandés par les associations" />
      <div className="good_or_service_organization">
        <p
          onClick={() => setIsService(!isService)}
          style={{
            color: !isService ? '#3AD06B' : '#BFBDBD',
            borderBottom: !isService ? '3px solid #3AD06B' : 'none',
            marginRight: 63,
          }}>
          Biens
        </p>
        <p
          onClick={() => setIsService(!isService)}
          style={{
            color: isService ? '#3AD06B' : '#BFBDBD',
            borderBottom: isService ? '3px solid #3AD06B' : 'none',
          }}>
          Services
        </p>
      </div>
      {renderProduct()}
    </div>
  );
}
