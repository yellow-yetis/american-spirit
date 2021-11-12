import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartProducts } from '../store/cart';

export class Cart extends Component {
  constructor(){
    super();
    this.state = {
      productArr: [],
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //This will need to be refactored once we account for signed in users.
    //If a user is signed in, axios.get to the db to pull in the product info (eager loading between cartLiquors and Liqour)
    //If not, pull it out of local storage
    let productArr = [];
    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i) !== 'token'){
        productArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
    }
    this.setState({
      productArr: productArr
    })
  }

  removeItem(liquorId){
    let updateProductArr = this.state.productArr.filter((x) =>
    x.id !== liquorId);
    this.setState({
      productArr: updateProductArr
    });
    localStorage.removeItem('product'+liquorId)
  }

  handleChange(e, productId){
    const updatedQuantity = e.target.value;
    const updateArr = this.state.productArr.filter(x => x.id === productId);
    const filteredProductState = this.state.productArr.filter(x => x.id !== productId);
    const productToUpdate = updateArr[0];

    if(updatedQuantity <= 0){
      this.setState({
        error:  'Only product quantities of 1 or greater are allowed'
      })
    } else if (updatedQuantity > productToUpdate.stock){
      this.setState({
        error: 'We do not have that many products in stock, please lower quantity'
      })
    } else {
      productToUpdate.liquorQuantity = parseInt(updatedQuantity);
      productToUpdate.liquorTotalPrice = parseInt(updatedQuantity * productToUpdate.price);
      this.setState({
        productArr: [...filteredProductState, productToUpdate]
      })
    }



/*     if(e.target.value <= 0){
      this.setState({
        quantityToBuy: 1,
        error: 'Only product quantities of 1 or greater are allowed'
      })
    } else if (e.target.value > 10){
      this.setState({
        error: 'We do not have that many products in stock, please lower quantity'
      })
    } else {
      this.setState({
        quantityToBuy: parseInt(e.target.value),
        error: ''
      })
    } */
  }

  render() {
    console.log(this.state.productArr);
    return (
      <div>
        <h1 className="center">Shopping Cart</h1>
        <ul style={{listStyle: 'none'}}>
          {
           this.state.productArr.map(product => {
             return (
              <li key={product.id}>
                <h4>{product.name}</h4>
                <img className="cartImage" src={product.imageUrl} />
                <div>Total Price: $ {product.liquorTotalPrice}</div>
                <div>Total Quantity: <input type="number" min="1" defaultValue={product.liquorQuantity} onChange={(e) => this.handleChange(e, product.id)} /></div>
                <button onClick={() => this.removeItem(product.id)}>Remove From Cart</button>
              </li>
             )
           })
          }
        </ul>
        <div className="right">Subtotal({this.state.productArr.length} of Items): $100</div>
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
