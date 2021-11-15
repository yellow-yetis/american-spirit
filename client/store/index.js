import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import allProducts from './products';
import singleProduct from './singleProduct';
import allUsers from './admin';
import vodka from './vodka';

const reducer = combineReducers({
  auth,
  product: singleProduct,
  products: allProducts,
  vodka: vodka,
  users: allUsers,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
