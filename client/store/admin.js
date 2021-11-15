import axios from 'axios';

const TOKEN = 'token';

// action types
const SET_USERS = 'SET_USERS';
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

// action creators
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const _createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

// Thunks
export const createProduct = (product) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: createdProduct } = await axios.post(
        '/api/admin/products',
        product,
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(_createProduct(createdProduct));
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const response = await axios.get('/api/admin/users', {
        headers: {
          authorization: token,
        },
      });
      const allUsers = response.data;
      return dispatch(setUsers(allUsers));
    }
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/admin/products');
    const allProducts = response.data;
    dispatch(setProducts(allProducts));
  };
};

// Reducer
let initialState = {
  users: [],
  products: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.product] };
    default:
      return state;
  }
};
