import {CreditGoals, MONTHS_OF_THE_YEAR, REGULAR_EMAIL} from "./const";

const calcMonthlyPay = (creditTerm, creditSum, creditPercent) => {
  const monthlyPercent = creditPercent / 100 / MONTHS_OF_THE_YEAR;
  return creditSum * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), creditTerm * MONTHS_OF_THE_YEAR) - 1));
};

const calcSalary = (settings, monthlyPay) => {
  return monthlyPay * 100 / settings.percent.salary;
};

export const calcCreditParams = {
  [CreditGoals.MORTGAGE]: {
    calcCreditSum: (propertyCost, initialFee, options, settings) => {
      return propertyCost - initialFee - (options[0].checked ? settings.maternalCapital : 0);
    },
    calcCreditPercent: (propertyCost, options, initialFee, settings) => {

      const {border, min, max} = settings.percent;
      const currentPercent = initialFee * 100 / propertyCost;

      return currentPercent <= border ? min : max;
    },
    calcMonthlyPay,
    calcSalary
  },
  [CreditGoals.AUTO]: {
    calcCreditSum: (propertyCost, initialFee) => {
      return propertyCost - initialFee;
    },
    calcCreditPercent: (propertyCost, options, initialFee, settings) => {

      const {border, min, max, oneInsurance, bothInsurance} = settings.percent;

      if (options[0].checked && options[1].checked) {
        return bothInsurance;
      }

      if (options[0].checked || options[1].checked) {
        return oneInsurance;
      }

      return propertyCost <= border ? max : min;
    },
    calcMonthlyPay,
    calcSalary
  }
};

export const getPlural = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export const addZero = (number, numberOfDigits) => {
  let result = number.toString();
  const currentLength = result.length;

  for (let i = 0; i < numberOfDigits - currentLength; i++) {
    result = `0${result}`;
  }
  return result;
};

export const isFormValidation = (userName, phone, email) => {
  const valUserName = userName.length > 4;
  const valPhone = !phone ? false : phone.toString().length === 11;
  const valEmail = REGULAR_EMAIL.test(email);

  return valUserName && valPhone && valEmail;
};
