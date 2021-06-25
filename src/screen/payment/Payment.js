import React, { useState } from 'react';
import wording from '../../constant/wording';
import './Payment.scss';
/** COMPOENENT */
import { HeaderGreen, BtnNext } from '../../component/index'
/** PICTURE */
import { ReactComponent as IconSecurity } from '../../asset/allSvg/icon_securitypayment.svg';
import { ReactComponent as IconCb } from '../../asset/allSvg/icon_cb.svg';
import { ReactComponent as IconMatercard } from '../../asset/allSvg/icon_mastercard.svg';
import { ReactComponent as IconVisa } from '../../asset/allSvg/icon_visa.svg';
import Footer from '../../component/footer/Footer';

function Payment() {

    const [state, setState] = ({
        price: '2,99',
        cardNumber: '',
        cardName: '',
        cardLimitDate: '',
        cardCryptoNumber: ''
    })

    const handlePayment = () => {
        console.log('payment');
    };

    const handleState = (event) => {
        const value = event.target.value;
        setState({ ...state, [event.target.name]: value })
    }
    return (
        <>
            <HeaderGreen title={wording.PAYMENT} />
            <div className="container_payment">
                <div className="wrapper_amount_payment">
                    <p className="amout_payment">
                        Montant à payer: <span>{`${state.price}€`}</span>
                    </p>
                    <div style={{ borderTop: "1px solid #BFBDBD" }}></div>
                    <p className="subscription_payment">
                        Abonnement à {state.price}€/mois renouvelé automatiquement.
                    </p>
                </div>
                <div className="wrapper_icon_payment">
                    <IconSecurity style={{ backgroundSize: '100' }} />
                    <div style={{ marginLeft: 8 }}>Paiement sécurisé</div>
                    <div style={{ marginLeft: 11 }}><IconCb /></div>
                    <div style={{ marginLeft: 2 }}><IconVisa /></div>
                    <div style={{ marginLeft: 2 }}><IconMatercard /></div>
                </div>
                <div className="container_input_payment">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>{wording.NUMBER_CARD_PAYMENT}
                                <input
                                    className="input_payment"
                                    type="text"
                                    name='cardNumber'
                                    value={state.cardNumber}
                                    onChange={(e) => handleState(e)}
                                />
                            </label>
                        </div>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>{wording.CARD_OWNER_PAYMENT}
                                <input
                                    className="input_payment"
                                    type="text"
                                    name="cardName"
                                    value={state.cardName}
                                    onChange={(e) => handleState(e)}
                                    placeholder={wording.NAME_CARD_PLACEHOLDER}
                                />
                            </label>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>{wording.LIMIT_DATE_PAYMENT}
                                <input
                                    className="input_payment"
                                    type="text"
                                    name="cardLimitDate"
                                    value={state.cardLimitDate}
                                    onChange={(e) => handleState(e)}
                                    placeholder={wording.DATE_CARD_PLACEHOLDER}
                                />
                            </label>
                        </div>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>{wording.CRYPTO_PAYMENT}
                                <input
                                    className="input_payment"
                                    type="text"
                                    name="cardCryptoNumber"
                                    value={state.cardCryptoNumber}
                                    onChange={(e) => handleState(e)}
                                    placeholder={wording.CARD_EXAMPLE_PLACEHOLDER}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text_bottom_payment">
                    <p>*Champ obligatoire</p>
                    <p>
                        {wording.DESCRIPTION_PAYMENT}
                    </p>
                </div>
                <div className="wrapper_btn_payment">
                    <BtnNext title="Confirmer" onClick={() => handlePayment()} style={{ width: 252, height: 42 }} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Payment;
