import React, { useEffect } from 'react';
import './Notification.scss';
import {
    HeaderGreen,
    CardNotification,
    Footer,
    Navbar,
    ErrorImageComponent,
} from '../../component/index';
import { refreshUser } from '../../services/userService';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { userRefreshAction } from '../../redux/actions/AuthAction';
import wording from '../../constant/wording';

function Notification(props) {
    const { _id: userId } = useSelector((state) => state.authReducer.user);

    const notificationStore = useSelector(
        (state) => state.authReducer.user.notificationsReceived,
    );
    const dispatch = useDispatch();

    useEffect(async () => {
        await refreshUser(
            userId,
            (res) => {
                dispatch(userRefreshAction(res));
            },
            (err) => {
                console.log('ERROR TO HANDLE', err.response);
            },
        );
    }, []);

    const renderTypeOfNotification = (type, sender) => {
        switch (type)
        {
            case 'NEW_MESSAGE':
                return `${sender} vous a envoyé un message!`;
            case 'NEW_LIKE':
                return `${sender} a marqué votre offre comme favori.`;
        }
    };
    const data = notificationStore.map((item, index) => ({
        picture: item?.product?.productPicture[index]?.picture,
        title: renderTypeOfNotification(item.type, item.sender),
        createdAt: item.createdAt,
        type: item.type,
        visited: item.visited,
    }));

    const render = () => {
        if (data)
        {
            return (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    <ErrorImageComponent type={wording.NO_PRODUCT} />
                </div>
            );
        }
        return data.map((card, index) => {
            return (
                <CardNotification
                    picture={card.picture}
                    title={card.title}
                    createdAt={card.createdAt}
                    lastIndex={card.length - 1}
                    index={index}
                />
            );
        });
    };
    return (
        <div className="container_notification">
            <Navbar history={props.history} />
            <HeaderGreen title="Notifications" />
            <div className="wrapper_notification">{render()}</div>
            <Footer />
        </div>
    );
}

export default Notification;
