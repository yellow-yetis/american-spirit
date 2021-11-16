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
          <ul style={{ listStyle: 'none' }}>
            {filteredRumArray.map(rum => {
              return (
                <li key={rum.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${rum.id}`}>
                        {rum.name} <img className="cartImage" src={rum.imageUrl} />
                      </Link>{' '}
                      - {rum.category} - $ {rum.price}
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

export default connect(mapState, mapDispatch)(Rum);
