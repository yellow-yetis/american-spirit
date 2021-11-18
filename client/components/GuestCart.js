import React, { Component } from 'react';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';

export class GuestCart extends Component {
  constructor() {
    super();
    this.state = {
      productArr: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
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
    let updateProductArr = this.state.productArr.filter(x => x.id !== liquorId);
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
    const updateArr = this.state.productArr.filter(x => x.id === productId);
    const productToUpdate = updateArr[0];

    if (updatedQuantity <= 0) {
      productToUpdate.error = 'Only product quantities of 1 or greater are allowed';
    } else if (updatedQuantity > productToUpdate.stock) {
      productToUpdate.error = 'We do not have that many products in stock, please lowerquantity';
    } else {
      productToUpdate.error = '';
      productToUpdate.liquorQuantity = parseInt(updatedQuantity);
      productToUpdate.liquorTotalPrice = parseInt(updatedQuantity * productToUpdate.price);
    }

    const updatedStateArray = this.state.productArr.map(x => {
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
        <h1 className="center">Shopping Cart</h1>
        <ul style={{ listStyle: 'none' }}>
          {this.state.productArr.map(product => {
            return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <Link to={`/products/${product.id}`}>
                  <img className="cartImage" src={product.imageUrl} />
                </Link>
                <div>
                    Price Per Bottle: {'$'}{product.price}
                  </div>
                <div>Total Price: {'$'}{product.liquorTotalPrice}</div>
                <div>
                  Total Quantity:{' '}
                  <input
                    type="number"
                    min="1"
                    defaultValue={product.liquorQuantity}
                    onChange={e => this.handleChange(e, product.id)}
                  />
                </div>
                <button onClick={() => this.removeItem(product.id)}>Remove From Cart</button>
                <h4 style={{ color: 'red' }}>{product.error}</h4>
              </li>
            );
          })}
        </ul>
        <div className="right">
          Total Items In Cart {' '}
          {this.state.productArr !== [] ? this.sumFinder('liquorQuantity') : <h1>0 Items</h1>} Total
          Cost of Goods {'$'}
          {this.state.productArr !== [] ? this.sumFinder('liquorTotalPrice') : <h1>'$0'</h1>}
        </div>
        <Checkout totalPrice={this.sumFinder('liquorTotalPrice')} totalQuantity={this.sumFinder('liquorQuantity')} />
      </div>
    );
  }
}

export default GuestCart;
