import React from 'react';
import PropTypes from 'prop-types';
import sprite from '../../img/header-sprites.svg';
import './nav.scss';

const Nav = ({menuList, onLoginBtnClick}) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {menuList.map((item) => {
          return (
            <li key={`menu-${item.id}`} className="nav__item">
              <a className="nav__link" href="#">{item.name}</a>
            </li>
          );
        })}
        <li className="nav__item">
          <button
            className="nav__login-btn"
            type="button"
            onClick={onLoginBtnClick}
          >
            <svg className="nav__icon" width="20" height="22">
              <use href={sprite + `#exit`}/>
            </svg>
            Войти в Интернет-банк
          </button>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  onLoginBtnClick: PropTypes.func.isRequired
};

export default Nav;
