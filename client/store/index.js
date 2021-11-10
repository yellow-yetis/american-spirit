<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import products from './products';
import cartProducts from './cart';

const reducer = combineReducers({
  auth,
  products: products,
  cartProducts: cartProducts,
});
=======
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import allProducts from './products';
import singleProduct from './singleProduct';


const reducer = combineReducers({
  auth,
  product: singleProduct,
  products: allProducts
 })
>>>>>>> main

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
