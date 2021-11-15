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
          <ul style={{ listStyle: 'none' }}>
            {filteredWhiskeyArray.map(whiskey => {
              return (
                <li key={whiskey.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${whiskey.id}`}>
                        {whiskey.name} <img className="cartImage" src={whiskey.imageUrl} />
                      </Link>{' '}
                      - {whiskey.category} - $ {whiskey.price}
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

export default connect(mapState, mapDispatch)(Whiskey);
