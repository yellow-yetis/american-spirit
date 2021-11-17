const Sequelize = require('sequelize');
const db = require('../db');

const Liquor = db.define('liquor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // JOE_CR: How often do you think you will update your categories in the future?
  // What are the drawbacks of keeping the possibilities in an enum vs. a different strategy?
  category: {
    type: Sequelize.ENUM('Vodka', 'Gin', 'Tequila', 'Mezcal', 'Rum', 'Whiskey'),
    allowNull: false,
  },
  region: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  // JOE_CR: 🤤
  ABV: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
});

module.exports = Liquor;
