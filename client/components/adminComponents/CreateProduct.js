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
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Region: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Description: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Name: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Name: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Name: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Name: </label>
          <input
            placeholder='Product Name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, null)(CreateProduct);
