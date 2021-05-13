import React from "react";
import NumberFormat from "react-number-format";
import {getPlural} from "../../utils";
import PropTypes from "prop-types";

import "./range-field.scss";
import RangeSlider from "../range-slider/range-slider";

const RangeField = (props) => {

  const {
    settings,
    fieldValue,
    rangeValue,
    onChangeFieldValue,
    onChangeRangeValue,
    viewMaxLabel
  } = props;

  const {name, min, max, step, rangeSuffixes, fieldSuffixes} = settings;

  return (
    <div className="range-field">
      <h3 className="range-field__title">{name}</h3>
      <NumberFormat
        className="range-field__content"
        thousandSeparator={` `}
        thousandsGroupStyle="thousand"
        suffix={` ${getPlural(fieldValue, fieldSuffixes)}`}
        value={fieldValue}
        onValueChange={(values) => {
          onChangeFieldValue(values.floatValue);
        }}
      />

      <RangeSlider
        min={min}
        max={max}
        step={step}
        suffixes={rangeSuffixes}
        values={rangeValue}
        onChangeRange={(values) =>{
          onChangeRangeValue(values);
        }}
        viewMaxLabel={viewMaxLabel}
      />
    </div>
  );
};


RangeField.propTypes = {
  settings: PropTypes.shape({
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    rangeSuffixes: PropTypes.arrayOf(PropTypes.string),
    fieldSuffixes: PropTypes.arrayOf(PropTypes.string)
  }),
  fieldValue: PropTypes.number,
  rangeValue: PropTypes.array.isRequired,
  onChangeFieldValue: PropTypes.func.isRequired,
  onChangeRangeValue: PropTypes.func.isRequired,
  viewMaxLabel: PropTypes.bool
};

export default RangeField;
