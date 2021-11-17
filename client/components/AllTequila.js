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
          <ul className='products'>
            {filteredTequilaArray.map(tequila => {
              return (
                <li key={tequila.id}>
                  <div className='product'>
                      <Link to={`/products/${tequila.id}`}>
                      <img src={tequila.imageUrl} height='350px' />
                      <h2>{tequila.name}</h2>
                      <h3>{tequila.category}</h3>
                      <h3>${tequila.price}</h3>
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

export default connect(mapState, mapDispatch)(Tequila);
