import PropTypes from "prop-types";

export default PropTypes.shape({
  purpose: PropTypes.string,
  percent: PropTypes.shape({
    salary: PropTypes.number,
    border: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
  }),
  maternalCapital: PropTypes.number,
  minSumOfCredit: PropTypes.number,
  propertyCost: PropTypes.shape({
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    fieldSuffixes: PropTypes.arrayOf(PropTypes.string)
  }),
  initialFee: PropTypes.shape({
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    rangeSuffixes: PropTypes.arrayOf(PropTypes.string),
    fieldSuffixes: PropTypes.arrayOf(PropTypes.string)
  }),
  creditTerm: PropTypes.shape({
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    rangeSuffixes: PropTypes.arrayOf(PropTypes.string),
    fieldSuffixes: PropTypes.arrayOf(PropTypes.string)
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    checked: PropTypes.bool
  })),
  names: PropTypes.arrayOf(PropTypes.string)
}).isRequired;

