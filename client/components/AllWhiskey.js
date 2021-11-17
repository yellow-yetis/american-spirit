import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Whiskey extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const filteredWhiskeyArray = this.props.products.filter(product => {
      return product.category === 'Whiskey';
    });

    return (
      <div>
        <h1>Whiskey</h1>
        <div>
          <ul className='products'>
            {filteredWhiskeyArray.map(whiskey => {
              return (
                <li key={whiskey.id}>
                  <div className='product'>
                      <Link to={`/products/${whiskey.id}`}>
                      <img src={whiskey.imageUrl} height='350px' />
                      <h2>{whiskey.name}</h2>
                      <h2>{whiskey.category}</h2>
                      <h2>${whiskey.price}</h2>
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

export default connect(mapState, mapDispatch)(Whiskey);
