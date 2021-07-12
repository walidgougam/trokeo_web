import React from 'react';
import './ErrorImageComponent.scss'
/** PICTURE */
import { ReactComponent as NoProductImage } from '../../asset/allSvg/noProduct.svg';
import { ReactComponent as NoInternetImage } from '../../asset/allSvg/no_internet.svg';
/** COMPONENT */
import { BtnFinish } from '../index';
import wording from '../../constant/wording';

function ErrorImageComponent({ onPress, type }) {
    const titleOfError = () => {
        switch (type)
        {
            case wording.NO_INTERNET:
                return 'Oups, il semblerait que vous n’avez pas de connexion internet' // replace by NO_INTERNET_MESSAGE
            case wording.NO_PRODUCT:
                return 'Désolé, pour le moment, aucune demande n’a été mise en ligne' //replace by  NO_PRODUCT_MESSAGE
            case wording.NO_MESSAGE:
                return "Vous n'avez pas encore de message" // replace by NO_MESSAGE_MESSAGE
            case wording.NO_NOTIFICATION:
                return "Vous n'avez pas encore reçu de notification"
        }
    }

    const iconOfError = () => {
        switch (type)
        {
            case wording.NO_INTERNET:
                return <NoInternetImage />
            case wording.NO_PRODUCT:
                return <NoProductImage />
            case wording.NO_MESSAGE:
                return <NoProductImage />
            case wording.NO_NOTIFICATION:
                return <NoProductImage />
        }
    }
    return (
        <div className='container_errorimagecomponent'>
            <p className="title_errorimagecomponent">{titleOfError()}</p>
            {iconOfError()}
        </div>
    );
}

export default ErrorImageComponent