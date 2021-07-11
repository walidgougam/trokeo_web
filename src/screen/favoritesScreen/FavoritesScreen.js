import React, { useState, useEffect } from 'react';
import './FavoritesScreen.scss';
import Loader from 'react-loader';
/** COMPONENT */
import Navbar from '../../component/navbar/Navbar';
import NoProductComponent from '../../component/noProduct/NoProductComponent';
import CardProduct from '../../component/card/cardProduct/CardProduct';
/** REDUX */
import { getProductAction } from '../../redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import HeaderChooseGoodOrService from '../../component/headerChooseGoodOrService/HeaderChooseGoodOrService';
import Footer from '../../component/footer/Footer';

function FavoritesScreen(props) {
    /** STATE */
    const [isService, setIsService] = useState(false);

    /** STATE */
    const dispatch = useDispatch();
    const getProduct = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getProductAction());
    }, []);

    const renderProduct = () => {
        if (getProduct.isLoading)
        {
            return <Loader loaded={false} color="green" />;
        } else if (!getProduct.length > 0)
        {
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {console.log(window.innerHeight, "window.innerHeight")}
                    <NoProductComponent />
                </div>
            );
        } else
        {
            return (
                <div className="wrapper_card">
                    {getProduct.map((product, index) => {
                        return (
                            <div style={{ width: 168, height: 146 }}>
                                <CardProduct
                                    category={product.category}
                                    key={index}
                                    title={product.title}
                                    productPicture={product?.productPicture}
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
        <div>
            <Navbar history={props.history} />
            <HeaderChooseGoodOrService
                onChange={() => setIsService(!isService)}
                isService={isService}
            />
            {renderProduct()}
            <Footer />
        </div>
    );
}


export default FavoritesScreen