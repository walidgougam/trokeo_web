import React from 'react';



import './ChatHeader.scss';

const ChatHeader = ({ selectedConversation, onDeleteConversation }) => {
    let chatHeaderContents = null;

    if (selectedConversation) {
        chatHeaderContents = (
            <>
                <span>{ selectedConversation.title }</span>
                <div onClick={ () => { onDeleteConversation(); } } title="Delete Conversation">
                hello  
                </div>
            </>
        );
    }

    return (
        <div className="chat-header">
          <div className="header_card_send_msg">
				<div>
					<img
						src={require('../../asset/allSvg/femme.png')}
						alt="msg picture"
						style={{ width: 20, height: 26 }}
					/>
					<div className="wrapper_info_user">
						<div>
							<p className="text_name_cardReceiveMessage">marion</p>
							<p className="text_title_cardReceiveMessage">gateau</p>
						</div>
						<p>location</p>
					</div>
				</div>
			</div>
        </div>
    );
}

export default ChatHeader;