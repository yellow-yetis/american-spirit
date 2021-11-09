//this is the access point for all things database related!

const db = require('./db')
const User = require('./models/User')
const Liquor = require('./models/Liquor')
const Cart = require('./models/Cart')
const Sequelize = require('sequelize')
//associations could go here!

const cartLiquor = db.define('cartLiquor', {
  cartQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  cartPrice: {
    type: Sequelize.FLOAT
  }
})

Cart.belongsTo(User)
User.hasOne(Cart)

Cart.belongsToMany(Liquor,{through: cartLiquor})
Liquor.belongsToMany(Cart,{through: cartLiquor})




module.exports = {
  db,
  models: {
    User,
    Cart,
    Liquor,
    cartLiquor
  },
}
