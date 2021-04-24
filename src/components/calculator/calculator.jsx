import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ProductSitting} from "../../const";
import {setPurposeValueAction, setInitialValuesAction} from "../../store/actions";
import {getPurposeValue} from '../../store/selectors';
import "./calculator.scss";
import Select from "../select/select";
import Offer from "../offer/offer";
import CreditSettings from "../credit-settings/credit-settings";


const Calculator = (props) => {
  const {
    purposeValue,
    setPurposeValue,
    setInitialValues
  } = props;

  return (
    <section className="calculator theme-container">
      <div className="calculator__wrap">
        <div className="calculator__params">
          <h2 className="calculator__head">Кредитный калькулятор</h2>
          <h3 className="calculator__subhead">Шаг 1. Цель кредита</h3>
          <Select
            value={purposeValue}
            changeValue={(value) => {
              setPurposeValue(value);
              const {propertyCost, initialFee, creditTerm, options} = ProductSitting[value];
              setInitialValues({
                propertyCost: propertyCost.min,
                initialFee: initialFee.min * propertyCost.min / 100,
                creditTerm: creditTerm.min,
                options
              });
            }}
          />
          {
            purposeValue ?
              <CreditSettings
                purposeValue={purposeValue}
                settings={ProductSitting[purposeValue]}
              />
              : null
          }
        </div>
        {
          purposeValue ?
            <Offer
              purposeValue={purposeValue}
              settings={ProductSitting[purposeValue]}
            />
            : null
        }
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  purposeValue: getPurposeValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  setInitialValues(values) {
    dispatch(setInitialValuesAction(values));
  },
  setPurposeValue(value) {
    dispatch(setPurposeValueAction(value));
  }
});

Calculator.propTypes = {
  purposeValue: PropTypes.string,
  setPurposeValue: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
