import React, {useState, useEffect} from 'react';
import './Navbar.scss';
// SVG
import {ReactComponent as LogoTrokeo} from '../../asset/allSvg/logo.svg';
import {ReactComponent as IconProfileLittle} from '../../asset/allSvg/iconProfileLittle.svg';
// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {getUserAction} from '../../redux/actions/UserAction';

export default function Navbar({params, history, location}) {
  //STATE
  const [userid, setUserid] = useState();

  // REDUX
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    (async () => {
      const userId = await localStorage.getItem('userId');
      setUserid(userId);
      dispatch(getUserAction(userId));
    })();
  }, []);

  return (
    <div className="container_navbar">
      <div className="header_left_navbar">
        <div style={{margin: 0, cursor: 'pointer'}}>
          <a href="/">
            <LogoTrokeo />
          </a>
        </div>
        <div className="wrapper_input_navbar">
          <input
            type="text"
            className="input_search_word_navbar"
            placeholder="Rechercher des mots clés"
          />
          <img
            src={require('../../asset/allSvg/icon_search.svg')}
            alt="Logo"
            className="icon_search_navbar"
          />
        </div>

        <div className="add_product_navbar">
          <img
            src={require('../../asset/allSvg/icon_pencil.svg')}
            alt="stylo"
            className="pencil_icon_navbar"
          />
          <p className="text_add_product_navbar">Déposer une annonce</p>
        </div>
      </div>
      <ul className="wrapper_link_navbar">
        <li>
          <a
            href="/organization"
            style={{
              paddingBottom: '3px',
              borderBottom:
                location?.pathname === '/organization' && '2px #40CE6A solid',
            }}>
            Association
          </a>
        </li>
        <li>
          <a href="">Favoris</a>
        </li>
        <li>
          <a
            href="/chat"
            style={{
              paddingBottom: '3px',
              borderBottom:
                location?.pathname === '/chat' && '2px #40CE6A solid',
            }}>
            Messages
          </a>
        </li>
        <li>
          {userid ? (
            <a
              style={{
                cursor: ' pointer',
              }}
              href="/profile">
              <span
                style={{
                  marginRight: 10,
                  fontSize: 11,
                  position: 'relative',
                  top: 2,
                }}>
                <IconProfileLittle />
              </span>
              {userData?.firstName}
            </a>
          ) : (
            <a
              href="/login"
              style={{
                paddingBottom: '3px',
                borderBottom:
                  location?.pathname === '/login' && '2px #40CE6A solid',
              }}>
              Se connecter
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}
