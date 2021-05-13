import React, {Fragment} from "react";
import PropTypes from "prop-types";
import "./offer.scss";

const Offer = (props) => {
  const {
    creditSum,
    creditPercent,
    monthlyPay,
    salary,
    minSumOfCredit,
    names,
    onBtnClick
  } = props;

  return (
    <div className="offer">
      {
        !creditSum || creditSum < minSumOfCredit
          ?
          (<div className="offer__error-params">
            <h3 className="offer__head">Наш банк не выдает {names[1]} кредиты меньше {minSumOfCredit.toLocaleString()} рублей</h3>
            <p className="offer__name">Попробуйте использовать другие параметры расчета</p>
          </div>)
          :
          (<Fragment>
            <h3 className="offer__head">Наше предложение</h3>
            <ul className="offer__list">
              <li className="offer__item">
                <p className="offer__value">{creditSum.toLocaleString()} рублей</p>
                <p className="offer__name">Сумма {names[0]}</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{creditPercent.toFixed(2)}%</p>
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
            <button
              className="offer__btn"
              onClick={onBtnClick}
              type="button">Оформить заявку</button>
          </Fragment>)
      }
    </div>
  );
};

Offer.propTypes = {
  creditSum: PropTypes.number,
  creditPercent: PropTypes.number,
  monthlyPay: PropTypes.number,
  salary: PropTypes.number,
  minSumOfCredit: PropTypes.number,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBtnClick: PropTypes.func.isRequired
};

export default Offer;
