import React from 'react'
import "./CardReview.scss";
import { PictureIconProfile } from '../../index';
import { ReactComponent as Star } from '../../../asset/allSvg/star_empty.svg';

export default function CardReview({ name, messageReview, createdAt, index, lastIndex }) {
    return (
        <div className="container_cardreview" style={{ borderBottom: index === lastIndex ? null : '1px solid #979797' }}>
            <div className="wrapper_leftside_cardreview">
                <PictureIconProfile style={{ width: 50, height: 50 }} />
                <div className="wrapper_info_cardreview">
                    <p className="name_cardreview">{name}</p>
                    <div style={{ marginTop: 4 }}>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <p className="comment_cardreview">{messageReview}</p>
                </div>
            </div>
            <p className='createdat_cardreview'>{`il y a ${createdAt} jours`}</p>
        </div>
    )
}
