import React, { useState } from 'react';
import './HelpCenter.scss';

/** COMPONENT */
import {
    HeaderGreen,
    Navbar,
    BtnSetting,
    Footer,
    PaymentSetting,
    PasswordSetting,
    NotificationSetting,
    ConnexionHelpCenter,
    ExchangeHelpCenter,
    ProposeGoodHelpCenter,
    ResearchHelpCenter,
    SubscribeHelpCenter,
} from '../../component/index';
import StickyFooter from 'react-sticky-footer';

function HelpCenter(props) {
    /** STATE */
    const [connect, setConnect] = useState(false);
    const [research, setResearch] = useState(false);
    const [proposeGood, setProposeGood] = useState(false);
    const [exchange, setExchange] = useState(false);
    const [subscribe, setSubscribe] = useState(false);

    return (
        <div className="container_helpcenter">
            <Navbar history={props.history} />
            <HeaderGreen title="Centre d'aide" />
            <div className="container_central_setting">
                <BtnSetting
                    active={connect}
                    onClick={() => setConnect(!connect)}
                    titleBtn="Inscription, connexion"
                    component={<ConnexionHelpCenter />}
                />
                <BtnSetting
                    active={research}
                    onClick={() => setResearch(!research)}
                    titleBtn="Rechercher et consulter les annonces"
                    paddingTop={28}
                    component={<ResearchHelpCenter />}
                />
                <BtnSetting
                    active={proposeGood}
                    onClick={() => setProposeGood(!proposeGood)}
                    titleBtn="Proposer des biens et services"
                    paddingTop={28}
                    component={<ProposeGoodHelpCenter />}
                />
                <BtnSetting
                    active={exchange}
                    onClick={() => setExchange(!exchange)}
                    titleBtn="Echanger avec les trokeurs"
                    paddingTop={28}
                    component={<ExchangeHelpCenter />}
                />
                <BtnSetting
                    active={subscribe}
                    onClick={() => setSubscribe(!subscribe)}
                    titleBtn="Souscrire et gérer l’abonnement "
                    paddingTop={28}
                    component={<SubscribeHelpCenter />}
                />
            </div>
            <StickyFooter
                bottomThreshold={200}
                normalStyles={{
                    backgroundColor: "white",
                    padding: "2rem"
                }}
                stickyStyles={{
                    backgroundColor: "rgba(255,255,255,.8)",
                    padding: "2rem"
                }}
            >
                <Footer />
            </StickyFooter>
        </div>
    );
}

export default HelpCenter;
