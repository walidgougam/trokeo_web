import React, { useState, useEffect } from 'react';
import './Organisation.scss';
/** COMPONENT */
import {
  Navbar,
  CardProduct,
  Footer,
  HeaderChooseGoodOrService,
  HeaderGreenOrganization,
} from '../../component/index';
/** REDUX */
import { getProductAction } from '../../redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

function Organization(props) {
  /** STATE */
  const [isService, setIsService] = useState(false);
  const [page, setPage] = useState(1);

  /** REDUX */
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductAction(page, true))
  }, [page])


  const renderProductForOrganization = () => {
    const goodOrService = isService ? "service" : 'bien';
    const allProduct = product?.filter(
      (e) => e?.type.type === goodOrService && e?.isFromOrganisation === true
    );
    if (allProduct?.length > 0)
    {
      return (
        <div className="wrapper_card_product">
          {allProduct?.map((product, index) => {
            // to change by productStore
            return (
              <div style={{ width: 168, height: 146 }} key={index}>
                <CardProduct
                  category={product?.category?.category}
                  key={index}
                  title={product.title}
                  productPicture={product?.productPicture[0]?.picture}
                  goToProductDetail={() =>
                    props.history.push(`/productdetail`, {
                      product
                    })
                  }
                />
              </div>
            );
          })}
          <br />
          <br />
          <br />
          <div>
            <input type="button" value="see more..." onClick={() => setPage(prevState => prevState + 1)} />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar history={props.history} />
      <HeaderGreenOrganization title="Dons demandés par les associations" />
      <HeaderChooseGoodOrService
        onChange={() => setIsService(!isService)}
        isService={isService}
      />
      {renderProductForOrganization()}
      <Footer />
    </>
  );
}

export default Organization;
