import React, { useState } from 'react';
import './ProfileProduct.scss';
/** COMPONENT */
import {
    ProfileOption,
    Navbar,
    HeaderGreen,
    ThumbnailProfile,
    HeaderChooseGoodOrService,
    Footer,
    CardProduct,
} from '../../component/index.js';
/** REDUX */
import { useSelector, useDispatch } from 'react-redux';

const ProfileProduct = (props) => {
    /** STATE */
    const [isService, setIsService] = useState(false);
    const [page, setPage] = useState(1);
    /** REDUX */
    const dispatch = useDispatch();
    const userStore = useSelector((state) => state.authReducer);
    const name = `${userStore?.user?.firstName}_${userStore?.user?.lastName.charAt(
        0,
    )}`;
    const { product } = useSelector((state) => state.productReducer);

    const renderProduct = () => {
        const goodOrService = isService ? "service" : 'bien';
        const allProduct = product?.filter(
            (e) => e?.type.type === goodOrService && e?.isFromOrganisation === false
        );

        if (allProduct?.length > 0)
        {
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
        }
    };
    return (
        <div className='container_profile'>
            <Navbar history={props.history} />
            <HeaderGreen />
            <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
                <ThumbnailProfile
                    history={props.history}
                    name={name}
                    createdProfileAt={userStore?.user?.createdAt}
                />
            </div>
            <HeaderChooseGoodOrService
                onChange={() => setIsService(!isService)}
                isService={isService}
            />
            {renderProduct()}
            <Footer />
        </div>
    );
}

export default ProfileProduct;
