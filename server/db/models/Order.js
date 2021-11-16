const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  nameOnCard: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  CVV: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  validThru: {
    type: Sequelize.STRING,
  },
});

module.exports = Order;
