import React from 'react';
import { fetchProducts } from '../store/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <h1>Shop All</h1>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {this.props.products.map(product => {
              return (
                <li key={product.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${product.id}`}>
                        <img className="cartImage" src={product.imageUrl} />
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

const mapState = state => {
  return {
    products: state.products,
  };
};

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
