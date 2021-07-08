import React from 'react'
import './Notification.scss'
import { HeaderGreen, CardNotification, Footer } from '../../component/index';
import { Navbar } from '../../component';

function Notification({ props }) {

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
            <Navbar props={props} />
            <HeaderGreen title="Notifications" />
            <div className="wrapper_notification">
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
            <Footer />
        </div>
    )
}


export default Notification