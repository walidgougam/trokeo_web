import { appleAuth } from '@invertase/react-native-apple-authentication';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { API_URL } from '../API/constant';

const onAppleSignIn = async (successCB, errorCB) => {
    try
    {

        const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
        });

        // get current authentication state for user
        const credentialState = await appleAuth.getCredentialStateForUser(
            appleAuthRequestResponse.user,
        );

        if (credentialState === appleAuth.State.NOT_FOUND)
        {
            console.log('user is not found');
            errorCB('user is not found');
        }

        if (credentialState === appleAuth.State.REVOKED)
        {
            console.log('user is revoked');
            errorCB('user is revoked');
        }

        if (credentialState === appleAuth.State.TRANSFERRED)
        {
            console.log('user is not transferred');
            errorCB('user is not transferred');
        }

        let applePayload = {
            ...appleAuthRequestResponse,
        };

        console.log(credentialState, "credential state");
        console.log(applePayload, "applepaylod")

        // use credentialState response to ensure the user is authenticated
        if (credentialState === appleAuth.State.AUTHORIZED)
        {
            axios.post(`${API_URL}/user/loginWithApple`, applePayload)
                .then(data => {
                    console.log("je rentre vbine")
                    console.log('/user/loginWithApple', data);
                    successCB(data.data)
                    Actions.reset('HomeScreen')
                })
                .catch(err => {
                    console.log("apple connect erreur")
                    console.log(err);
                });
        }

    } catch (err)
    {
        if (err === appleAuth.State.CANCELED)
        {
            console.log('Authentication', 'You canceled the authentication process');
        }
    }
};

export default onAppleSignIn;
