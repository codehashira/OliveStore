const {createContext, useContext} = require('react');

export const StoreStateContext = createContext(null);
export const StoreDispatchContext = createContext(null);

export const useOliveStore = () => {
  return useContext(StoreStateContext);
};

export const useOliveDispatch = () => {
  return useContext(StoreDispatchContext);
};
