import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/products';

export class Gin extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const filteredGinArray = this.props.products.filter(product => {
      return product.category === 'Gin';
    });

    return (
      <div>
        <h1>Gin</h1>
        <div>
          <ul className='products'>
            {filteredGinArray.map(gin => {
              return (
                <li key={gin.id}>
                  <div className='product'>
                      <Link to={`/products/${gin.id}`}>
                      <img src={gin.imageUrl} height='350px'/>
                      <h2>{gin.name}</h2>
                      <h3>{gin.category}</h3>
                      <h3>${gin.price}</h3>
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

export default connect(mapState, mapDispatch)(Gin);
