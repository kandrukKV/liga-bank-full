import React from 'react';
import Logo from '../logo/logo';
import './header.scss';
import Nav from "../nav/nav";
import {MENU_LIST} from '../../const';
import sprite from '../../img/header-sprites.svg';

const Header = () => {
  return (
    <div className="header theme-container">
      <div className="header__left">
        <button className="header__hamburger-btn" type="button">
          <svg className="header__hamburger-icon" width="16" height="12">
            <use href={sprite + `#hamburger`}/>
          </svg>
        </button>
        <Logo/>
        <Nav menuList={MENU_LIST}/>
      </div>
      <div className="header__right">
        <a className="header__link" href="#">
          <svg className="header__icon" width="20" height="22">
            <use href={sprite + `#exit`}/>
          </svg>
          <p className="header__login">Войти в Интернет банк</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
