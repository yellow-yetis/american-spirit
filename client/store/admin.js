import axios from 'axios';

const TOKEN = 'token';

// action types
const SET_USERS = 'SET_USERS';
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

// action creators
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const _createProduct = (product) => ({
  type: CREATE_PRODUCT,
  product,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const _updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const _deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

const setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product,
  };
};

// Thunks
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setSingleProduct(data));
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (product, history) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: updatedProduct } = await axios.put(
        `/api/admin/products/${product.id}`,
        product,
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(_updateProduct(updatedProduct));
      history.push('/admin');
    }
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = (product, history) => async (dispatch) => {
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
      history.push(`/admin/products/${createdProduct.id}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = (id, history) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const { data: deletedProduct } = await axios.delete(
        `/api/admin/products/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      dispatch(_deleteProduct(deletedProduct));
      history.push('/admin/products');
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
    const { data: products } = await axios.get('/api/products');
    dispatch(setProducts(products));
  };
};

// Reducer
let initialState = {
  users: [],
  products: [],
  product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case CREATE_PRODUCT:
      return { ...state, products: [...state.products, action.product] };
    case SET_PRODUCTS:
      return { ...state, products: [...action.products] };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.id !== action.product.id
          ),
        ],
      };
    case SET_SINGLE_PRODUCT:
      return { ...state, product: action.product };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.product.id ? action.product : product
        ),
      };
    default:
      return state;
  }
};
