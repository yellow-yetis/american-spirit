import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Mezcal extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {

    const filteredMezcalArray = this.props.products.filter(product => {
      return product.category === 'Mezcal';
    });

    return (
      <div>
        <h1>Mezcal</h1>
        <div>
          <ul className='products'>
            {filteredMezcalArray.map(mezcal => {
              return (
                <li key={mezcal.id}>
                  <div className='product'>
                      <Link to={`/products/${mezcal.id}`}>
                      <img src={mezcal.imageUrl} height='350px' />
                      <h2>{mezcal.name}</h2>
                      <h3>{mezcal.category}</h3>
                      <h3>${mezcal.price}</h3>
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

export default connect(mapState, mapDispatch)(Mezcal);
