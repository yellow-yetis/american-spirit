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
          <ul style={{ listStyle: 'none' }}>
            {filteredGinArray.map(gin => {
              return (
                <li key={gin.id}>
                  <div>
                    <h2>
                      <Link to={`/products/${gin.id}`}>
                        {gin.name} <img className="cartImage" src={gin.imageUrl} />
                      </Link>{' '}
                      - {gin.category} - $ {gin.price}
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

export default connect(mapState, mapDispatch)(Gin);
