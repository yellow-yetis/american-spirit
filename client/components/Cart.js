import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts } from '../store/cart';
import { fetchCartTotals } from '../store/cartTotals';

export class Cart extends Component {
  constructor(){
    super();
    this.state = {
      productArr: [],
    }
  }

  componentDidMount() {
    this.props.fetchCartProducts(this.props.userId);
    this.props.fetchCartTotals(this.props.userId);
  }

  render() {
    console.log(this.props.totals);
      return (
        <div>
          <h1 className="center">Shopping Cart</h1>
          <ul style={{listStyle: 'none'}}>
            {
             this.props.productsInCart.map(product => {
               return (
                <li key={product.id}>
                  <h4>{product.name}</h4>
                  <img className="cartImage" src={product.imageUrl} />
                  <div>Total Price: $ {product.cartLiquor.liquorTotalPrice}</div>
                  <div>Total Quantity: <input type="number" min="1" defaultValue={product.cartLiquor.liquorQuantity} onChange={(e) => this.handleChange(e, product.id)} /></div>
                  <button onClick={() => this.removeItem(product.id)}>Remove From Cart</button>
                  <h4 style={{color: 'red'}}>{product.error}</h4>
                </li>
               )
             })
            }
          </ul>
          <div className="right">Total Items {
            this.props.totals.totalQuantity ? this.props.totals.totalQuantity : <h1>0 Items</h1>
          } Total Cost {'$'}{
            this.props.totals.totalPrice ? this.props.totals.totalPrice : <h1>'$0'</h1>
      }</div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    productsInCart: state.cartProducts,
    isLoggedIn: !!state.auth.id,
    userId: state.auth.id,
    totals: state.cartTotals
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCartProducts: (id) => dispatch(fetchCartProducts(id)),
    fetchCartTotals: (id) => dispatch(fetchCartTotals(id))
  };
};

export default connect(mapState, mapDispatch)(Cart);
