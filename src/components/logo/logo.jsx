import React from 'react';
import './logo.scss';
import PropTypes from 'prop-types';
import logoImg from '../../img/logo.svg';
import logoLabel from '../../img/logo-text.svg';

const Logo = ({isWithText = false}) => {

  return (
    <div className={`logo${isWithText ? ` logo--big` : ``}`}>
      <img className="logo__img" src={logoImg} alt="Лига Банк" width="28" height="25"/>
      <div className="logo__wrap">
        <img className="logo__label" src={logoLabel} alt="Лига Банк" width="112" height="14"/>
        <p className="logo__text">интернет-банк</p>
      </div>
    </div>
  );
};

Logo.propTypes = {
  isWithText: PropTypes.bool
};

export default Logo;

