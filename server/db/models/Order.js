const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  nameOnCard: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  productsInOrder: {
    type: Sequelize.STRING,
    allowNull: false
  },
  priceOfCart: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = Order;
