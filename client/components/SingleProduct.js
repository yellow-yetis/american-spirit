import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/singleProduct';
import { addToCart } from '../store/cart';

class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      quantityToBuy: 1,
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.productId);
  }

  handleChange(e) {
    if (e.target.value <= 0) {
      this.setState({
        quantityToBuy: 1,
        error: 'Only product quantities of 1 or greater are allowed',
      });
    } else if (e.target.value > this.props.product.stock) {
      this.setState({
        error:
          'We do not have that many products in stock, please lower quantity',
      });
    } else {
      this.setState({
        quantityToBuy: parseInt(e.target.value),
        error: '',
      });
    }
  }

  handleAddToCart(e, product, quantity) {
    let key = 'product' + product.id.toString();
    let itemAddedToCart = {
      ...product,
      liquorQuantity: quantity,
      liquorTotalPrice: quantity * product.price,
      error: '',
    };

    if (!this.props.isLoggedIn && this.state.error === '') {
      localStorage.setItem(key, JSON.stringify(itemAddedToCart));
    }

    if (this.props.isLoggedIn && this.state.error === '') {
      this.props.addToCart(product.id, this.props.userId, itemAddedToCart);
    }
  }

  render() {
    const image = this.props.product.imageUrl || '';
    const name = this.props.product.name || '';
    const type = this.props.product.category || '';
    const description = this.props.product.description || '';
    const region = this.props.product.region || '';
    const price = this.props.product.price || '';
    const ABV = this.props.product.ABV || '';
    const Size = this.props.product.size || '';

    return (
      <div className='single-product'>
      <div className='col-right'>
        <img src={image} align="left"/>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{description}</p>
        <h2>Made in {region}</h2>
        <h2>Price: ${price}</h2>
        <h3>ABV: {ABV}%</h3>
        <h3>{Size}ml</h3>
        <div className='quantity'>
          <label>Select Quantity:</label>
          <input style={{width: "45px"}}
            type='number'
            min='1'
            defaultValue='1'
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          {this.state.error ? (
            <h4 style={{ color: 'red' }}>{this.state.error}</h4>
          ) : (
            <h4></h4>
          )}
        </div>
        <div>
          <button className='add-to-cart'
            onClick={(e) =>
              this.handleAddToCart(
                e,
                this.props.product,
                this.state.quantityToBuy
              )
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    addToCart: (productId, userId, itemAddedToCart) =>
      dispatch(addToCart(productId, userId, itemAddedToCart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
