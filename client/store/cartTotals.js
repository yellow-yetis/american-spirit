import axios from 'axios';

const SET_CART_TOTALS = 'SET_CART_TOTALS';

export const setCartTotals = (totals) => {
  return {
    type: SET_CART_TOTALS,
    totals
  }
}

export const fetchCartTotals = (id) => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/cart/totals', {
        headers: {
          userId: id
        }
      });
      dispatch(setCartTotals(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default (state = {}, action) => {
  switch(action.type){
    case SET_CART_TOTALS:
      return action.totals
    default:
      return state
  }
}
