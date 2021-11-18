const router = require('express').Router();
const {
  models: { User, Cart, cartLiquor },
} = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingmiddleware');
module.exports = router;

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'isAdmin'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//GET ROUTE - ALL PRODUCTS IN THE USERS CART

router.get('/:id/cart', async (req, res, next) => {
  try {
    const usersCart = await Cart.findOne({
      attributes: {
        where: {
          userId: req.params.id,
        },
      },
    });

    const cartProducts = await cartLiquor.findAll({
      where: {
        cartId: usersCart.id,
      },
    });
    res.json(cartProducts);
  } catch (err) {
    next(err);
  }
});
