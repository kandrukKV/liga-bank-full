import React, {useState} from 'react';
import Logo from '../logo/logo';
import './header.scss';
import Nav from "../nav/nav";
import {MENU_LIST} from '../../const';
import sprite from '../../img/header-sprites.svg';
import Modal from "../modal/modal";
import LoginForm from "../login-form/login-form";

const Header = () => {

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={`header theme-container${isMobileMenuOpen ? ` header--nav-open` : ``}`}>
        <div className="header__left">
          <button
            className="header__hamburger-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg className="header__hamburger-icon" width="16" height="12">
              <use href={sprite + `#hamburger`}/>
            </svg>
          </button>
          <Logo/>
          <Nav menuList={MENU_LIST} onLoginBtnClick={() => {
            setIsMobileMenuOpen(false);
            setIsLoginModalOpen(true);
          }}/>
        </div>
        <div className="header__right">
          <button
            className="header__btn"
            onClick={() => isMobileMenuOpen ? setIsMobileMenuOpen(false) : setIsLoginModalOpen(true)}
          >
            <svg className="header__icon header__icon--door" width="20" height="22">
              <use href={sprite + `#exit`}/>
            </svg>
            <svg className="header__icon header__icon--cross" width="20" height="22">
              <use href={sprite + `#cross`}/>
            </svg>
            <p className="header__login">Войти в Интернет банк</p>
          </button>
        </div>
      </div>
      {
        isLoginModalOpen &&
        <Modal setIsOpen={setIsLoginModalOpen} addClass="header__modal">
          <LoginForm closeForm={() => setIsLoginModalOpen(false)}/>
        </Modal>
      }
    </>
  );
};

export default Header;
