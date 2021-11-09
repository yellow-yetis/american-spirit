const router = require('express').Router();
const {
  models: { User, Cart, cartLiquor },
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
//GET ROUTE - ALL PRODUCTS IN THE USERS CART

router.get('/:id/cart', async (req, res, next) => {
  try {
    const cartProducts = Cart.findAll({
      where: {
        userId: req.params.id,
      },
      include: cartLiquor,
    });
    res.json(cartProducts);
  } catch (err) {
    next(err);
  }
});

//PUT ROUTE - EDIT QTY IN USER CART FOR PRODUCTS
