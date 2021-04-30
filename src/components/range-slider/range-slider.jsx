import React from 'react';
import PropTypes from "prop-types";
import {Range} from 'react-range';
import "./range-slider.scss";
import {getPlural} from "../../utils";
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

const RangeSlider = ({min, max, step, suffixes, values, onChangeRange, viewMaxLabel}) => {

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
            {
              viewMaxLabel && correctValues < (max - (max / 20)) ? <span className="range-slider__scale-label">{max} {getPlural(max, suffixes)}</span> : null
            }
          </div>
        )}
        renderThumb={({props}) => (
          <div className="range-slider__label"
            {...props}
            style={{
              ...props.style,
            }}
          >
            <output className={`range-slider__output${correctValues[0] > (max / 2) ? ` range-slider__output--left` : ``}`} id="output">
              {`${correctValues[0]} ${getPlural(correctValues[0], suffixes)}`}
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
  suffixes: PropTypes.array.isRequired,
  values: PropTypes.array,
  onChangeRange: PropTypes.func.isRequired,
  viewMaxLabel: PropTypes.bool
};

export default RangeSlider;
