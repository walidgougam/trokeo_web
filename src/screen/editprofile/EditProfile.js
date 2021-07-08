import React, { useState } from 'react';
import './EditProfile.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import wording from '../../constant/wording';
/** COMPONENT */
import {
  Footer,
  HeaderGreen,
  Navbar,
  InputForms,
  PictureIconProfile,
  BtnFinish,
} from '../../component/index';
import SelectOption from '../../component/selectOption/SelectOption';

function EditProfile(props) {
  const [state, setState] = useState({
    lastName: '',
    firstName: '',
    about: '',
    email: '',
    phoneNumber: '',
    female: false,
    location: '',
    checked: '',
  });

  const handleState = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  return (
    <>
      <Navbar props={props} />
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
          value={state.lastName}
          name="lastName"
          changeInput={(e) => handleState(e)}
        />
        <p className="label_input_editprofile" style={{ marginTop: 20 }}>
          {wording.FIRST_NAME}
        </p>
        <InputForms
          placeholder="Prénom"
          value={state.firstName}
          name="firstName"
          changeInput={(e) => handleState(e)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.ABOUT}
        </p>
        <textarea
          value={state.about}
          name="about"
          style={{ width: 344, height: 145, borderColor: '#BFBDBD' }}
          onChange={(e) => handleState(e)}></textarea>
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.EMAIL}
        </p>
        <InputForms
          placeholder={wording.EMAIL}
          value={state.email}
          name="email"
          changeInput={(e) => handleState(e.target.value)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.PHONE}
        </p>
        <InputForms
          placeholder="Téléphone"
          value={state.phoneNumber}
          name="phoneNumber"
          changeInput={(e) => handleState(e)}
        />
        <p className="line_between_section_editprofile"></p>
        <p className="label_input_editprofile" style={{ marginTop: 28 }}>
          {wording.GENDER}
        </p>
        <SelectOption goodsCondition={['male', 'female']} />
        {/* <InputForms
          placeholder="Genre"
          value={state.female}
          name="female"
          changeInput={(e) => handleState(e)}
        /> */}
        <p className="line_between_section_editprofile"></p>
        <div className="wrapper_location_editprofile">
          <p>Géolocalisation</p>
          <FormGroup>
            <FormControlLabel
              style={{ margin: 0 }}
              control={
                <Switch checked={state.checked} onChange={() => setState({ ...state, checked: !state.checked })} />
              }
            />
          </FormGroup>
        </div>
        <div
          className="wrapper_btn_editprofile">
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
    </>
  );
}

export default EditProfile;
