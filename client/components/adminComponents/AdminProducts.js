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
        <h1>Select Product to Edit</h1>
        <div>
          <ul className='products'>
            {this.props.products.map((product) => {
              return (
                <li key={product.id}>
                  <div className='product'>
                    <Link to={`/admin/products/${product.id}`}>
                      <img src={product.imageUrl} height='275px' />
                      <h2>{product.name}</h2>
                      <h3>{product.category}</h3>
                      <h3>${product.price}</h3>
                    </Link>{' '}
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
