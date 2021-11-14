import axios from 'axios';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';

export const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

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

export const fetchCartProducts = (id) => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/cart`, {
        headers: {
          userId: id
        }
      });
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  }
}
/*
export const fetchCartProducts = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/${id}/cart`);
      dispatch(setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
}; */

export default (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case ADD_TO_CART:
      return [...state, action.product]
    default:
      return state;
  }
};
