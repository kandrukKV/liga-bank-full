import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';

const Nav = ({menuList}) => {
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
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  menuList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired
};

export default Nav;
