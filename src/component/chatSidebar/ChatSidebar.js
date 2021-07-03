import React from 'react';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./ChatSidebar.scss"
import { Message } from '../index';

export default function ChatSidebar() {
    return (
        <div className="container_chat_sidebar">
            i am the sidebar
            <div className="header_chat_sidebar">
                <Avatar />
            </div>
            <div className="card_chat_sidebar">
                <SearchIcon />
            </div>
            <Message
                id={1}
                email={2}
                message={"this is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a messagethis is a message"}
                timestamp={"12/02/12"}
            />
            <Message
                id={2}
                message={"this is a message"}
                timestamp={"12/02/12"}
            />
        </div>

    )
}

//repprendre tuto
//https://www.youtube.com/watch?v=HF65cySUYao&ab_channel=CleverProgrammer