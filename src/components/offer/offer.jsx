import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./offer.scss";
import {getCreditTerm, getInitialFee, getOptions, getPropertyCost} from "../../store/selectors";
import {calcCreditParams} from "../../utils";


const Offer = (props) => {

  const {purposeValue, settings} = props;
  const {minSumOfCredit} = settings;

  const creditSum = calcCreditParams[purposeValue].calcCreditSum(props);
  const creditPercent = calcCreditParams[purposeValue].calcCreditPercent(props);
  const monthlyPay = calcCreditParams[purposeValue].calcMonthlyPay(props, creditSum, creditPercent);
  const salary = calcCreditParams[purposeValue].calcSalary(props, monthlyPay);

  return (
    <div className="offer">
      {
        !creditSum || creditSum < settings.minSumOfCredit
          ?
          (<div className="offer__error-params">
            <h3 className="offer__head">Наш банк не выдает {settings.names[1]} кредиты меньше {minSumOfCredit.toLocaleString()} рублей</h3>
            <p className="offer__name">Попробуйте использовать другие параметры расчета</p>
          </div>)
          :
          (<Fragment>
            <h3 className="offer__head">Наше предложение</h3>
            <ul className="offer__list">
              <li className="offer__item">
                <p className="offer__value">{creditSum.toLocaleString()} рублей</p>
                <p className="offer__name">Сумма {settings.names[0]}</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{creditPercent.toFixed(2)} %</p>
                <p className="offer__name">Процентная ставка</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{Math.floor(monthlyPay).toLocaleString()} рублей</p>
                <p className="offer__name">Ежемесячный платеж</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{Math.floor(salary).toLocaleString()} рублей</p>
                <p className="offer__name">Необходимый доход</p>
              </li>
            </ul>
            <button className="offer__btn" type="button">Оформить заявку</button>
          </Fragment>)
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  propertyCost: getPropertyCost(state),
  initialFee: getInitialFee(state),
  creditTerm: getCreditTerm(state),
  options: getOptions(state)
});

Offer.propTypes = {
  purposeValue: PropTypes.string.isRequired,
  propertyCost: PropTypes.number.isRequired,
  initialFee: PropTypes.number.isRequired,
  creditTerm: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Offer);
