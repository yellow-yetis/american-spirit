import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts } from '../store/cart';
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
  }

  showModal(event) {
    this.setState({
      show: true,
    });
  }
  componentDidMount() {
    //This will need to be refactored once we account for signed in users.
    //If a user is signed in, axios.get to the db to pull in the product info (eager loading between cartLiquors and Liqour)
    //If not, pull it out of local storage
    let productArr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes('product')) {
        productArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    this.setState({
      productArr: productArr,
    });
  }

  removeItem(liquorId) {
    let updateProductArr = this.state.productArr.filter(
      (x) => x.id !== liquorId
    );
    this.setState({
      productArr: updateProductArr,
    });
    localStorage.removeItem('product' + liquorId);
  }

  sumFinder(itemToSum) {
    return this.state.productArr.reduce(function (prev, curr) {
      return prev + curr[itemToSum];
    }, 0);
  }

  handleChange(e, productId) {
    const updatedQuantity = e.target.value;
    const updateArr = this.state.productArr.filter((x) => x.id === productId);
    const productToUpdate = updateArr[0];

    if (updatedQuantity <= 0) {
      productToUpdate.error =
        'Only product quantities of 1 or greater are allowed';
    } else if (updatedQuantity > productToUpdate.stock) {
      productToUpdate.error =
        'We do not have that many products in stock, please lowerquantity';
    } else {
      productToUpdate.error = '';
      productToUpdate.liquorQuantity = parseInt(updatedQuantity);
      productToUpdate.liquorTotalPrice = parseInt(
        updatedQuantity * productToUpdate.price
      );
    }

    const updatedStateArray = this.state.productArr.map((x) => {
      if (x.id === productToUpdate.id) {
        return { ...productToUpdate };
      } else {
        return x;
      }
    });
    this.setState({
      productArr: updatedStateArray,
    });
  }

  render() {
    return (
      <div>
        <h1 className='center'>Shopping Cart</h1>
        <ul style={{ listStyle: 'none' }}>
          {this.state.productArr.map((product) => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <img className='cartImage' src={product.imageUrl} />
                <div>Total Price: $ {product.liquorTotalPrice}</div>
                <div>
                  Total Quantity:{' '}
                  <input
                    type='number'
                    min='1'
                    defaultValue={product.liquorQuantity}
                    onChange={(e) => this.handleChange(e, product.id)}
                  />
                </div>
                <button onClick={() => this.removeItem(product.id)}>
                  Remove From Cart
                </button>
                <h4 style={{ color: 'red' }}>{product.error}</h4>
              </li>
            );
          })}
        </ul>

        <div className='center'>
          Total Items{' '}
          {this.state.productArr !== [] ? (
            this.sumFinder('liquorQuantity')
          ) : (
            <h1>0 Items</h1>
          )}{' '}
          Total Cost {'$'}
          {this.state.productArr !== [] ? (
            this.sumFinder('liquorTotalPrice')
          ) : (
            <h1>'$0'</h1>
          )}
          <Checkout />
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    productsInCart: state.cartProducts,
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
    totals: state.cartTotals,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCartProducts: (id) => dispatch(fetchCartProducts(id)),
    fetchCartTotals: (id) => dispatch(fetchCartTotals(id)),
    addToCart: (productId, userId, itemAddedToCart) =>
      dispatch(addToCart(productId, userId, itemAddedToCart)),
    updateCart: (userId, product) => dispatch(updateCart(userId, product)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
