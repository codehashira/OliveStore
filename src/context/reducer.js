import actionTypes from './actionTypes';

export const initialState = {
  data: [],
  categories: [],
  bag: [],
  favourites: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STORE_DATA: {
      const categories = new Set();
      action.payload.forEach(item => {
        if (!categories.has(item.category)) {
          categories.add(item.category);
        }
      });
      return {
        ...state,
        data: action.payload,
        categories: Array.from(categories),
      };
    }
    case actionTypes.ADD_TO_BAG: {
      return {
        ...state,
        bag: [...state.bag, action.payload],
      };
    }
    case actionTypes.REMOVE_FROM_BAG: {
      const newBagData = state.bag.filter(item => item.id !== action.payload);
      return {
        ...state,
        bag: newBagData,
      };
    }
    default:
      return state;
  }
};
