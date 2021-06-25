import React, { useState } from 'react';
import './Register.scss';
import { registerApi } from '../../API';
import wording from '../../constant/wording';
/** COMPONENT */
import { BtnFinish, Navbar, PictureIconProfile, InputForms, InputSelect } from '../../component/index'

function Register({ history, location }) {
  /** STATE */

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    female: false
  })

  const handleRegister = () => {
    registerApi(state.email, state.password, state.firstName, state.lastName, state.female, () => {
      return history.push('/');
    });
  };

  const uploadPicture = () => {
    console.log("upload picture")
  }
  return (
    <>
      <div className="container_register">
        <div className="wrapper_register">
          <p className="text_create_account_register">Créez un compte</p>
          <PictureIconProfile style={{ width: 99, height: 99 }} />
          <p onClick={() => uploadPicture()} className="text_add_picture_register">Ajouter une photo</p>
          <InputForms placeholder={wording.FIRST_NAME} marginBottom={16} />
          <InputForms placeholder={wording.LAST_NAME} marginBottom={16} />
          <InputForms placeholder={wording.EMAIL} marginBottom={16} />
          <InputForms placeholder={wording.PASSWORD} marginBottom={6} hidePassword={true} />
          <p className="text_atleast8_register">
            Il doit contenir au moins 8 caractères.
          </p>
          <InputForms placeholder="Mot de passe" marginBottom={12} />
          <p className="text_you_are_register">Vous êtes</p>
          <InputSelect
            onChange={(e) =>
              e.target.value === 'femme' ? setState({ ...state, female: true }) : setState({ ...state, female: false })
            }
          />
          <BtnFinish titleBtn="Terminer" onClick={() => handleRegister()} />
        </div>
      </div>
    </>
  );
}

export default Register