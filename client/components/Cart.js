import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts } from '../store/cart';

const DummyData = [
  {
    name: 'Ketel One',
    category: 'Vodka',
    region: 'Holland',
    imageUrl:
      'https://products3.imgix.drizly.com/ci-ketel-one-vodka-1a0b248966757601.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
    price: '30',
    ABV: '40',
    stock: '10',
  },
  {
    name: 'Russian Standard Platinum',
    category: 'Vodka',
    region: 'Russia',
    imageUrl:
      'https://products1.imgix.drizly.com/ci-russian-standard-platinum-vodka-6c917b4ab695e98e.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20',
    price: '33',
    ABV: '40',
    stock: '10',
  },
];
export class Cart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts(1);
  }
  render() {
    return (
      <div>
        <h1 className="center">Shopping Cart</h1>
        {DummyData.map(product => {
          return (
            <div className="all-carts-list">
              <div key={product.name}>
                <h4>{product.name}</h4>
                <img className="cartImage" src={product.imageUrl} />
                <div>Price: ${product.price}</div>
                <div>Category:{product.category}</div>
                <select name="cars" id="cars">
                  <option value="1">Qty: 1</option>
                  <option value="2">Qty: 2</option>
                  <option value="3">Qty: 3</option>
                  <option value="4">Qty: 4</option>
                  <option value="5">Qty: 5</option>
                </select>
              </div>
            </div>
          );
        })}
        <div className="right">Subtotal( # of Items): $100</div>
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
