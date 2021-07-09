import React from 'react';
import './AllReview.scss';
/** COMPONENT */
import {
    ProfileOption,
    Navbar,
    HeaderGreen,
    ThumbnailProfile,
    Footer,
} from '../../component/index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import CardReview from '../../component/card/cardReview/CardReview';

function AllReview(props) {
    /** REDUX */
    const userStore = useSelector((state) => state.authReducer);

    const name = `${userStore.user.firstName}_${userStore.user.lastName.charAt(
        0,
    )}`;

    const allReview = [
        {
            name: 'marine_w',
            messageReview: 'joli sac',
            createdAd: 1,
        },
        {
            name: 'marine_w',
            messageReview: 'joli sac',
            createdAd: 2,
        },
        {
            name: 'marine_w',
            messageReview: 'joli sac',
            createdAd: 3,
        },
    ];

    return (
        <>
            <Navbar props={props} />
            <HeaderGreen />
            <div style={{ marginLeft: '13.5%', marginRight: '13.5%' }}>
                <ThumbnailProfile
                    props={props}
                    name={name}
                    createdProfileAt={userStore.user.createdAt}
                />
                {allReview.map((review, index) => {
                    return (
                        <CardReview
                            name={review.name}
                            messageReview={review.messageReview}
                            createdAt={review.createdAd}
                            lastIndex={allReview.length - 1}
                            index={index}
                        />
                    );
                })}
            </div>
            <Footer />
        </>
    );
}

export default AllReview;
