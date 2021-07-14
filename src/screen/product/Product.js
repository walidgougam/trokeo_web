import React, { useState, useEffect } from 'react';
import './Product.scss';
import Loader from 'react-loader';
/** COMPONENT */
import {
  Navbar,
  CardProduct,
  Footer,
  HeaderChooseGoodOrService,
  HeaderGreenOrganization,
  ErrorImageComponent
} from '../../component/index';
import wording from '../../constant/wording';
/** REDUX */
import { getProductAction } from '../../redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';

function Product(props) {
  /** STATE */
  const [isService, setIsService] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [noData, setNoData] = useState(false)
  /** REDUX */
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductAction(page, false))
  }, [page])

  const onRefresh = () => {
    console.log("refresh")
  }

  const renderProduct = () => {
    const goodOrService = isService ? "service" : 'bien';
    const allProduct = product?.filter(
      (e) => e?.type.type === goodOrService && e?.isFromOrganisation === false
    );

    if (loading)
    {
      return (
        <Loader loaded={false} color="green" />
      );
    }
    else if (!product)
    {
      return <ErrorImageComponent
        type={wording.NO_MESSAGE}
        onPress={() => onRefresh()}
      />
    }
    return (
      <div className="container_card_product">
        {allProduct.map((product, index) => {
          return (
            <div className="wrapper_card_product" key={index}>
              <CardProduct
                category={product?.category?.category}
                key={index}
                title={product.title}
                productPicture={product?.productPicture[0]?.picture}
                goToProductDetail={() =>
                  props.history.push({
                    pathname: `/productdetail`,
                    state: { product }
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
  };

  return (
    <div >
      <div className="allcontainer_product">
        <Navbar history={props.history} />
        <HeaderChooseGoodOrService
          onChange={() => setIsService(!isService)}
          isService={isService}
        />
        {renderProduct()}
      </div>
      <Footer />
    </div>
  );
}

export default Product;
