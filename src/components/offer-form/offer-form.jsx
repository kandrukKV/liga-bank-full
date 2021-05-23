import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import propSettings from "../credit-settings/credit-settings.prop";
import NumberFormat from "react-number-format";
import {getPlural, addZero, isFormValidation} from "../../utils";
import {NUMBER_OF_DIGITAL, LOCAL_STORAGE_KEY} from "../../const";
import "./offer-form.scss";

const OfferForm = ({settings, propertyCost, initialFee, creditTerm, numberOfOffer, onClickSubmit}) => {

  const [formData, setFormData] = useState({
    userName: ``,
    phone: ``,
    email: ``,
  });

  const [isFormError, setIsFormError] = useState(false);
  const {userName, phone, email} = formData;

  useEffect(() => {
    const userData = localStorage.getItem(LOCAL_STORAGE_KEY.data);
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  const clickSubmitHandler = () => {
    if (isFormValidation(userName, phone, email)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
      onClickSubmit(formData);
    } else {
      setIsFormError(true);
    }
  };

  return (
    <div className="offer-form">
      <h3 className="offer-form__title">Шаг 3. Оформление заявки</h3>
      <ul className="offer-form__list">
        <li className="offer-form__item">
          <span className="offer-form__key">Номер заявки</span>
          <span className="offer-form__value">№ {addZero(numberOfOffer, NUMBER_OF_DIGITAL)}</span>
        </li>

        <li className="offer-form__item">
          <span className="offer-form__key">Цель кредита</span>
          <span className="offer-form__value">{settings.purpose}</span>
        </li>
        <li className="offer-form__item">
          <span className="offer-form__key">{settings.propertyCost.name}</span>
          <span className="offer-form__value">
            {propertyCost.toLocaleString()} {getPlural(propertyCost, settings.propertyCost.fieldSuffixes)}
          </span>
        </li>
        <li className="offer-form__item">
          <span className="offer-form__key">Первоначальный взнос</span>
          <span className="offer-form__value">
            {initialFee.toLocaleString()} {getPlural(initialFee, settings.initialFee.fieldSuffixes)}
          </span>
        </li>
        <li className="offer-form__item">
          <span className="offer-form__key">Срок кредитования</span>
          <span className="offer-form__value">
            {creditTerm} {getPlural(creditTerm, settings.creditTerm.fieldSuffixes)}
          </span>
        </li>
      </ul>

      <div className="offer-form__wrap">
        <input
          className="offer-form__input-name"
          type="text"
          placeholder="ФИО"
          value={userName}
          autoFocus
          aria-label={`name`}
          onChange={(evt) =>{
            setFormData({
              ...formData,
              userName: evt.target.value
            });
          }}
        />
      </div>

      <div className="offer-form__wrap">
        <NumberFormat
          className="offer-form__input-phone"
          format="# (###) ###-####"
          mask="_" placeholder="Телефон"
          value={phone}
          onValueChange={(values) => {
            setFormData({
              ...formData,
              phone: values.floatValue
            });
          }}
        />
        <input
          className="offer-form__input-phone"
          type="email"
          placeholder="E-mail"
          value={email}
          aria-label={`email`}
          onChange={(evt) => {
            setFormData({
              ...formData,
              email: evt.target.value
            });
          }}
        />
      </div>

      {
        isFormError ?
          <div className="offer-form__error-field">
            Проверьте корректность заполнения формы
          </div>
          : null
      }

      <div className="offer-form__wrap-btn">
        <button
          className="offer-form__btn"
          type="button"
          onClick={clickSubmitHandler}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

OfferForm.propTypes = {
  settings: propSettings,
  propertyCost: PropTypes.number,
  numberOfOffer: PropTypes.number,
  initialFee: PropTypes.number,
  creditTerm: PropTypes.number,
  onClickSubmit: PropTypes.func.isRequired
};

export default OfferForm;
