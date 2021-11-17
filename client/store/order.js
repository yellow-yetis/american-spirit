import axios from 'axios';

const SET_ORDER = 'SET_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';

export const setOrders = orders => {
  return {
    type: SET_ORDER,
    orders,
  };
};

export const createOrder = order => {
  return {
    type: CREATE_ORDER,
    order,
  };
};

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/orders/');
      dispatch(setOrders(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createNewOrder = (order) => {
  return async dispatch => {
    try {
      console.log('this is my order', order);
      const { data: created } = await axios.post('/api/orders/', order);
      console.log('this is my data', created);
      dispatch(createOrder(created));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  allOrders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, allOrders: action.orders };
    case CREATE_ORDER:
      return { ...state, allOrders: [...state.allOrders, action.order] };
    default:
      return state;
  }
};
