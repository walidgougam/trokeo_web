import React, { useState, useEffect } from 'react';
import './Login.scss';
import {
  Link,
} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginUrl } from '../../API/constants';
/** COMPONENT */
import Navbar from '../../component/navbar/Navbar';
import BtnLogin from '../../component/btn/btnLogin/BtnLogin';
import BtnNext from '../../component/btn/BtnNext';
import Loader from 'react-loader';
/** REDUX */
import { loginAction } from '../../redux/actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';
import wording from '../../constant/wording';

function Login({ history, location }) {
  /** STATE */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /** REDUX */
  const dispatch = useDispatch();
  const login = useSelector((state) => state.authReducer);

  const handleLogin = async () => {
    axios({
      method: 'POST',
      url: loginUrl,
      data: { email, password },
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwt') },
    }).then((res) => {
      const errors = res.data.errors;
      console.log(errors, 'errors');
      if (!errors)
      {
        localStorage.setItem('userId', res.data.user);
        history.push('/');
      } else
      {
        if (errors.email !== '')
        {
          toast.error(errors.email);
        }
        if (errors.password !== '')
        {
          toast.error(errors.password);
        }
      }
    });
  };

  return (
    <div>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="wrapper_input_login" style={{ marginTop: 9 }}>
            <label className="label_login">Votre mot de passe</label>
            <br />
            <input
              className="input_login"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="forget_password_login">Mot de passe oublié</p>
          <BtnNext title="Continuer" onClick={() => handleLogin()} />
          <p className="register_login">
            <Link to={wording.REGISTER_URL}>M'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
