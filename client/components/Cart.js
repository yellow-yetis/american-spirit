import React, { Component } from 'react';
import { connect } from 'react-redux';
//import cartLiquor from '../../server/db/models/cartLiquors';
import { fetchCartProducts, updateCart, removeProductFromCart } from '../store/cart';
import { fetchCartTotals } from '../store/cartTotals';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      productArr: [],
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.removeItem = this.removeItem.bind(this);

  }

  showModal(event) {
    this.setState({
      show: true,
    });
  }

  componentDidMount() {
    this.props.fetchCartProducts(this.props.userId);
    this.props.fetchCartTotals(this.props.userId);
  }

  handleChange(e, product){
    let itemUpdatedInCart = {
      ...product,
      cartLiquor: {
        liquorQuantity: e.target.value,
        liquorTotalPrice: e.target.value * product.price,
      }
    }
    this.props.updateCart(this.props.userId, itemUpdatedInCart);
    this.props.fetchCartTotals(this.props.userId);
  }

  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCartProducts: (id) => dispatch(fetchCartProducts(id)),
    fetchCartTotals: (id) => dispatch(fetchCartTotals(id)),
    updateCart: (userId, product) => dispatch(updateCart(userId, product)),
    removeProductFromCart: (userId, productId) => dispatch(removeProductFromCart(userId, productId))
  };
};

export default connect(mapState, mapDispatch)(Cart);
