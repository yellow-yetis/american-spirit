const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  // JOE_CR: A plan to store credit card information directly in your database
  // is questionable. You will likely use a third-party service like Stripe/PayPal
  // to receive payment confirmation. There are a LOT of standards and rules to follow
  // and be audited if your web application is to receive payment credentails directly.
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
  // JOE_CR: These columns should not be specified here, but should be expected to be added
  // via an association.
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
