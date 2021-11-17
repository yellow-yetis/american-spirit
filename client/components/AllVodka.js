import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Vodka extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const filteredVodkaArray = this.props.products.filter((product) => {
      return product.category === 'Vodka';
    });

    return (
      <div>
        <h1>Vodka</h1>
        <div>
          <ul className='products'>
            {filteredVodkaArray.map((vodka) => {
              return (
                <li key={vodka.id}>
                  <div className='product'>
                      <Link to={`/products/${vodka.id}`}>
                      <img src={vodka.imageUrl} height='350px' />
                      <h2>{vodka.name}</h2>
                      <h3>{vodka.category}</h3>
                      <h3>${vodka.price}</h3>
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

const mapState = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapState, mapDispatch)(Vodka);
