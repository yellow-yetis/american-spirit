import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchSingleProduct,
  updateProduct,
  deleteProduct,
} from '../../store/admin';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      region: '',
      description: '',
      price: '',
      ABV: '',
      imageUrl: '',
      stock: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props.match.params;
    this.props.fetchSingleProduct(productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        name: this.props.product.name || '',
        category: this.props.product.category || '',
        region: this.props.product.region || '',
        description: this.props.product.description || '',
        price: this.props.product.price || '',
        ABV: this.props.product.ABV || '',
        imageUrl: this.props.product.imageUrl || '',
        stock: this.props.product.stock || '',
      });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProduct({ ...this.props.product, ...this.state });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Brand Name: </label>
          <input
            placeholder='Brand'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Category: </label>
          <select
            name='category'
            onChange={this.handleChange}
            value={this.state.category}
          >
            <option value=''>--Select a Category--</option>
            <option value='Gin'>Gin</option>
            <option value='Mezcal'>Mezcal</option>
            <option value='Rum'>Rum</option>
            <option value='Tequila'>Tequila</option>
            <option value='Vodka'>Vodka</option>
            <option value='Whiskey'>Whiskey</option>
          </select>
          <label>Region: </label>
          <input
            placeholder='Product Region'
            name='region'
            onChange={this.handleChange}
            value={this.state.region}
          />
          <label>Description: </label>
          <textarea
            placeholder='Product Description'
            name='description'
            onChange={this.handleChange}
            value={this.state.description}
          />
          <label>Price: $</label>
          <input
            placeholder='200'
            name='price'
            onChange={this.handleChange}
            value={this.state.price}
          />
          <label>ABV: </label>
          <input
            placeholder='Product ABV'
            name='ABV'
            onChange={this.handleChange}
            value={this.state.ABV}
          />
          <label>Image: </label>
          <input
            placeholder='www.imageurl.com'
            name='imageUrl'
            onChange={this.handleChange}
            value={this.state.imageUrl}
          />
          <label>Stock: </label>
          <input
            placeholder='Product Quantity'
            name='stock'
            onChange={this.handleChange}
            value={this.state.stock}
          />
          <button type='submit'>Edit Product</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => ({
  product: state.admin.product,
});

const mapDispatch = (dispatch) => {
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(EditProduct);
