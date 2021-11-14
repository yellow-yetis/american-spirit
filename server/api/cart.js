const router = require('express').Router();
const {
  models: { Liquor, cartLiquor, Cart },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    console.log (req.headers.userid);
    const userCart = await Cart.findOne({
      where: {
        userId: req.headers.userid
      }
    });
    const userCartId = userCart.dataValues.id;

    const productsInCart = await userCart.getLiquors({cartId: userCartId})

    res.json(productsInCart);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
