import React from 'react';
import { fetchProducts } from '../store/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <h1>All Products</h1>
        <div>
          <ul>
            {/*  this.props.products.map(product => {
                return (
                  <li key={product.id}>Product</li>
                )
              }) */}
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    projects: state.products,
  };
};

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
