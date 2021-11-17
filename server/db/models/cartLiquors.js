const Sequelize = require('sequelize')
const db = require('../db')

const cartLiquor = db.define('cartLiquor', {
  // JOE_CR: I would suggest not including the entity name as part of your column name.
  // i.e. your code will read this way: `cartLiquor.liquorQuantity` which is redundant.
  // These column names are better named "quantity" and "totalPrice". 
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
