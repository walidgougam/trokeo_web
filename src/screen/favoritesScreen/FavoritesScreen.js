import React, { useState, useEffect } from 'react';
import './FavoritesScreen.scss';
import Loader from 'react-loader';
/** COMPONENT */
import { Navbar, NoProductComponent, CardProduct, HeaderChooseGoodOrService, Footer, ErrorImageComponent } from '../../component/index';
/** SERVICE */
import { favoriteProduct } from '../../services/productService'
/** REDUX */
import { getProductAction } from '../../redux/actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import wording from '../../constant/wording';

function FavoritesScreen(props) {
    /** STATE */
    const [isService, setIsService] = useState(false);

    /** REDUX */
    const dispatch = useDispatch();
    // const getProduct = useSelector((state) => state.productReducer);
    const { user, token } = useSelector((state) => state.authReducer)
    const [favoris, setFavoris] = useState([])

    useEffect(() => {
        user.productLikes.length > 0 &&
            favoriteProduct(token, user.productLikes, res => {
                setFavoris(res.data.favorit)
            })
    })

    const renderProduct = () => {
        // if (getProduct.isLoading)
        // {
        //     return <Loader loaded={false} color="green" />;
        // } else
        if (favoris.length === 0)
        {
            return (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ErrorImageComponent type={wording.NO_PRODUCT} />
                </div>
            );
        }
        else
        {
            return (
                <div className="wrapper_card">
                    {console.log(favoris, "favoris")}
                    {/* {getProduct.map((product, index) => {
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
                })} */}
                </div>
            );
            // }
        };
    }

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