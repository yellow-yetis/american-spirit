//this is the access point for all things database related!

const db = require('./db');
const User = require('./models/User');
const Liquor = require('./models/Liquor');
const Cart = require('./models/Cart');
const Sequelize = require('sequelize');
// JOE_CR: Be consistent with your casing. All the other models are capitalized!
const cartLiquor = require('./models/cartLiquors');
const Order = require('./models/Order');
//associations could go here!

Cart.belongsTo(User);
User.hasOne(Cart);

Cart.belongsToMany(Liquor, { through: cartLiquor });
Liquor.belongsToMany(Cart, { through: cartLiquor });

User.hasMany(Order); // FK of OrderID in user Table
Order.belongsTo(User); // FK of userId in order Table
Order.belongsTo(Cart); //CartID in order Table

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
