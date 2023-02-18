import actionTypes from './actionTypes';

export const loadOliveStore = payload => {
  return {
    type: actionTypes.LOAD_STORE_DATA,
    payload: payload,
  };
};

export const addToBag = payload => {
  return {
    type: actionTypes.ADD_TO_BAG,
    payload: payload,
  };
};

export const removeFromBag = payload => {
  return {
    type: actionTypes.REMOVE_FROM_BAG,
    payload: payload,
  };
};
