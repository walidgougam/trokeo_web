import React, { useState, useEffect } from 'react';
import './Login.scss';
import {
  Link,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader';
import axios from 'axios';
import { loginUrl } from '../../API/constant';
import wording from '../../constant/wording';
/** COMPONENT */
import { Navbar, BtnLogin, BtnNext } from '../../component/index'
/** REDUX */
import { loginAction } from '../../redux/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../services/userService'
import { loginSuccessAction, isGuestAction } from "../../redux/actions/AuthAction";
import { categorySuccessAction } from "../../redux/actions/CategoryAction";
import { getCategories } from "../../services/categoryService";

function Login(props) {
  /** STATE */
  const [state, setState] = useState({
    email: '',
    password: '',
    errorOnLogin: '',
    errorMessage: ''
  })
  /** REDUX */
  const dispatch = useDispatch();
  const login = useSelector((state) => state.authReducer);

  // const handleLogin = async () => {
  //   axios({
  //     method: 'POST',
  //     url: loginUrl,
  //     data: { email, password },
  //     headers: { Authorization: 'Bearer ' + localStorage.getItem('jwt') },
  //   }).then((res) => {
  //     const errors = res.data.errors;
  //     console.log(errors, 'errors');
  //     if (!errors)
  //     {
  //       localStorage.setItem('userId', res.data.user);
  //       history.push('/');
  //     } else
  //     {
  //       if (errors.email !== '')
  //       {
  //         toast.error(errors.email);
  //       }
  //       if (errors.password !== '')
  //       {
  //         toast.error(errors.password);
  //       }
  //     }
  //   });
  // };

  const handleState = (event) => {
    const value = event.target.value;
    setState({ ...state, [event.target.name]: value })
  }

  const handleLogin = async () => {
    await userLogin(
      state.email,
      state.password,
      async (resp) => {
        // when auth success get all categories
        console.log('je suis dedans')
        await getCategories(
          (resp) => {
            dispatch(
              categorySuccessAction({ categories: resp.data.categories })
            );
          },
          (err) => {
            setState({ ...state, errorOnLogin: true })
            setState({ ...state, errorMessage: err.status === 500 ? "Something went wrong!" : err.data.error })
          }
        );
        dispatch(
          loginSuccessAction({ user: resp.data.user, token: resp.data.token })
        );
        props.history.push('/');
      },
      (resp) => {
        setState({ ...state, errorOnLogin: true })
        setState({ ...state, errorMessage: resp.status === 500 ? "Something went wrong!" : resp.data.error })
      }
    );

  }

  return (
    <div>
      <Navbar props={props} />
      <ToastContainer />
      <div className="container_login">
        <div className="wrapper_login">
          <p className="welcome_login">Bienvenue</p>
          <p className="text_topic_login">
            L’application éco-responsable et solidaire de troc d’objets et de
            services entre particuliers !
          </p>
          <BtnLogin title="Login avec Google" />
          <BtnLogin title="Login avec Facebook" />
          <div className="wrapper_input_login">
            <label className="label_login">Votre adresse email</label>
            <br />
            <input
              className="input_login"
              type="text"
              name='email'
              onChange={(e) => handleState(e.target.value)}
            />
          </div>
          <div className="wrapper_input_login" style={{ marginTop: 9 }}>
            <label className="label_login">Votre mot de passe</label>
            <br />
            <input
              className="input_login"
              type="text"
              name='password'
              onChange={(e) => handleState(e.target.value)}
            />
          </div>

          <p className="forget_password_login">Mot de passe oublié</p>
          <BtnNext title="Continuer" onClick={() => handleLogin()} />
          <p className="register_login">
            <Link to={wording.REGISTER_URL} style={{ color: "black" }}>M'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
