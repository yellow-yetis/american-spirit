import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts, updateCart, removeProductFromCart } from '../store/cart';
import { fetchCartTotals } from '../store/cartTotals';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

export class Cart extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      show: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  showModal() {
    this.setState({
      show: true,
    });
  }

  componentDidMount() {
    this.props.fetchCartProducts(this.props.userId);
  }

  async handleChange(e, product){
    if(e.target.value <= product.stock && e.target.value > 0){
      let itemUpdatedInCart = {
        ...product,
        cartLiquor: {
          liquorQuantity: e.target.value,
          liquorTotalPrice: e.target.value * product.price,
        }
      }
      this.setState({
        error: ''
      })
      await this.props.updateCart(this.props.userId, itemUpdatedInCart);
      await this.props.fetchCartProducts(this.props.userId);
    } else if (e.target.value <= 0){
      this.setState({
        error: 'Only quantities 1 or greater are allowed'
      })
    } else if (e.target.value > product.stock){
      this.setState({
        error: 'We do not have that many products in stock, please lower quantity'
      })
    }
  }

  async removeItem(userId, productId) {
    await this.props.removeProductFromCart(userId, productId);
    await this.props.fetchCartProducts(this.props.userId);
  }

  sumFinder(itemToSum) {
    return this.props.productsInCart.reduce(function (prev, curr) {
      return prev + curr.cartLiquor[itemToSum];
    }, 0);
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <div>
        <ul className='cart-container'>
          {this.props.productsInCart.map(product => {
            return (
              <li key={product.id}>
              <div className='single-cart'>
                <Link to={`/products/${product.id}`}>
                  <img className="cart-image" src={product.imageUrl} />
                </Link>
                <div className='cart-text'>
                <h4>{product.name}</h4>
                <div>
                  Price Per Bottle: {'$'}{product.price}
                </div>
                <div>
                  Total Price: {'$'}
                  {product.cartLiquor.liquorTotalPrice}
                </div>
                <div>
                  Total Quantity:{' '}
                  <input style={{width: "35px"}}
                    type="number"
                    min="1"
                    defaultValue={product.cartLiquor.liquorQuantity}
                    onChange={e => this.handleChange(e, product)}
                  />
                </div>
                <button className='btn-modal' onClick={() => this.removeItem(this.props.userId, product.id)}>
                  Remove From Cart
                </button>
                <h4 style={{ color: 'red' }}>{product.error}</h4>
                </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="cart-total">
          Total Items In Cart: {' '}
          {this.props.productsInCart ? this.sumFinder('liquorQuantity') : <h1>0 Items</h1>} ||
           Total
          Cost of Goods: {'$'}
          {this.props.productsInCart ? this.sumFinder('liquorTotalPrice') : <h1>'$0'</h1>}
          <Checkout />
        </div>
     </div>
     </div>
    );
  }
}

const mapState = state => {
  return {
    productsInCart: state.cartProducts,
    userId: state.auth.id,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchCartProducts: id => dispatch(fetchCartProducts(id)),
    updateCart: (userId, product) => dispatch(updateCart(userId, product)),
    removeProductFromCart: (userId, productId) =>
      dispatch(removeProductFromCart(userId, productId)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
