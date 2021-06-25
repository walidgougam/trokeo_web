import React from 'react'
import "./CardReview.scss";
import { PictureIconProfile } from '../../index';
import { ReactComponent as Star } from '../../../asset/allSvg/star_empty.svg';

export default function CardReview({ name, messageReview, createdAt }) {
    return (
        <>
            <PictureIconProfile style={{ width: 50, height: 50 }} />
            <div className="wrapper_info_cardreview">
                <p>{name}</p>
                <div style={{ marginTop: 4 }}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p>{messageReview}</p>
            </div>
            <p className='createdat_cardreview'>{`il y a ${createdAt} jours`}</p>
        </>
    )
}
