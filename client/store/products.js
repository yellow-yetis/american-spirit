import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/products');
    const allProducts = response.data;
    dispatch(setProducts(allProducts));
  }
};

export default (state = [], action) => {
  switch (action.type){
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
