import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {
  constructor(){
    super();
    this.state = {
      quantityToBuy: 1,
      totalPriceOfProduct: 1,
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.loadSingleProduct(this.props.match.params.productId);
  }

  //When user clicks ATC, should submit produce id, current quantity, total price for quantity (i.e. quantity x this.props.product.price) and cartId (from sessionStorage?)
  //When submitting as well if this.state.error !== '' then it should not go through, should display "please edit cart" msg or something
  handleChange(e){
    console.log(e.target.value);
    if(e.target.value <= 0){
      this.setState({
        quantityToBuy: 1,
        totalPriceOfProduct: this.state.quantityToBuy * this.props.product.price,
        error: 'Only product quantities of 1 or greater are allowed'
      })
    } else if (e.target.value > this.props.product.stock){
      this.setState({
        error: 'We do not have that many products in stock, please lower quantity'
      })
    } else {
      this.setState({
        quantityToBuy: e.target.value,
        totalPriceOfProduct: this.state.quantityToBuy * this.props.product.price,
        error: ''
      })
    }
  }

  render(){
    console.log(this.state);
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
       <h2>{price}</h2>
       <h2>{ABV}</h2>
      <label>Select Quantity:</label>
      <input type="number" min="1" defaultValue="1" onChange={this.handleChange}></input>
      <div>
      {
        this.state.error ? <h4 style={{ color: 'red' }}>{this.state.error}</h4> : <h4></h4>
      }
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
