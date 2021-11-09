import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts } from '../store/cart';

export class Cart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        {this.props.products.map(product => {
          return (
            <li key={product.id}>Item 1</li>
            //<img src={.imageUrl} />
          );
        })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    carts: state.products,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchCartProducts: id => dispatch(fetchCartProducts(id)),
  };
};
export default connect(mapState, mapDispatch)(Cart);
