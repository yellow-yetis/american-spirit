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
          <ul style={{ listStyle: 'none' }}>
            {filteredMezcalArray.map(mezcal => {
              return (
                <li key={mezcal.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${mezcal.id}`}>
                        {mezcal.name} <img className="cartImage" src={mezcal.imageUrl} />
                      </Link>{' '}
                      - {mezcal.category} - $ {mezcal.price}
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

export default connect(mapState, mapDispatch)(Mezcal);
