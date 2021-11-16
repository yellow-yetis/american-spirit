import React from 'react';
import { fetchProducts, deleteProduct } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AdminProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    console.log('this is my adminProducts state ', this.state);
    return (
      <div>
        <h1>All Products</h1>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {this.props.products.map((product) => {
              return (
                <li key={product.id}>
                  <div>
                    <button
                      className='delete'
                      type='button'
                      onClick={() => this.props.deleteProduct(product.id)}
                    >
                      X
                    </button>
                    <h2>
                      <Link to={`/admin/products/${product.id}`}>
                        {product.name}
                      </Link>{' '}
                      - {product.category} - $ {product.price}
                    </h2>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.admin.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
    // deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(mapState, mapDispatch)(AdminProducts);
