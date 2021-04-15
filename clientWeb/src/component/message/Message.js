import React from 'react';
// import classNames from 'classnames';

import './Messages.scss';

const Message = ({ isMyMessage, message }) => {
    // const messageClass = classNames('message-row', {
    //     'you-message': isMyMessage,
    //     'other-message': !isMyMessage
    // });

    const imageThumbnail = isMyMessage ? null : <img src={message.imageUrl} alt={message.imageAlt} />;

    return (
        <div className={"you-message"}>
            <div className="message-content">
                {imageThumbnail}
                <div className="message-text">
                    {message.messageText}
                </div>
                <div className="message-time">{message.messages[0].createdAt}</div>
            </div>
        </div>
    );
}

export default Message;