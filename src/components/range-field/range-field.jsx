import React from "react";
import NumberFormat from "react-number-format";
import PropTypes from "prop-types";

import "./range-field.scss";
import RangeSlider from "../range-slider/range-slider";

const RangeField = (props) => {

  const {
    settings,
    fieldValue,
    rangeValue,
    onChangeFieldValue,
    onChangeRangeValue
  } = props;

  const {name, min, max, step, rangeSuffix, fieldSuffix} = settings;

  return (
    <div className="range-field">
      <h3 className="range-field__title">{name}</h3>
      <NumberFormat
        className="range-field__content"
        thousandSeparator={` `}
        thousandsGroupStyle="thousand"
        suffix={fieldSuffix}
        value={fieldValue}
        onValueChange={(values) => {
          onChangeFieldValue(values.floatValue);
        }}
      />

      <RangeSlider
        min={min}
        max={max}
        step={step}
        suffix={rangeSuffix}
        values={rangeValue}
        onChangeRange={(values) =>{
          onChangeRangeValue(values);
        }}
      />
    </div>
  );
};


RangeField.propTypes = {
  settings: PropTypes.shape({
    name: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    rangeSuffix: PropTypes.string.isRequired,
    fieldSuffix: PropTypes.string.isRequired,
  }),
  fieldValue: PropTypes.number,
  rangeValue: PropTypes.array.isRequired,
  onChangeFieldValue: PropTypes.func.isRequired,
  onChangeRangeValue: PropTypes.func.isRequired
};

export default RangeField;
