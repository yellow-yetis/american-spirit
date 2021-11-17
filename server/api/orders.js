const router = require('express').Router();
const {
  models: { Order },
} = require('../db');
const Cart = require('../db/models/Cart');
const { requireToken } = require('./gatekeepingmiddleware')

// /api/orders/
router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    //If user is logged in
    if(req.user.id){
      const userCart = await Cart.findOne({
        where: {
          userId: req.user.id
        },
      });
      const newOrder = await Order.create({ ...req.body, userId: req.user.id, cartId: userCart.id });
      res.json(newOrder);
      //User checkout as guest
    } else {
      const newOrder = await Order.create({...req.body});
      res.json(newOrder);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
