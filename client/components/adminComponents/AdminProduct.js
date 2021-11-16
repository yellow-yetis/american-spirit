import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../../store/admin';
import EditProduct from './EditProduct';

class AdminProduct extends Component {
  componentDidMount() {
    console.log('this is my product id ', this.props.match.params.productId);
    this.props.loadSingleProduct(this.props.match.params.productId);
  }

  render() {
    console.log('these are my props ', this.props);
    console.log('this is my state ', this.state);
    const name = this.props.product.name || '';
    const type = this.props.product.category || '';
    const description = this.props.product.description || '';
    const price = this.props.product.price || '';
    const ABV = this.props.product.ABV || '';
    return (
      <div>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{description}</p>
        <h2>Price: {price}</h2>
        <h2>{ABV}</h2>
        <EditProduct />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.admin.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
