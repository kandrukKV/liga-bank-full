import {CreditGoals, MONTHS_OF_THE_YEAR} from "./const";

export const calcCreditParams = {
  [CreditGoals.MORTGAGE]: {
    calcCreditSum: (args) => {
      const {propertyCost, initialFee, options, settings} = args;
      return propertyCost - initialFee - (options[0].checked ? settings.maternalCapital : 0);
    },
    calcCreditPercent: (args) => {
      const {propertyCost, initialFee, settings} = args;
      const {border, min, max} = settings.percent;
      const currentPercent = initialFee * 100 / propertyCost;

      return currentPercent <= border ? min : max;
    },
    calcMonthlyPay: (props, creditSum, creditPercent) => {
      const {creditTerm} = props;
      const monthlyPercent = creditPercent / 100 / MONTHS_OF_THE_YEAR;
      return creditSum * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), creditTerm * MONTHS_OF_THE_YEAR) - 1));
    },
    calcSalary: (props, monthlyPay) => {
      return monthlyPay * 100 / props.settings.percent.salary;
    }
  },
  [CreditGoals.AUTO]: {
    calcCreditSum: (args) => {
      const {propertyCost, initialFee} = args;
      return propertyCost - initialFee;
    },
    calcCreditPercent: (args) => {
      const {propertyCost, options, settings} = args;
      const {border, min, max, oneInsurance, bothInsurance} = settings.percent;

      if (options[0].checked && options[1].checked) {
        return bothInsurance;
      }

      if (options[0].checked || options[1].checked) {
        return oneInsurance;
      }

      return propertyCost <= border ? max : min;

    },
    calcMonthlyPay: (props, creditSum, creditPercent) => {
      const {creditTerm} = props;
      const monthlyPercent = creditPercent / 100 / MONTHS_OF_THE_YEAR;
      return creditSum * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), creditTerm * MONTHS_OF_THE_YEAR) - 1));
    },
    calcSalary: (props, monthlyPay) => {
      return monthlyPay * 100 / props.settings.percent.salary;
    }
  }
};
