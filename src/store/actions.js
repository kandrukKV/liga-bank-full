export const ActionTypes = {
  SET_INITIAL_VALUES: `SET_INITIAL_VALUES`,
  SET_PURPOSE_VALUE: `SET_PURPOSE_VALUE`,
  SET_PROPERTY_COST: `SET_PROPERTY_COST`,
  SET_INITIAL_FEE: `SET_INITIAL_FEE`,
  SET_CREDIT_TERM: `SET_CREDIT_TERM`,
  CHECK_OPTION: `CHECK_OPTION`,
  INC_CURRENT_NUMBER_OF_OFFER: `INC_CURRENT_NUMBER_OF_OFFER`
};

export const setInitialValuesAction = (values) => ({
  type: ActionTypes.SET_INITIAL_VALUES,
  payload: values
});


export const setPurposeValueAction = (value) => ({
  type: ActionTypes.SET_PURPOSE_VALUE,
  payload: value
});

export const setPropertyCostAction = (value) => ({
  type: ActionTypes.SET_PROPERTY_COST,
  payload: value
});

export const setInitialFeeAction = (value) => ({
  type: ActionTypes.SET_INITIAL_FEE,
  payload: value
});

export const setCreditTermAction = (value) => ({
  type: ActionTypes.SET_CREDIT_TERM,
  payload: value
});

export const checkOptionAction = (value) => ({
  type: ActionTypes.CHECK_OPTION,
  payload: value
});

export const incCurrentNumberOfOfferAction = () => ({
  type: ActionTypes.INC_CURRENT_NUMBER_OF_OFFER
});
