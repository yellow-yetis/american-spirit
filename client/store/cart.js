import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

export const fetchCartProducts = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cart`);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};
