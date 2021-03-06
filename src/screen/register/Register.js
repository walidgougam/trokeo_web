import React, { useState } from 'react';
import './Register.scss';
import { userRegister } from '../../services/userService'
import wording from '../../constant/wording';
/** COMPONENT */
import { BtnFinish, PictureIconProfile, InputForms, InputSelect, Navbar } from '../../component/index'
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import { registerSuccessAction } from '../../redux/actions/AuthAction'

function Register(props) {

  const orgOrGender = {
    ORG: 'organisation',
    TROKEUR: 'trokeur',
    TROKEUSE: 'trokeuse'
  }

  /** STATE */
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: "",
    loading: true,
    errorOnRegister: "",
    errorMessage: "",
    userPicture: undefined
  })

  /** REDUX */
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.authReducer);
  const locationStore = useSelector((state) => state.productReducer.location);

  const handleError = (error) => {
    setState({ ...state, errorMessage: error?.data.error })
    setState({ ...state, errorOnRegister: true })
  }

  const handleRegister = async () => {
    await userRegister(
      state.userPicture[0],
      {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        female: state.type === orgOrGender.TROKEUSE,
        isOrganisation: state.type === orgOrGender.ORG
      },
      (resp) => {
        dispatch(
          registerSuccessAction({
            user: resp?.data?.user,
            token: resp?.data?.token,
          })

        )
        props.history.push('/');
        setState({ ...state, loading: false })
      },
      (err) => {
        handleError(err.response)
        setState({ ...state, errorMessage: err.status === 500 ? 'Something went wrong!' : err?.data?.error, })
        setState({ ...state, loading: false })
      }
    )
  };

  const handleUploadPicture = (e) => {
    setState({ ...state, userPicture: e.target.files });
  };

  const handleInput = (e, stateName) => {
    const value = e.target.value;
    setState({ ...state, [stateName]: value });
  }
  return (
    <div className="allcontainer_register">
      <Navbar history={props.history} />
      <div className="container_register">
        <div className="wrapper_register">
          <p className="text_create_account_register">Créez un compte</p>
          {state.userPicture ?
            <img
              src={URL.createObjectURL(state.userPicture[0])}
              className='image_register'
              alt="msg picture"
            />
            :
            <PictureIconProfile style={{ width: 99, height: 99 }} />
          }
          <div
            className="wrapper_icon_picture_createproduct"
            style={{ borderColor: '#0091FF' }}>
            <label for="file-input" style={{ cursor: 'pointer' }}>
              Ajoute une photo
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleUploadPicture}
            />
          </div>
          <InputForms placeholder={wording.FIRST_NAME} marginBottom={16} changeInput={(e) => handleInput(e, "firstName")} />
          <InputForms placeholder={wording.LAST_NAME} marginBottom={16} changeInput={(e) => handleInput(e, "lastName")} />
          <InputForms placeholder={wording.EMAIL} marginBottom={16} changeInput={(e) => handleInput(e, "email")} />
          <InputForms placeholder={wording.PASSWORD} marginBottom={6} hidePassword={true} changeInput={(e) => handleInput(e, "password")} />
          <p className="text_atleast8_register">
            Il doit contenir au moins 8 caractères.
          </p>
          <InputForms placeholder="Mot de passe" marginBottom={12} changeInput={(e) => handleInput(e, "confirmPassword")} />
          <p className="text_you_are_register">Vous êtes</p>
          <InputSelect
            onChange={(e) => {
              if (e.target.value === 'femme')
              {
                setState({ ...state, type: orgOrGender.TROKEUSE })
              } if (e.target.value === 'homme')
              {
                setState({ ...state, type: orgOrGender.TROKEUR })
              } else
              {
                setState({ ...state, type: orgOrGender.ORG })
              }
            }
            }
          />
          <BtnFinish titleBtn="Terminer" onClick={() => handleRegister()} />
        </div>
      </div>
    </div>
  );
}

export default Register