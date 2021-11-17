import React from 'react';
import { fetchProducts } from '../../store/admin';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AdminProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <h1>All Products</h1>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {this.props.products.map((product) => {
              return (
                <li key={product.id}>
                  <div>
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

const mapState = (state) => ({
  products: state.admin.products,
});

const mapDispatch = (dispatch) => ({
  loadProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(AdminProducts);
