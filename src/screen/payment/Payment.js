import React, { useState } from 'react';
import wording from '../../constant/wording';
import './Payment.scss';
/** COMPOENENT */
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import BtnNext from '../../component/btn/BtnNext';
/** PICTURE */
import { ReactComponent as IconSecurity } from '../../asset/allSvg/icon_securitypayment.svg';
import { ReactComponent as IconCb } from '../../asset/allSvg/icon_cb.svg';
import { ReactComponent as IconMatercard } from '../../asset/allSvg/icon_mastercard.svg';
import { ReactComponent as IconVisa } from '../../asset/allSvg/icon_visa.svg';
import Footer from '../../component/footer/Footer';

function Payment() {
    const [price, setPrice] = useState('2,99');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardLimitDate, setCardLimitDate] = useState('');
    const [cardCryptoNumber, setCardCryptoNumber] = useState('');

    const handlePayment = () => {
        console.log('payment');
    };
    return (
        <>
            <HeaderGreen title={wording.PAYMENT} />
            <div className="container_payment">
                <div className="wrapper_amount_payment">
                    <p className="amout_payment">
                        Montant à payer: <span>{`${price}€`}</span>
                    </p>
                    <div style={{ borderTop: "1px solid #BFBDBD" }}></div>
                    <p className="subscription_payment">
                        Abonnement à {price}€/mois renouvelé automatiquement.
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
                                <span>*</span>Numéro de carte
                                <input
                                    className="input_payment"
                                    type="text"
                                    value={cardNumber}
                                    onChange={() => console.log('change')}
                                />
                            </label>
                        </div>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>Titulaire de la carte
                                <input
                                    className="input_payment"
                                    type="text"
                                    value={cardName}
                                    onChange={() => console.log('change')}
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
                                <span>*</span>Date d’expiration
                                <input
                                    className="input_payment"
                                    type="text"
                                    value={cardLimitDate}
                                    onChange={() => console.log('change')}
                                    placeholder={wording.DATE_CARD_PLACEHOLDER}
                                />
                            </label>
                        </div>
                        <div className="wrapper_input_payment">
                            <label className="label_payment">
                                <span>*</span>Cryptogramme
                                <input
                                    className="input_payment"
                                    type="text"
                                    value={cardCryptoNumber}
                                    onChange={() => console.log('change')}
                                    placeholder={wording.CARD_EXAMPLE_PLACEHOLDER}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text_bottom_payment">
                    <p>*Champ obligatoire</p>
                    <p>
                        Vous êtes sur un serveur de paiement sécurisé par les normes ssl
                        (https) et pcidss de nos partenaires bancaires. Vos données sont
                        encryptées pour plus de sécurité.
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: 'center', marginTop: 42, marginBottom: 164 }}>
                    <BtnNext title="Confirmer" onClick={() => handlePayment()} style={{ width: 252, height: 42 }} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Payment;
