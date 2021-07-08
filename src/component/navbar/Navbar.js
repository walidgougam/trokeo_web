import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import {
  NavLink,
} from 'react-router-dom';
/** SVG */
import { ReactComponent as LogoTrokeo } from '../../asset/allSvg/logo.svg';
import { ReactComponent as IconProfileLittle } from '../../asset/allSvg/iconProfileLittle.svg';
/** REDUX */
import { useDispatch, useSelector } from 'react-redux';
import wording from '../../constant/wording';


function Navbar({ props }) {
  /** REDUX */
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.authReducer);
  const { history } = props;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter')
    {
      props.history.push('/product')
    }
  }

  const isNavtitleSelected = '2px #40CE6A solid';
  return (
    <nav className="container_navbar">
      <div className="header_left_navbar">
        <div style={{ margin: 0, cursor: 'pointer' }}>
          <NavLink to="/">
            <LogoTrokeo />
          </NavLink>
        </div>
        <div className="wrapper_input_navbar">
          <input
            type="text"
            className="input_search_word_navbar"
            placeholder="Rechercher des mots clés"
            onKeyDown={handleKeyDown}
          />
          <img
            src={require('../../asset/allSvg/icon_search.svg')}
            alt="Logo"
            className="icon_search_navbar"
          />
        </div>
        <NavLink to={wording.CREATE_PRODUCT_URL} className="create_product_title">
          <div className="add_product_navbar">
            <img
              src={require('../../asset/allSvg/icon_pencil.svg')}
              alt="stylo"
              className="pencil_icon_navbar"
            />
            <p className="text_add_product_navbar">

              Déposer une annonce
            </p>
          </div>
        </NavLink>
      </div>
      <ul className="wrapper_link_navbar">
        {
          userStore.isConnected &&
          <>
            <li>
              <NavLink to={wording.ORGANIZATION_URL}
                activeStyle={{
                  borderBottom: isNavtitleSelected
                }}
                style={{
                  paddingBottom: '3px',
                }}>
                Association
              </NavLink>
            </li>
            <li>
              <NavLink to={wording.FAVORITES_URL}
                activeStyle={{
                  borderBottom: isNavtitleSelected
                }}
                style={{
                  paddingBottom: '3px',
                }}>
                Favoris
              </NavLink>
            </li>
            <li>
              <NavLink
                to={wording.CHAT_URL}
                style={{
                  paddingBottom: '3px',
                }}>
                Messages
              </NavLink>
            </li>
            <li>
              <NavLink to={wording.NOTIFICATION_URL}
                activeStyle={{
                  borderBottom: isNavtitleSelected
                }}
                style={{
                  paddingBottom: '3px',
                }}
              >
                Notifications
              </NavLink>
            </li>
          </>
        }
        <li>
          {userStore.isConnected ? (
            <NavLink
              style={{
                cursor: ' pointer',
              }}
              to="/profile"
              activeStyle={{
                borderBottom: isNavtitleSelected,
                paddingBottom: 2
              }}
            >
              <span
                style={{
                  marginRight: 10,
                  fontSize: 11,
                  position: 'relative',
                  top: 2,
                }}>
                <IconProfileLittle />
              </span>
              {userStore?.user?.firstName}
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              activeStyle={{
                borderBottom: isNavtitleSelected
              }}
              style={{
                paddingBottom: '3px',
              }}>
              Se connecter
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}


export default Navbar