const Sequelize = require(`sequelize`)
const db = require(`../db`)

const Cart = db.define('cart', {
  // JOE_CR: I'm not sure that either of this columns is necessary. Can you not calculate
  // the total quantity and price of a cart by the items/liquors associated? This leads to
  // storing more data than is needed to represent your system.
  totalQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  totalPrice: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
})


module.exports = Cart
