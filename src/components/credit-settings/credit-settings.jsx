import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./credit-settings.scss";
import PlusField from "../plus-field/plus-field";
import RangeField from "../range-field/range-field";
import {getCreditTerm, getInitialFee, getPropertyCost, getOptions} from "../../store/selectors";
import {checkOptionAction, setCreditTermAction, setInitialFeeAction, setPropertyCostAction} from "../../store/actions";

const calcFieldValue = (rangeValue, projectCost) => {
  if (!rangeValue) {
    return 0;
  }
  return rangeValue * projectCost / 100;
};

const CreditSettings = (props) => {

  const {
    propertyCost,
    initialFee,
    creditTerm,
    options,
    setPropertyCost,
    setInitialFee,
    setCreditTerm,
    checkOption,
    settings
  } = props;

  return (
    <Fragment>
      <h3 className="credit-settings__subhead">Шаг 2. Введите параметры кредита</h3>
      <PlusField
        settings={settings.propertyCost}
        onChangePropertyCost={(value) => {
          setPropertyCost(value ? value : 0);
          setInitialFee(((value ? value : 0) * settings.initialFee.min) / 100);
        }}
        propertyCost={propertyCost}
      />
      <RangeField
        settings={settings.initialFee}
        fieldValue={initialFee}
        rangeValue={[initialFee * 100 / propertyCost]}
        onChangeFieldValue={(value) => setInitialFee(value)}
        onChangeRangeValue={(value) => {
          setInitialFee(calcFieldValue(value, propertyCost));
        }}
      />

      <RangeField
        settings={settings.creditTerm}
        fieldValue={creditTerm}
        rangeValue={[creditTerm]}
        onChangeFieldValue={(value) => {
          setCreditTerm(value);
        }}
        onChangeRangeValue={(value) => setCreditTerm(value)}
      />

      <ul className="credit-settings__options">
        {
          options.map((option, idx) => {
            return (
              <li key={option.name} className="credit-settings__option">
                <input
                  className="credit-settings__checkbox visually-hidden"
                  id={`option-${idx}`}
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => checkOption(option.id)}
                />
                <label className="credit-settings__label" htmlFor={`option-${idx}`}>{option.name}</label>
              </li>
            );
          })
        }
      </ul>

    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  propertyCost: getPropertyCost(state),
  initialFee: getInitialFee(state),
  creditTerm: getCreditTerm(state),
  options: getOptions(state)
});

const mapDispatchToProps = (dispatch) => ({
  setPropertyCost(value) {
    dispatch(setPropertyCostAction(value));
  },
  setInitialFee(value) {
    dispatch(setInitialFeeAction(value));
  },
  setCreditTerm(value) {
    dispatch(setCreditTermAction(value));
  },
  checkOption(id) {
    dispatch(checkOptionAction(id));
  }
});

CreditSettings.propTypes = {
  propertyCost: PropTypes.number,
  initialFee: PropTypes.number,
  creditTerm: PropTypes.number,
  setPropertyCost: PropTypes.func.isRequired,
  setInitialFee: PropTypes.func.isRequired,
  setCreditTerm: PropTypes.func.isRequired,
  checkOption: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  }))
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditSettings);
