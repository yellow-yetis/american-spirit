const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  nameOnCard: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  CVV: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  validThru: {
    type: Sequelize.STRING,
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
