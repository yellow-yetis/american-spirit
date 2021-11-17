import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allProducts from './products';
import singleProduct from './singleProduct';
import adminTools from './admin';
import cartProducts from './cart';
import cartTotals from './cartTotals';
import orders from './order';

const reducer = combineReducers({
  auth,
  product: singleProduct,
  products: allProducts,
  admin: adminTools,
  cartProducts: cartProducts,
  cartTotals: cartTotals,
  orders: orders,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
