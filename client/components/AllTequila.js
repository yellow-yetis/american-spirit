import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Tequila extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const filteredTequilaArray = this.props.products.filter(product => {
      return product.category === 'Tequila';
    });

    return (
      <div>
        <h1>Tequila</h1>
        <div>
          <ul style={{ listStyle: 'none' }}>
            {filteredTequilaArray.map(tequila => {
              return (
                <li key={tequila.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${tequila.id}`}>
                        {tequila.name} <img className="cartImage" src={tequila.imageUrl} />
                      </Link>{' '}
                      - {tequila.category} - $ {tequila.price}
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

export default connect(mapState, mapDispatch)(Tequila);
