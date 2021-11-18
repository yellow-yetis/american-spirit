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

router.post('/', async (req, res, next) => {
  try {
    //If user is logged in
    if(req.body.userId){
      const userCart = await Cart.findOne({
        where: {
          userId: req.body.userId
        },
      });
      const newOrder = await Order.create({ ...req.body, cartId: userCart.id });
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
