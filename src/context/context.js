const {createContext} = require('react');

const stateContext = createContext(null);
const dispatch = createContext(null);

export const useOliveStore = () => {
  return stateContext;
};

export const useOliveActions = () => {
  return dispatch;
};
