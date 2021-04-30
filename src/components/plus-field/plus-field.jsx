import React, {useState} from "react";
import NumberFormat from "react-number-format";
import {getPlural} from "../../utils";
import PropTypes from "prop-types";
import "./plus-field.scss";

const PlusField = ({propertyCost, onChangePropertyCost, settings}) => {

  const {name, min, max, step, fieldSuffixes} = settings;
  const [isError, setIsError] = useState(false);

  const setFormErrorHandler = (value) => (value < min) || (value > max) ? setIsError(true) : setIsError(false);

  return (
    <div className="plus-field">
      <div className="plus-field__name">{name}</div>
      <div className={`plus-field__input${isError ? ` plus-field__input--error` : ``}`}>
        <button
          className="plus-field__btn plus-field__btn--minus"
          type="button"
          onClick={() => {
            const val = propertyCost - step;
            onChangePropertyCost(val);
            setFormErrorHandler(val);
          }}
        >
          <span className="visually-hidden">-</span>
        </button>
        <NumberFormat
          className="plus-field__content"
          thousandSeparator={` `}
          thousandsGroupStyle="thousand"
          suffix={` ${getPlural(propertyCost, fieldSuffixes)}`}
          value={propertyCost}
          onValueChange={(values) => {
            onChangePropertyCost(values.floatValue);
            setFormErrorHandler(values.floatValue);
          }}
        />
        <button
          className="plus-field__btn plus-field__btn--plus"
          type="button"
          onClick={() => {
            const val = propertyCost + step;
            onChangePropertyCost(val);
            setFormErrorHandler(val);
          }}
        >
          <span className="visually-hidden">+</span>
        </button>
      </div>
      <div className="plus-field__info">{`От ${min.toLocaleString()} до ${max.toLocaleString()} рублей`}</div>
    </div>
  );
};

PlusField.propTypes = {
  propertyCost: PropTypes.number.isRequired,
  onChangePropertyCost: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
    fieldSuffixes: PropTypes.array.isRequired,
  }).isRequired
};

export default PlusField;
