import React from 'react'
import './Notification.scss'
import { HeaderGreen, CardNotification, Footer } from '../../component/index';
import { Navbar } from '../../component';
import { notificationData } from '../../Helpers'

function Notification(props) {
    return (
        <div className="container_notification">
            <Navbar history={props.history} />
            <HeaderGreen title="Notifications" />
            <div className="wrapper_notification">
                {notificationData.map((card, index) => {
                    return (
                        <CardNotification
                            picture={card.picture}
                            title={card.title}
                            createdAt={card.createdAt}
                            lastIndex={notificationData.length - 1}
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