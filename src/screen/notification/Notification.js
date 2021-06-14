import React from 'react'
import './Notification.scss'
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import CardNotification from '../../component/card/cardNotification/CardNotification';

function Notification() {

    const cardProduct = [
        {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        },
        {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        },
        {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }, {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
        , {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
        , {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
        , {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
        , {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
        , {
            picture: '',
            title: "Arnaud a mis en ligne de nouvelles offres.",
            createdAt: '15 heures'
        }
    ]
    return (
        <div>
            <HeaderGreen title="Notifications" />
            <div style={{ marginLeft: 139, marginRight: 139 }}>
                {cardProduct.map((card, index) => {
                    return (
                        <CardNotification
                            picture={card.picture}
                            title={card.title}
                            createdAt={card.createdAt}
                            lastIndex={cardProduct.length - 1}
                            index={index}
                        />
                    )
                })}
            </div>

        </div>
    )
}


export default Notification