import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {
  constructor(){
    super();
    this.state = {
      quantityToBuy: 1,
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount(){
    this.props.loadSingleProduct(this.props.match.params.productId);
  }

  handleChange(e){
    if(e.target.value <= 0){
      this.setState({
        quantityToBuy: 1,
        error: 'Only product quantities of 1 or greater are allowed'
      })
    } else if (e.target.value > this.props.product.stock){
      this.setState({
        error: 'We do not have that many products in stock, please lower quantity'
      })
    } else {
      this.setState({
        quantityToBuy: e.target.value,
        error: ''
      })
    }
  }

  handleAddToCart(e, id, price, quantity){
      console.log("EVENT: ", e)
      console.log("ID: ", id);
      console.log("PRICE: ", price);
      console.log("QUANTITY: ", quantity);

      let key = 'product'+id.toString();
      let itemAddedToCart = {
        liquorQuantity: quantity,
        liquorPrice: quantity * price,
        liquorId: id
      };
      console.log("ADDED TO CART: ", itemAddedToCart)
      localStorage.setItem(key, JSON.stringify(itemAddedToCart));
  }


  render(){
    const name = this.props.product.name || '';
    const type = this.props.product.category || '';
    const description = this.props.product.description || '';
    const price = this.props.product.price || '';
    const ABV = this.props.product.ABV || '';
    const productId = this.props.product.id || '';

   return (
     <div>
       <h1>{name}</h1>
       <h2>{type}</h2>
       <p>{description}</p>
       <h2>Price: {price}</h2>
       <h2>{ABV}</h2>
      <div>
        <label>Select Quantity:</label>
        <input type="number" min="1" defaultValue="1" onChange={this.handleChange}></input>
      </div>
      <div>
      {
        this.state.error ? <h4 style={{ color: 'red' }}>{this.state.error}</h4> : <h4></h4>
      }
      </div>
      <div>
        <button onClick={(e) => this.handleAddToCart(e, productId, price, this.state.quantityToBuy)}>Add To Cart</button>
      </div>
     </div>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
