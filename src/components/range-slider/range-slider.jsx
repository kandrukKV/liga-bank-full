import React from 'react';
import PropTypes from "prop-types";
import {Range} from 'react-range';
import "./range-slider.scss";

const correctRange = (values, min, max) => {
  if (!values[0]) {
    return [min];
  }

  if (values[0] < min) {
    return [min];
  }

  if (values[0] > max) {
    return [max];
  }

  return values;
};

const RangeSlider = ({min, max, step, suffix, values, onChangeRange}) => {

  const correctValues = correctRange(values, min, max);

  return (
    <div className="range-slider">
      <Range
        min={min}
        max={max}
        step={step}
        values={correctValues}
        onChange={(val) => onChangeRange(val[0])}
        renderTrack={({props, children}) => (
          <div className="range-slider__scale"
            {...props}
            style={{
              ...props.style
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({props}) => (
          <div className="range-slider__label"
            {...props}
            style={{
              ...props.style,
            }}
          >
            <output className="range-slider__output" id="output">
              {`${correctValues[0].toFixed(0)} ${suffix}`}
            </output>
          </div>
        )}
      />
    </div>
  );
};

RangeSlider.propTypes = {
  style: PropTypes.object,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
  values: PropTypes.array,
  onChangeRange: PropTypes.func.isRequired
};

export default RangeSlider;
