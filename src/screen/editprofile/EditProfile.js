import React, { useState } from 'react';
import './EditProfile.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

//COMPONENT
import Footer from '../../component/footer/Footer';
import HeaderGreen from '../../component/headerGreen/HeaderGreen';
import Navbar from '../../component/navbar/Navbar.js';
import InputForms from '../../component/input/InputForms';
import PictureIconProfile from '../../component/picture/picture/PictureIconProfile';
import BtnFinish from '../../component/btn/BtnFinish';
import wording from '../../constant/wording';

export default function EditProfile() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [about, setAbout] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [female, setFemale] = useState('');
  const [location, setLocation] = useState('');
  const [checked, setChecked] = useState('');
  return (
    <div>
      <HeaderGreen title="Mise à jour du profil" />
      <div style={{ marginLeft: 139, marginRight: 139 }}>
        <div className="wrapper_picture_editprofile">
          <PictureIconProfile width={86} height={86} />
          <p>Changer ma photo de profil</p>
        </div>
        <p className="label_input_editprofile" style={{ marginTop: 37 }}>
          {wording.LAST_NAME}
        </p>
        <InputForms
          placeholder={wording.LAST_NAME}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className="label_input_editprofile" style={{ marginTop: 20 }}>
          {wording.FIRST_NAME}
        </p>
        <InputForms
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.ABOUT}
        </p>
        <textarea
          value={about}
          style={{ width: 344, height: 145, borderColor: '#BFBDBD' }}></textarea>
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.EMAIL}
        </p>
        <InputForms
          placeholder={wording.EMAIL}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.PHONE}
        </p>
        <InputForms
          placeholder="Téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.GENDER}
        </p>
        <InputForms
          placeholder="Genre"
          value={female}
          onChange={(e) => setFemale(e.target.value)}
        />
        <p className="line_between_section_editprofile"></p>
        <div className="wrapper_location_editprofile">
          <p>Géolocalisation</p>
          <FormGroup>
            <FormControlLabel
              style={{ margin: 0 }}
              control={
                <Switch checked={checked} onChange={() => setChecked(true)} />
              }
            />
          </FormGroup>
        </div>
        <div
          style={{
            margin: 0,
            marginTop: 66,
            marginBottom: 129,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <BtnFinish
            width={320}
            height={42}
            titleBtn="Enregistrer"
            fontSize={16}
            onClick={() => console.log('enrengistrer')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
