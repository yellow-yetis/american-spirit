//this is the access point for all things database related!

const db = require('./db');
const User = require('./models/User');
const Liquor = require('./models/Liquor');
const Cart = require('./models/Cart');
const Sequelize = require('sequelize');
const cartLiquor = require('./models/cartLiquors');
const Order = require('./models/Order');
//associations could go here!

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.belongsToMany(Liquor, { through: cartLiquor });
Liquor.belongsToMany(Cart, { through: cartLiquor });

module.exports = {
  db,
  models: {
    User,
    Cart,
    Liquor,
    cartLiquor,
    Order,
  },
};
