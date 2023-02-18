import {ALL_PRODUCTS} from './urls';

const handleError = response => {
  if (response.status !== 200) {
    throw new Error('server error');
  }
  // switch(response.status){
  //     case 404
  // }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(ALL_PRODUCTS);
    handleError(response);
    const result = await response.json();
    return [result, ''];
  } catch (error) {
    console.log('error', error);
    return [null, error];
  }
};
