import React, {useState, useEffect} from 'react';
import './Login.scss';
// COMPONENT
import Navbar from '../../component/navbar/Navbar';
import BtnLogin from '../../component/btnLogin/BtnLogin';
import BtnNext from '../../component/btn/BtnNext';
// REDUX
import {loginAction} from '../../redux/actions/AuthAction';
import {useDispatch, useSelector} from 'react-redux';

export default function Login({history, location}) {
  // STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // REDUX
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      loginAction(email, password, () => {
        return history.push('/');
      }),
    );
  };
  return (
    <div>
      <Navbar location={location} />
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
          <div className="wrapper_input_login" style={{marginTop: 9}}>
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
            <a href="/register">M'inscrire</a>
          </p>
        </div>
      </div>
    </div>
  );
}
