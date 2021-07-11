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
  SelectOption
} from '../../component/index';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { editProfileAction } from "../../redux/actions/ProfileAction";
import { userRefreshAction } from "../../redux/actions/AuthAction";

function EditProfile(props) {
  /** STATE */
  const [state, setState] = useState({
    lastName: '',
    firstName: '',
    about: '',
    email: '',
    phoneNumber: '',
    female: false,
    location: '',
    checked: '',
    userPicture: ''
  });

  /** REDUX */
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.authReducer);

  const handleState = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value });
  };

  function checkIdStateEmpty(obj) {
    for (var key in obj)
    {
      if (obj[key] !== null && obj[key] != "")
        return false;
    }
    return true;
  }


  const prepareData = (userPicture, body) => {
    const data = new FormData()
    if (userPicture)
    {
      data.append('photo', {
        name: userPicture.fileName,
        type: userPicture.type,
        uri: userPicture?.uri
      })
    }
    Object.keys(body).forEach((key) => {
      data.append(key, body[key])
    })
    return data
  }

  const handleEditProfile = async () => {
    let userId = user._id;
    const data = prepareData(state.userPicture, {
      userId,
      firstName: state.firstName,
      lastName: state.lastName,
      about: state.about,
      email: state.email,
      phoneNumber: state.phoneNumber,
      female: state.female,
    })
    dispatch(
      editProfileAction(
        token,
        data,
        (res) => dispatch(userRefreshAction(res))
      )
    );
    props.history.push("/")
  };

  const handleUploadPicture = (e) => {
    setState({ ...state, userPicture: e.target.files });
  };

  return (
    <div className="allcontainer_editprofile">
      <Navbar history={props.history} />
      <HeaderGreen title="Mise à jour du profil" />
      <div className="container_editprofile">
        <div className="wrapper_picture_editprofile">
          {state.userPicture ?
            <img
              src={URL.createObjectURL(state.userPicture[0])}
              className="image_editprofile"
              alt="msg picture"
            />
            :
            <PictureIconProfile style={{ width: 89, height: 86 }} />
          }
          <div
            className="wrapper_text_picture_editprofile"
            style={{ borderColor: '#0091FF' }}>
            <label for="file-input" style={{ cursor: 'pointer' }}>
              Changer ma photo de profil
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleUploadPicture}
            />
          </div>
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
          changeInput={(e) => handleState(e)}
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
        <SelectOption
          goodsCondition={['male', 'female']}
          changeState={(e) => setState({ ...state, female: e.target.value === 'male' ? false : true })}
        />
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
                <Switch
                  checked={state.checked}
                  onChange={() => setState({ ...state, checked: !state.checked })}
                />
              }
            />
          </FormGroup>
        </div>
        <div
          className="wrapper_btn_editprofile"
          style={checkIdStateEmpty(state) ? { opacity: 0.5 } : { opacity: 1 }}>
          <BtnFinish
            width={320}
            height={42}
            titleBtn="Enregistrer"
            fontSize={16}
            onClick={() => handleEditProfile()}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
