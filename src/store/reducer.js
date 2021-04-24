import {ActionTypes} from "./actions";

const initialState = {
  calc: {
    purposeValue: null,
    propertyCost: 0,
    initialFee: 0,
    creditTerm: 0,
    options: null
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_INITIAL_VALUES:
      return {...state, calc: {
        ...state.calc,
        propertyCost: action.payload.propertyCost,
        initialFee: action.payload.initialFee,
        creditTerm: action.payload.creditTerm,
        options: action.payload.options
      }};
    case ActionTypes.SET_PURPOSE_VALUE:
      return {...state, calc: {
        ...state.calc,
        purposeValue: action.payload
      }};
    case ActionTypes.SET_PROPERTY_COST:
      return {...state, calc: {
        ...state.calc,
        propertyCost: action.payload
      }};
    case ActionTypes.SET_INITIAL_FEE:
      return {...state, calc: {
        ...state.calc,
        initialFee: action.payload
      }};
    case ActionTypes.SET_CREDIT_TERM:
      return {...state, calc: {
        ...state.calc,
        creditTerm: action.payload
      }};
    case ActionTypes.CHECK_OPTION:
      const {options} = state.calc;
      const index = options.findIndex((item) => item.id === action.payload);
      const checkedOption = {
        ...options[index],
        checked: !options[index].checked
      };

      return {
        ...state,
        calc: {
          ...state.calc,
          options: [
            ...options.slice(0, index),
            checkedOption,
            ...options.slice(index + 1)
          ]
        }
      };
    default:
      return state;
  }
};
