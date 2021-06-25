import React from 'react'
import './CardNotification.scss'

export default function CardNotification({ picture, title, createdAt, index, lastIndex }) {
    return (
        <>
            <div className="container_cardnotification" style={{ marginTop: index === 0 ? 35 : 13 }}>
                <img
                    src={require('../../../asset/allSvg/shave.jpg')}
                    style={{ width: 84, height: 68 }}
                />
                <div style={{ marginLeft: 10 }}>
                    <p className="title_cardnotification">{title}</p>
                    <p className="createdAt_cardnotification">il y a {createdAt}</p>
                </div>
            </div>
            {index !== lastIndex && <div style={{ borderTop: '1px solid #bfbdbd' }}></div>}
        </>
    )
}
