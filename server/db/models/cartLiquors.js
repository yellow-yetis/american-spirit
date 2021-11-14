const Sequelize = require('sequelize')
const db = require('../db')

const cartLiquor = db.define('cartLiquor', {
  liquorQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  liquorTotalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
  },
});

module.exports = cartLiquor;
