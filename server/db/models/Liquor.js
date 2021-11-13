const Sequelize = require('sequelize');
const db = require('../db');

const Liquor = db.define('liquor', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
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
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
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
