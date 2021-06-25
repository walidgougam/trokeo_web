import React, { useState, useEffect } from 'react';
import './Product.scss';
import axios from 'axios';
import { getProductUrl } from '../../API/constant';
import Loader from 'react-loader';
import { allProduct } from '../../Helpers';
/** COMPONENT */
import {
  HeaderGreenOrganization,
  Navbar,
  NoProductComponent,
  CardProduct,
  Sidebar,
  Footer,
  HeaderChooseGoodOrService,
} from '../../component/index';
/** REDUX */
import { getProductAction } from '../../redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

function Product(props) {
  /** STATE */
  const [isService, setIsService] = useState(true);
  const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  /** REDUX */
  const dispatch = useDispatch();
  const productStore = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  const renderProduct = () => {
    // if (productStore.isLoading)
    // {
    //   return <Loader loaded={false} color="green" />;
    // } else if (!productStore.length > 0)
    // {
    //   return (
    //     <div style={{ display: 'flex', justifyContent: 'center' }}>
    //       {console.log(window.innerHeight, "window.innerHeight")}
    //       <NoProductComponent />
    //     </div>
    //   );
    // } else
    {
      return (
        <div className="wrapper_card_product">
          {allProduct.map((product, index) => {
            // to change by productStore
            return (
              <div style={{ width: 168, height: 146 }}>
                <CardProduct
                  category={product.category}
                  key={index}
                  title={product.title}
                  productPicture={product?.productPicture[0].picture}
                  goToProductDetail={() =>
                    props.history.push(`/product/:${product._id}`)
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
    <>
      <Navbar props={props} />
      <HeaderChooseGoodOrService
        onChange={() => setIsService(!isService)}
        isService={isService}
      />
      {renderProduct()}
      <Footer />
    </>
  );
}

export default Product;
