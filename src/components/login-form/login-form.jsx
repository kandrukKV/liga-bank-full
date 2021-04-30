import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import "./login-form.scss";
import Logo from "../logo/logo";
import {LOCAL_STORAGE_KEY} from "../../const";

const LoginForm = ({closeForm}) => {

  const [formData, setFormData] = useState({
    login: ``,
    password: ``
  });

  const [isViewPassword, setIsViewPassword] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const {login, password} = formData;

  useEffect(() => {
    const userData = localStorage.getItem(LOCAL_STORAGE_KEY.user);
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  const onClickSubmitHandler = () => {
    if (login.length === 0 || password.length === 0) {
      setIsFormError(true);
    } else {
      setIsFormError(false);
      localStorage.setItem(LOCAL_STORAGE_KEY.user, JSON.stringify(formData));
      closeForm();
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__top">
        <Logo isWithText={true}/>
      </div>
      <div className="login-form__wrap">
        <label className="login-form__label" htmlFor="login">Логин</label>
        <input
          className="login-form__input"
          id="login" type="text"
          value={login}
          onChange={(evt) => setFormData({
            ...formData,
            login: evt.target.value
          })}
        />
      </div>

      <div className="login-form__wrap">
        <label className="login-form__label login-form__label--pass" htmlFor="login">Пароль</label>
        <div className="login-form__input-wrap">
          {
            !isViewPassword ?
              <input
                className="login-form__input"
                id="login"
                type="password"
                value={password}
                onChange={(evt) => setFormData({
                  ...formData,
                  password: evt.target.value,
                })}
              /> :
              <input
                className="login-form__input"
                id="login"
                type="text"
                value={password || ``}
              />
          }
          <button
            className="login-form__input-inner"
            onMouseDown={() => {
              setIsViewPassword(true);
            }}
            onMouseUp={() => {
              setIsViewPassword(false);
            }}
          >
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.29878 12L6.33638 11.4893L7.13618 8.59185C5.93899 8.16352 4.82634 7.5393 3.84654 6.7463L1.65854 8.86987L0.220528 7.47486L2.40955 5.35228C1.17386 3.91662 0.343585 2.19431 0 0.353927L2 0C2.77134 4.14262 6.50711 7.28557 11 7.28557C15.4919 7.28557 19.2287 4.14262 20 0L22 0.352941C21.6569 2.19358 20.827 3.91624 19.5915 5.35228L21.7795 7.47486L20.3415 8.86987L18.1535 6.7463C17.1737 7.5393 16.061 8.16352 14.8638 8.59185L15.6636 11.4903L13.7012 12L12.9004 9.10155C11.6426 9.31063 10.3574 9.31063 9.0996 9.10155L8.29878 12Z" fill="#1F1E25"/>
            </svg>
          </button>
        </div>
        <div className={`login-form__service${isFormError ? ` login-form__service--error` : ``}`}>
          <a className="login-form__link" href="#">Забыли пароль?</a>
        </div>
      </div>

      <button
        className="login-form__btn"
        type="button"
        onClick={onClickSubmitHandler}
      >Войти</button>

    </div>
  );
};

LoginForm.propTypes = {
  closeForm: PropTypes.func.isRequired
};

export default LoginForm;
