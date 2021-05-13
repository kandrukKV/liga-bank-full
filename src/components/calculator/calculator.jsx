import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ProductSitting} from "../../const";
import {setPurposeValueAction, setInitialValuesAction, incCurrentNumberOfOfferAction} from "../../store/actions";
import {getCreditTerm, getInitialFee, getOptions, getPropertyCost, getPurposeValue, getCurrentNumberOfOffer} from '../../store/selectors';
import "./calculator.scss";
import Select from "../select/select";
import Offer from "../offer/offer";
import CreditSettings from "../credit-settings/credit-settings";
import OfferForm from "../offer-form/offer-form";
import {calcCreditParams} from "../../utils";
import Modal from "../modal/modal";

const Calculator = (props) => {
  const {
    currentNumberOfOffer,
    purposeValue,
    propertyCost,
    initialFee,
    creditTerm,
    options,
    setPurposeValue,
    setInitialValues,
    incCurrentNumberOfOffer
  } = props;

  let creditSum = 0;
  let creditPercent = 0;
  let monthlyPay = 0;
  let salary = 0;
  let settings = null;

  if (purposeValue) {
    settings = ProductSitting[purposeValue];
    creditSum = calcCreditParams[purposeValue].calcCreditSum(propertyCost, initialFee, options, settings);
    creditPercent = calcCreditParams[purposeValue].calcCreditPercent(propertyCost, options, initialFee, settings);
    monthlyPay = calcCreditParams[purposeValue].calcMonthlyPay(creditTerm, creditSum, creditPercent);
    salary = calcCreditParams[purposeValue].calcSalary(settings, monthlyPay);
  }

  const [isOpenOfferForm, setIsOpenOfferForm] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <section id="calculator" className="calculator theme-container">
      <h2 className="calculator__head">Кредитный калькулятор</h2>
      <div className="calculator__wrap">
        <div className="calculator__params">
          <h3 className="calculator__subhead">Шаг 1. Цель кредита</h3>
          <Select
            value={purposeValue}
            changeValue={(value) => {
              setPurposeValue(value);
              setInitialValues({
                propertyCost: ProductSitting[value].propertyCost.min,
                initialFee: ProductSitting[value].propertyCost.min * ProductSitting[value].initialFee.min / 100,
                creditTerm: ProductSitting[value].creditTerm.min,
                options: ProductSitting[value].options
              });
            }}
          />
          {
            purposeValue &&
              <CreditSettings
                purposeValue={purposeValue}
                settings={ProductSitting[purposeValue]}
              />
          }
        </div>
        {
          purposeValue &&
            <Offer
              creditSum={creditSum}
              creditPercent={creditPercent}
              monthlyPay={monthlyPay}
              salary={salary}
              minSumOfCredit={ProductSitting[purposeValue].minSumOfCredit}
              names={ProductSitting[purposeValue].names}
              onBtnClick={() => setIsOpenOfferForm(true)}
            />
        }
      </div>
      {
        isOpenOfferForm && purposeValue &&
          <OfferForm
            settings={ProductSitting[purposeValue]}
            propertyCost={propertyCost}
            initialFee={initialFee}
            creditTerm={creditTerm}
            numberOfOffer={currentNumberOfOffer}
            onClickSubmit={() => {
              setIsOpenOfferForm(false);
              setModalIsActive(true);
              setPurposeValue(null);
              incCurrentNumberOfOffer();
            }}
          />
      }
      {
        modalIsActive &&
        <Modal setIsOpen={setModalIsActive}>
          <div className="calculator__modal-inner">
            <h3 className="calculator__modal-header">Спасибо за обращение в наш банк</h3>
            <p className="calculator__modal-txt">
              Наш менеджер скоро свяжется с вами по указанному номеру телефона.
            </p>
          </div>
        </Modal>
      }
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentNumberOfOffer: getCurrentNumberOfOffer(state),
  purposeValue: getPurposeValue(state),
  propertyCost: getPropertyCost(state),
  initialFee: getInitialFee(state),
  creditTerm: getCreditTerm(state),
  options: getOptions(state)
});

const mapDispatchToProps = (dispatch) => ({
  setInitialValues(values) {
    dispatch(setInitialValuesAction(values));
  },
  setPurposeValue(value) {
    dispatch(setPurposeValueAction(value));
  },
  incCurrentNumberOfOffer() {
    dispatch(incCurrentNumberOfOfferAction());
  }
});

Calculator.propTypes = {
  purposeValue: PropTypes.string,
  currentNumberOfOffer: PropTypes.number,
  propertyCost: PropTypes.number,
  initialFee: PropTypes.number,
  creditTerm: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    checked: PropTypes.bool
  })),
  setPurposeValue: PropTypes.func.isRequired,
  setInitialValues: PropTypes.func.isRequired,
  incCurrentNumberOfOffer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
