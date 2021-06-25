import React, { useState } from 'react';
import './Setting.scss';

/** COMPONENT */
import {
  HeaderGreen,
  Navbar,
  BtnSetting,
  Footer,
  PaymentSetting,
  PasswordSetting,
  NotificationSetting,
} from '../../component/index';

export default function Setting({ location }) {
  /** STATE */
  const [activeNotification, setActiveNotification] = useState(false);
  const [activePersonalData, setActivePersonalData] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeDeconnection, setActiveDeconnection] = useState(false);

  return (
    <div>
      <HeaderGreen title="Paramètres" />
      <div className="container_central_setting">
        <BtnSetting
          active={activeNotification}
          onClick={() => setActiveNotification(!activeNotification)}
          titleBtn="Notifications"
          component={<NotificationSetting />}
        />
        <BtnSetting
          active={activePersonalData}
          onClick={() => setActivePersonalData(!activePersonalData)}
          titleBtn="Données personnelles"
          paddingTop={28}
        />
        <BtnSetting
          active={activePassword}
          onClick={() => setActivePassword(!activePassword)}
          titleBtn="Mot de passe"
          paddingTop={28}
          component={<PasswordSetting />}
        />
        <BtnSetting
          active={activePayment}
          onClick={() => setActivePayment(!activePayment)}
          titleBtn="Paiements"
          paddingTop={28}
          component={<PaymentSetting />}
        />
        <BtnSetting
          active={activeDeconnection}
          onClick={() => setActiveDeconnection(!activeDeconnection)}
          titleBtn="Déconnection"
          paddingTop={28}
        />
      </div>
      <Footer />
    </div>
  );
}
