import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {
  componentDidMount(){
    this.props.loadSingleProduct(this.props.match.params.productId);
  }

  render(){
    const name = this.props.product.name || '';
    const type = this.props.product.type || '';
    const description = this.props.product.description || '';
    const price = this.props.product.price || '';
    const ABV = this.props.product.ABV || '';
   return (
     <div>
       <h1>{name}</h1>
       <h2>{type}</h2>
       <h2>{description}</h2>
       <h2>{price}</h2>
       <h2>{ABV}</h2>
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
