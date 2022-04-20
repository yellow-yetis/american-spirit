import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      size: '',
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
        size: this.props.product.size || '',
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
        <div className='col-right'>
          <img src={this.props.product.imageUrl} align='left' />
          <h1>{this.props.product.name}</h1>
          <h2>{this.props.product.type}</h2>
          <p>{this.props.product.description}</p>
          <h2>Made in {this.props.product.region}</h2>
          <h2>Price: ${this.props.product.price}</h2>
          <h2>ABV: {this.props.product.ABV}%</h2>
          <h2>{this.props.product.size}ml</h2>
        </div>
        <form onSubmit={this.handleSubmit} className='edit-form'>
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
          <label>Size: </label>
          <select
            name='size'
            onChange={this.handleChange}
            value={this.state.size}
          >
            <option value=''>--Select a Size--</option>
            <option value='750'>750ml</option>
          </select>
          <button type='submit' className='button-edit'>Edit Product</button>
          <div>
        <form onSubmit={(event) => event.preventDefault()}>
          <button
            onClick={() =>
              this.props.deleteProduct(this.props.match.params.productId)
            }
            className='delete-product'>
            Delete Product
          </button>
        </form>
      </div>
    </form>
  </div>
    );
  }
}

const mapState = (state) => ({
  product: state.admin.product,
});

const mapDispatch = (dispatch, { history }) => {
  return {
    updateProduct: (product) => dispatch(updateProduct(product, history)),
    deleteProduct: (product) => dispatch(deleteProduct(product, history)),
    fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(EditProduct);
