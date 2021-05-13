import React, {useState} from "react";
import PropTypes from "prop-types";
import {CreditGoals} from "../../const";
import "./select.scss";

const Select = ({value, changeValue}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const options = Object.values(CreditGoals);

  const onChangeValue = (elValue) => {
    changeValue(elValue);
    setIsSelectOpen(false);
  };

  return (
    <div
      className={`select${isSelectOpen ? ` select--open` : ``}`}
      onClick={() => setIsSelectOpen((current) => !current)}
    >
      <div className="select__value">
        <span>{!value ? `Выберите цель кредита` : value}</span>
        <button className="select__btn">
          <span className="visually-hidden">Кнопка</span>
        </button>
      </div>
      <ul className="select__options">
        {
          options.map((item) => <li
            key={item}
            onClick={() => onChangeValue(item)}
            className="select__item">{item}
          </li>)
        }
      </ul>
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func.isRequired
};

export default Select;
