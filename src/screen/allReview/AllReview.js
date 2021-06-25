import React from "react";
import "./AllReview.scss";
/** COMPONENT */
import { ProfileOption, Navbar, HeaderGreen, ThumbnailProfile, Footer } from '../../component/index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import CardReview from "../../component/card/cardReview/CardReview";

function AllReview(props) {
    /** REDUX */
    const userStore = useSelector((state) => state.authReducer)

    const name = `${userStore.user.firstName}_${userStore.user.lastName.charAt(0)}`
    return (
        <>
            <Navbar props={props} />
            <HeaderGreen />
            <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
                <ThumbnailProfile props={props} name={name} createdProfileAt={userStore.user.createdAt} />
                <CardReview name={'marine_w'} messageReview={'joli sac'} createdAt={1} />
            </div>
            <Footer />
        </>
    );
}

export default AllReview;
