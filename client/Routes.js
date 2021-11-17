import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import AllProducts from './components/AllProducts';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import AllUsers from './components/adminComponents/AllUsers';
import Admin from './components/Admin';
import EditProduct from './components/adminComponents/EditProduct';
import CreateProduct from './components/adminComponents/CreateProduct';

import AllVodka from './components/AllVodka';
import AllGin from './components/AllGin';
import AllTequila from './components/AllTequila';
import AllMezcal from './components/AllMezcal';
import AllRum from './components/AllRum';
import AllWhiskey from './components/AllWhiskey';
import GuestCart from './components/GuestCart';
import { me } from './store';
import AdminProducts from './components/adminComponents/AdminProducts';
import OrderConfirmation from './components/OrderConfirmation';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/login">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/categories/Vodka" component={AllVodka} />
            <Route exact path="/categories/Gin" component={AllGin} />
            <Route exact path="/categories/Tequila" component={AllTequila} />
            <Route exact path="/categories/Mezcal" component={AllMezcal} />
            <Route exact path="/categories/Rum" component={AllRum} />
            <Route exact path="/categories/Whiskey" component={AllWhiskey} />
            <Route exact path="/products/:productId" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/users" component={AllUsers} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/createproduct" component={CreateProduct} />
            <Route exact path="/admin/products" component={AdminProducts} />
            <Route exact path="/admin/products/:productId" component={EditProduct} />

            <Route exact path="/orderConfirmation" component={OrderConfirmation} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/categories/Vodka" component={AllVodka} />
            <Route exact path="/categories/Gin" component={AllGin} />
            <Route exact path="/categories/Tequila" component={AllTequila} />
            <Route exact path="/categories/Mezcal" component={AllMezcal} />
            <Route exact path="/categories/Rum" component={AllRum} />
            <Route exact path="/categories/Whiskey" component={AllWhiskey} />
            <Route exact path="/products/:productId" component={SingleProduct} />
            <Route exact path="/cart" component={GuestCart} />
            <Route exact path="/orderConfirmation" component={OrderConfirmation} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
