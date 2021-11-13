const Sequelize = require('sequelize')
const db = require('../db')

const cartLiquor = db.define('cartLiquor', {
  liquorQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  liquorPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'https://packagingoptionsdirect.com/750-ml-clear-glass-oval-liquor-bottle-215-mm-bar-top-neck-finish',
  },
});

module.exports = cartLiquor;
