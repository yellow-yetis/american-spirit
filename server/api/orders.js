const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
const Cart = require('../db/models/Cart');

// /api/orders/
// JOE_CR: This route probably should be gated on admin level access.
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    const userCartId = userCart.dataValues.id;
    const newOrder = await Order.create({ ...req.body, cartId: userCartId });
    await userCart.removeLiquors({
      where: {
        cartId: userCartId,
      },
    });
    // JOE_CR: Isn't the `newOrder` above holding a reference to this cart that gets destroyed?
    await Cart.destroy({
      where: {
        cartId: userCartId,
      },
    });
    await Cart.create({
      userId: req.body.userId,
    });
    res.json(newOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
