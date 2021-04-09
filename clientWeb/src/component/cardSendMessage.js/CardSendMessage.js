import React from 'react';
import './CardSendMessage.scss';

function CardSendMessage() {
	return (
		<div className="container_card_send_msg">
			<div className="header_card_send_msg">
				<div>
					<img
						src={require('../../asset/allSvg/femme.png')}
						alt="msg picture"
						style={{ width: 10, height: 10 }}
					/>
					<div
						style={{
							marginLeft: 10,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}
					>
						<div>
							<p className="text_name_cardReceiveMessage">marion</p>
							<p className="text_title_cardReceiveMessage">gateau</p>
						</div>
						<p>location</p>
					</div>
				</div>
			</div>
			<div className="body_card_send_msg" />
			<div className="footer_card_send_msg" />
		</div>
	);
}

export default CardSendMessage;
