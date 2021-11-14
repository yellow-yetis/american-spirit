import axios from 'axios';

const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';

export const setCartProducts = (productsInCart) => {
  return {
    type: SET_CART_PRODUCTS,
    productsInCart: productsInCart || null,
  };
};

export const fetchCartProducts = (id) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/cart`, {
        headers: {
          userId: id
        }
      });
      dispatch(setCartProducts(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export const _addToCart = product => {
  return {
    type: ADD_TO_CART,
    product
  };
};

export const addToCart = (productId, userId, itemAddedToCart) => {
  return async (dispatch) => {
    try {
      const {data: updated} = await axios.put(`/api/products/${productId}`, {
        userId: userId,
        itemAddedToCart: itemAddedToCart
      })
      dispatch(_addToCart(updated))
    } catch (error) {
      console.log(error);
    }
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return action.productsInCart
    case ADD_TO_CART:
      return [...state, action.product]
    default:
      return state;
  }
};
