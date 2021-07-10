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
  Modal,
} from '../../component/index';
import wording from '../../constant/wording';
/** REDUX */
import { useDispatch } from "react-redux";
import {
  userDiconnectedAction,
} from "../../redux/actions/AuthAction";

function Setting(props) {
  /** STATE */
  const [activeNotification, setActiveNotification] = useState(false);
  const [activePersonalData, setActivePersonalData] = useState(false);
  const [activePayment, setActivePayment] = useState(false);
  const [activePassword, setActivePassword] = useState(false);
  const [activeDeconnection, setActiveDeconnection] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /** REDUX */
  const dispatch = useDispatch();

  const handleClose = () => {
    console.log('close');
  };

  const handleDeconnection = () => {
    setActiveDeconnection(!activeDeconnection)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirmDisconnect = () => {
    setIsOpen(false)
    dispatch(
      userDiconnectedAction({
        user: null,
        token: null,
        isConnected: false
      }),
    )
    localStorage.clear()
  }

  return (
    <div>
      <Navbar props={props} />
      <HeaderGreen title="Paramètres" />
      <div className="container_central_setting">
        <BtnSetting
          active={activeNotification}
          onClick={() => setActiveNotification(!activeNotification)}
          titleBtn={wording.NOTIFICATION_BTN}
          component={<NotificationSetting />}
        />
        <BtnSetting
          active={activePersonalData}
          onClick={() => setActivePersonalData(!activePersonalData)}
          titleBtn={wording.PERSONAL_DATA_BTN}
          paddingTop={28}
        />
        <BtnSetting
          active={activePassword}
          onClick={() => setActivePassword(!activePassword)}
          titleBtn={wording.PASSWORD_BTN}
          paddingTop={28}
          component={<PasswordSetting />}
        />
        <BtnSetting
          active={activePayment}
          onClick={() => setActivePayment(!activePayment)}
          titleBtn={wording.PAYMENT}
          paddingTop={28}
          component={<PaymentSetting />}
        />
        <BtnSetting
          active={activeDeconnection}
          onClick={() => handleDeconnection()}
          titleBtn={wording.DISCONNECT_BTN}
          paddingTop={28}
        />
      </div>
      <Modal
        open={isOpen}
        onClose={() => closeModal()}
        btnPress={() => confirmDisconnect()}
        title={wording.SURE_DISCONNECTED}
        btnTitle="Confirmer"
      />
      <Footer />
    </div>
  );
}

export default Setting