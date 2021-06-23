import React, { useState } from 'react';
import './Register.scss';
import { registerApi } from '../../API';
import BtnFinish from '../../component/btn/BtnFinish';
import Navbar from '../../component/navbar/Navbar';
import PictureIconProfile from '../../component/picture/picture/PictureIconProfile';
import InputForms from '../../component/input/InputForms';
import InputSelect from '../../component/inputSelect/InputSelect';
import wording from '../../constant/wording';

export default function Register({ history, location }) {
  // STATE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [female, setFemale] = useState(false);

  const handleRegister = () => {
    registerApi(email, password, firstName, lastName, female, () => {
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
              e.target.value === 'femme' ? setFemale(true) : setFemale(false)
            }
          />
          <BtnFinish titleBtn="Terminer" onClick={() => handleRegister()} />
        </div>
      </div>
    </>
  );
}
