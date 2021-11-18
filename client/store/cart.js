import axios from 'axios';

const TOKEN = 'token';
const token = window.localStorage.getItem(TOKEN);
const tokenHeader = {
  headers: {
    authorization: token,
  },
};

const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const setCartProducts = (productsInCart) => {
  return {
    type: SET_CART_PRODUCTS,
    productsInCart: productsInCart || null,
  };
};

export const fetchCartProducts = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart`, {
        headers: {
          userId: id,
        },
      });
      dispatch(setCartProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const _updateCart = (product) => {
  return {
    type: UPDATE_CART,
    product,
  };
};

export const _addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const _removeProductFromCart = (product) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    product,
  };
};

export const _clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const addToCart = (productId, userId, itemAddedToCart) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/products/${productId}`, {
        userId: userId,
        itemAddedToCart: itemAddedToCart,
      });
      dispatch(_addToCart(updated));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCart = (userId, updatedProduct) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put('/api/cart', {
      updatedProduct: updatedProduct,
      userId: userId,
    });
    dispatch(_updateCart(updated));
  };
};

export const removeProductFromCart = (userId, productId) => {
  return async (dispatch) => {
    const { data: removed } = await axios.put('/api/cart', {
      productId: productId,
      userId: userId,
    });
    dispatch(_removeProductFromCart(removed));
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    const { data: cleared } = await axios.delete('/api/cart', tokenHeader);
    dispatch(_clearCart(cleared));
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case SET_CART_PRODUCTS:
      return action.productsInCart;
    case ADD_TO_CART:
      return action.product;
    case UPDATE_CART: {
      const newState = state.map((x) =>
        x.id === action.product.id ? action.product : x
      );
      return newState;
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const newState = state.filter((x) => x.id !== action.product.id);
      return newState;
    }
    case CLEAR_CART: {
      return [];
    }
    default:
      return state;
  }
};
