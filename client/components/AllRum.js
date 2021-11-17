import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Rum extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const filteredRumArray = this.props.products.filter(product => {
      return product.category === 'Rum';
    });

    return (
      <div>
        <h1>Rum</h1>
        <div>
          <ul className='products'>
            {filteredRumArray.map(rum => {
              return (
                <li key={rum.id}>
                  <div className='product'>
                      <Link to={`/products/${rum.id}`}>
                      <img src={rum.imageUrl} height='350px' />
                      <h2>{rum.name}</h2>
                      <h3>{rum.category}</h3>
                      <h3>${rum.price}</h3>
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

export default connect(mapState, mapDispatch)(Rum);
