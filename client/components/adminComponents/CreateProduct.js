import React from 'react';
import { connect } from 'react-redux';

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.CreateProduct({ ...this.state });
    this.setState({
      name: '',
      category: '',
      region: '',
      description: '',
      price: '',
      ABV: '',
      imageUrl: '',
      stock: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Add New Product</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Category: </label>
          <input
            placeholder='Product Category'
            name='category'
            onChange={this.handleChange}
            value={this.state.category}
          />
          <label>Region: </label>
          <input
            placeholder='Product Region'
            name='region'
            onChange={this.handleChange}
            value={this.state.region}
          />
          <label>Description: </label>
          <input
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
        </form>
      </div>
    );
  }
}

export default connect(null, null)(CreateProduct);
