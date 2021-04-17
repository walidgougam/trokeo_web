import React from 'react'
import './Message.scss'
import { Avatar } from "@material-ui/core";

export default function Message({ id, message, timestamp, email }) {
    const user = { email: 2 }
    return (
        <div className={`container_message ${user.email === email && "message_sender"}`}>
            <Avatar className="message_photo" />
            <p>{message}</p>
            <small>{timestamp}</small>
        </div>
    )
}
