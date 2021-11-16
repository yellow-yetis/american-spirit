import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../store/admin';

class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      category: '',
      region: '',
      description: '',
      price: '',
      ABV: '',
      imageUrl: '',
      stock: '',
      size: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createProduct({ ...this.state });
    this.setState({
      name: '',
      category: '',
      region: '',
      description: '',
      price: '',
      ABV: '',
      imageUrl: '',
      stock: '',
      size: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Brand Name: </label>
          <input
            placeholder='Product Name'
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
          <label>Size: </label>
          <select
            name='size'
            onChange={this.handleChange}
            value={this.state.size}
          >
            <option value=''>--Select a Size--</option>
            <option value='750'>750ml</option>
          </select>
          <button type='submit'>Add New Product</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(createProduct(product, history)),
});

export default connect(null, mapDispatch)(CreateProduct);
